export const sankeyExamples = [
  {
    key: 'sankey-basic',
    name: '基础桑基图',
    source: 'https://echarts.apache.org/examples/zh/index.html#chart-type-sankey',
    option: () => ({
      tooltip: { trigger: 'item' },
      series: [{
        type: 'sankey',
        data: [
          { name: '总入口' },
          { name: '渠道A' },
          { name: '渠道B' },
          { name: '渠道C' },
          { name: '注册' },
          { name: '留存' },
          { name: '流失' }
        ],
        links: [
          { source: '总入口', target: '渠道A', value: 60 },
          { source: '总入口', target: '渠道B', value: 35 },
          { source: '总入口', target: '渠道C', value: 20 },
          { source: '渠道A', target: '注册', value: 40 },
          { source: '渠道B', target: '注册', value: 22 },
          { source: '渠道C', target: '注册', value: 10 },
          { source: '注册', target: '留存', value: 48 },
          { source: '注册', target: '流失', value: 24 }
        ],
        emphasis: { focus: 'adjacency' },
        lineStyle: { color: 'gradient', curveness: 0.5 }
      }]
    })
  },
  {
    key: 'sankey-node-align',
    name: '节点右对齐',
    source: 'https://echarts.apache.org/examples/zh/index.html#chart-type-sankey',
    option: () => ({
      tooltip: { trigger: 'item' },
      series: [{
        type: 'sankey',
        nodeAlign: 'right',
        data: [
          { name: '来源' }, { name: 'A' }, { name: 'B' }, { name: 'C' },
          { name: 'X' }, { name: 'Y' }, { name: 'Z' }
        ],
        links: [
          { source: '来源', target: 'A', value: 15 },
          { source: '来源', target: 'B', value: 20 },
          { source: '来源', target: 'C', value: 30 },
          { source: 'A', target: 'X', value: 10 },
          { source: 'B', target: 'Y', value: 8 },
          { source: 'C', target: 'Z', value: 22 }
        ],
        lineStyle: { color: 'gradient' }
      }]
    })
  },
  {
    key: 'sankey-vertical',
    name: '垂直桑基图',
    source: 'https://echarts.apache.org/examples/zh/index.html#chart-type-sankey',
    option: () => ({
      tooltip: { trigger: 'item' },
      series: [{
        type: 'sankey',
        orient: 'vertical',
        data: [
          { name: '入口' }, { name: '步骤1' }, { name: '步骤2' }, { name: '完成' }, { name: '中断' }
        ],
        links: [
          { source: '入口', target: '步骤1', value: 50 },
          { source: '步骤1', target: '步骤2', value: 34 },
          { source: '步骤2', target: '完成', value: 20 },
          { source: '步骤2', target: '中断', value: 14 }
        ],
        lineStyle: { color: 'gradient' },
        emphasis: { focus: 'adjacency' }
      }]
    })
  },
  {
    key: 'sankey-multi-level',
    name: '多层级流向',
    source: 'https://echarts.apache.org/examples/zh/index.html#chart-type-sankey',
    option: () => ({
      tooltip: { trigger: 'item' },
      series: [{
        type: 'sankey',
        data: [
          { name: '流量' }, { name: '广告' }, { name: '搜索' }, { name: '社交' },
          { name: '着陆页' }, { name: '注册' }, { name: '下单' }, { name: '流失' }
        ],
        links: [
          { source: '流量', target: '广告', value: 80 },
          { source: '流量', target: '搜索', value: 60 },
          { source: '流量', target: '社交', value: 40 },
          { source: '广告', target: '着陆页', value: 50 },
          { source: '搜索', target: '着陆页', value: 40 },
          { source: '社交', target: '着陆页', value: 30 },
          { source: '着陆页', target: '注册', value: 70 },
          { source: '注册', target: '下单', value: 36 },
          { source: '注册', target: '流失', value: 34 }
        ],
        lineStyle: { color: 'gradient', curveness: 0.5 },
        emphasis: { focus: 'adjacency' }
      }]
    })
  }
]