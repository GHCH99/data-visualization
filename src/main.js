// 应用入口：初始化主题、菜单与路由，创建图表实例
import { buildMenu, getExampleByKey, examplesIndex } from './router.js'

// 图表实例与主题状态
let chart = null
let theme = 'light'

// 当前示例的原始与编辑后配置存储
const originalOptions = new Map() // key -> option object
const editedOptions = new Map()   // key -> option object

function initChart() {
  if (chart) chart.dispose()
  chart = echarts.init(document.getElementById('chart'), theme === 'dark' ? 'dark' : null)
  window.addEventListener('resize', () => chart && chart.resize())
  return chart
}

// 渲染指定示例：优先使用已编辑配置，否则使用原始配置
function renderExample(key) {
  const meta = document.getElementById('meta')
  const ex = getExampleByKey(key)
  if (!ex) return
  initChart()
  if (!originalOptions.has(key)) originalOptions.set(key, ex.option())
  const opt = editedOptions.get(key) || originalOptions.get(key)
  chart.setOption(opt, true)
  meta.innerHTML = `${ex.category} / ${ex.name}` + (ex.source ? ` · <a href="${ex.source}" target="_blank" rel="noopener">来源</a>` : '')
  document.querySelectorAll('.menu-item').forEach(a => a.classList.toggle('active', a.dataset.key === key))
  syncEditor(key)
}

function applyThemeToggle() {
  const toggle = document.getElementById('themeToggle')
  toggle.addEventListener('change', () => {
    theme = toggle.checked ? 'dark' : 'light'
    document.body.classList.toggle('dark', theme === 'dark')
    const currentKey = location.hash.replace('#', '') || examplesIndex[0].key
    renderExample(currentKey)
  })
}

function applyRouter() {
  window.addEventListener('hashchange', () => {
    const key = location.hash.replace('#', '')
    renderExample(key)
  })
}

function applySearch() {
  const input = document.getElementById('search')
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase()
    document.querySelectorAll('.menu-item').forEach(a => {
      const visible = a.textContent.toLowerCase().includes(q)
      a.style.display = visible ? 'block' : 'none'
    })
  })
}

function boot() {
  buildMenu(renderExample)
  applyThemeToggle()
  applyRouter()
  applySearch()
  const initial = location.hash.replace('#', '') || examplesIndex[0].key
  renderExample(initial)
}

boot()

// ---------- 编辑器逻辑 ----------
function safeStringify(obj) {
  try { return JSON.stringify(obj, (k, v) => typeof v === 'function' ? undefined : v, 2) }
  catch { return '' }
}

function syncEditor(key) {
  const editor = document.getElementById('optionEditor')
  const status = document.getElementById('status')
  const opt = editedOptions.get(key) || originalOptions.get(key)
  editor.value = safeStringify(opt)
  status.textContent = editedOptions.has(key) ? '已编辑' : '示例原始配置'
}

function bindEditor() {
  const editor = document.getElementById('optionEditor')
  const err = document.getElementById('editorError')
  const applyBtn = document.getElementById('applyOption')
  const resetBtn = document.getElementById('resetOption')
  const exportPNGBtn = document.getElementById('exportPNG')
  const exportJSONBtn = document.getElementById('exportJSON')
  const copyBtn = document.getElementById('copyOption')

  applyBtn.addEventListener('click', () => {
    err.textContent = ''
    try {
      const parsed = JSON.parse(editor.value)
      const key = location.hash.replace('#', '') || examplesIndex[0].key
      editedOptions.set(key, parsed)
      chart.setOption(parsed, true)
      syncEditor(key)
    } catch (e) {
      err.textContent = '配置解析错误：' + e.message
    }
  })

  resetBtn.addEventListener('click', () => {
    const key = location.hash.replace('#', '') || examplesIndex[0].key
    editedOptions.delete(key)
    const opt = originalOptions.get(key)
    chart.setOption(opt, true)
    syncEditor(key)
  })

  exportPNGBtn.addEventListener('click', () => {
    try {
      const url = chart.getDataURL({ type: 'png', pixelRatio: 2, backgroundColor: theme === 'dark' ? '#0b1020' : '#ffffff' })
      const a = document.createElement('a')
      a.href = url
      const key = location.hash.replace('#', '') || examplesIndex[0].key
      a.download = key + '.png'
      a.click()
    } catch (e) {}
  })

  exportJSONBtn.addEventListener('click', () => {
    const key = location.hash.replace('#', '') || examplesIndex[0].key
    const data = editor.value
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = key + '.json'
    a.click()
    URL.revokeObjectURL(url)
  })

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(editor.value)
      err.textContent = '已复制到剪贴板'
      setTimeout(() => { err.textContent = '' }, 1200)
    } catch (e) {
      err.textContent = '复制失败：' + e.message
    }
  })
}

bindEditor()