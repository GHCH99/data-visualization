// 箱线图示例集合（与官方示例类别一致）
function computeBox(values) {
  const arr = values.slice().sort((a, b) => a - b)
  const q = (p) => {
    const pos = (arr.length - 1) * p
    const base = Math.floor(pos)
    const rest = pos - base
    return arr[base] + (arr[base + 1] !== undefined ? rest * (arr[base + 1] - arr[base]) : 0)
  }
  const min = arr[0]
  const max = arr[arr.length - 1]
  const q1 = q(0.25)
  const q2 = q(0.5)
  const q3 = q(0.75)
  return [min, q1, q2, q3, max]
}

function genRandomGroup(n = 50, base = 50, spread = 30) {
  return Array.from({ length: n }, () => base + Math.round((Math.random() - 0.5) * 2 * spread))
}

export const boxplotExamples = [
  {
    key: 'boxplot-basic',
    name: '基础箱线图',
    source: 'https://echarts.apache.org/examples/zh/index.html#chart-type-boxplot',
    option: () => {
      const cats = ['类目A', '类目B', '类目C', '类目D', '类目E']
      const raw = [
        genRandomGroup(60, 40, 18),
        genRandomGroup(60, 52, 22),
        genRandomGroup(60, 62, 24),
        genRandomGroup(60, 70, 26),
        genRandomGroup(60, 80, 28)
      ]
      const data = raw.map(group => computeBox(group))
      const outliers = []
      raw.forEach((group, i) => {
        const [min, q1, q2, q3, max] = computeBox(group)
        const iqr = q3 - q1
        const lowFence = q1 - 1.5 * iqr
        const highFence = q3 + 1.5 * iqr
        group.forEach(v => {
          if (v < lowFence || v > highFence) outliers.push([i, v])
        })
      })
      return {
        tooltip: { trigger: 'item' },
        xAxis: { type: 'category', data: cats, boundaryGap: true, axisTick: { alignWithLabel: true } },
        yAxis: { type: 'value' },
        series: [
          { name: '箱线', type: 'boxplot', data },
          { name: '离群点', type: 'scatter', data: outliers, symbolSize: 6 }
        ]
      }
    }
  },
  {
    key: 'boxplot-from-raw',
    name: '原始数据生成箱线图',
    source: 'https://echarts.apache.org/examples/zh/index.html#chart-type-boxplot',
    option: () => {
      const cats = ['实验1','实验2','实验3','实验4']
      const raw = [
        [
          850, 740, 900, 1070, 930, 850, 1000, 980, 980,
          880, 740, 840, 950, 980, 980, 880, 1000, 770, 760, 910, 1140, 980, 1000, 1000
        ],
        [
          960, 940, 960, 940, 950, 980, 980, 880, 900, 840, 830, 790, 810, 940, 950, 980, 980,
          930, 960, 960, 900, 950, 960
        ],
        genRandomGroup(24, 920, 120),
        genRandomGroup(24, 880, 140)
      ]
      const data = raw.map(group => computeBox(group))
      return {
        tooltip: { trigger: 'item' },
        xAxis: { type: 'category', data: cats },
        yAxis: { type: 'value' },
        series: [{ type: 'boxplot', data }]
      }
    }
  },
  {
    key: 'boxplot-multi',
    name: '多组对比箱线图',
    source: 'https://echarts.apache.org/examples/zh/index.html#chart-type-boxplot',
    option: () => {
      const cats = ['组A','组B','组C','组D']
      const rawA = genRandomGroup(80, 50, 28)
      const rawB = genRandomGroup(80, 65, 26)
      return {
        tooltip: { trigger: 'item' },
        xAxis: { type: 'category', data: cats },
        yAxis: { type: 'value' },
        legend: { top: 10 },
        series: [
          { name: '方案一', type: 'boxplot', data: cats.map(() => computeBox(rawA)) },
          { name: '方案二', type: 'boxplot', data: cats.map(() => computeBox(rawB)) }
        ]
      }
    }
  }
]