// 路由与示例索引：组织分类与示例条目
import { lineExamples } from './examples/line.js'
import { barExamples } from './examples/bar.js'
import { pieExamples } from './examples/pie.js'
import { boxplotExamples } from './examples/boxplot.js'
import { sankeyExamples } from './examples/sankey.js'

export const examples = [
  { category: '折线图', items: lineExamples },
  { category: '柱状图', items: barExamples },
  { category: '饼图', items: pieExamples },
  { category: '箱线图', items: boxplotExamples },
  { category: '桑基图', items: sankeyExamples }
]

export const examplesIndex = examples.flatMap(cat => cat.items.map(item => ({ key: item.key, name: item.name, category: cat.category })))

export function buildMenu(onSelect) {
  const menu = document.getElementById('menu')
  menu.innerHTML = ''
  examples.forEach(cat => {
    const h = document.createElement('div')
    h.textContent = cat.category
    h.className = 'menu-section'
    menu.appendChild(h)
    cat.items.forEach(item => {
      const a = document.createElement('a')
      a.textContent = item.name
      a.href = `#${item.key}`
      a.dataset.key = item.key
      a.className = 'menu-item'
      a.addEventListener('click', e => {
        e.preventDefault()
        location.hash = `#${item.key}`
        onSelect(item.key)
      })
      menu.appendChild(a)
    })
  })
}

export function getExampleByKey(key) {
  for (const cat of examples) {
    const found = cat.items.find(i => i.key === key)
    if (found) return { ...found, category: cat.category }
  }
  return null
}