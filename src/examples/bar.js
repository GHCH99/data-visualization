// 柱状图示例集合
export const barExamples = [
  {
    key: 'bar-basic',
    name: '基础柱状图',
    option: () => ({
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'] },
      yAxis: { type: 'value' },
      series: [{ type: 'bar', data: [120, 200, 150, 80, 70, 110, 130] }]
    })
  },
  {
    key: 'bar-stacked',
    name: '堆叠柱状图',
    option: () => ({
      tooltip: { trigger: 'axis' },
      legend: {},
      xAxis: { type: 'category', data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'] },
      yAxis: { type: 'value' },
      series: [
        { name: '邮件', type: 'bar', stack: 'total', data: [320, 332, 301, 334, 390, 330, 320] },
        { name: '联盟', type: 'bar', stack: 'total', data: [120, 132, 101, 134, 90, 230, 210] },
        { name: '视频', type: 'bar', stack: 'total', data: [220, 182, 191, 234, 290, 330, 310] }
      ]
    })
  },
  {
    key: 'bar-negative',
    name: '交错正负轴标签',
    option: () => ({
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'value', axisLabel: { formatter: '{value} ms' } },
      yAxis: { type: 'category', data: ['A', 'B', 'C', 'D', 'E', 'F', 'G'] },
      series: [{ type: 'bar', data: [7, -7, 6, -6, 5, -5, 4] }]
    })
  },
  {
    key: 'bar-horizontal-stacked',
    name: '堆叠条形图',
    option: () => ({
      tooltip: { trigger: 'axis' },
      legend: {},
      xAxis: { type: 'value' },
      yAxis: { type: 'category', data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'] },
      series: [
        { name: '直接', type: 'bar', stack: 'sum', data: [320, 332, 301, 334, 390, 330, 320] },
        { name: '搜索', type: 'bar', stack: 'sum', data: [120, 132, 101, 134, 90, 230, 210] }
      ]
    })
  },
  {
    key: 'bar-animation-delay',
    name: '柱状图动画延迟',
    option: () => ({
      xAxis: { type: 'category', data: Array.from({ length: 50 }, (_, i) => i + 1) },
      yAxis: { type: 'value' },
      series: [{
        type: 'bar',
        data: Array.from({ length: 50 }, () => Math.round(Math.random() * 200)),
        animationDelay: idx => idx * 10
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: idx => idx * 5
    })
  },
  {
    key: 'bar-drilldown-animation',
    name: '柱状图下钻动画',
    option: () => ({
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', data: ['分类A','分类B','分类C','分类D'] },
      yAxis: { type: 'value' },
      series: [{ type: 'bar', data: [120, 180, 90, 140] }]
    })
  },
  {
    key: 'bar-race',
    name: '动态排序柱状图',
    option: () => {
      const names = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon']
      const values = names.map(() => Math.round(Math.random() * 200))
      return {
        grid: { top: 20, bottom: 20 },
        xAxis: { type: 'value' },
        yAxis: { type: 'category', data: names },
        series: [{ type: 'bar', data: values, realtimeSort: true }],
        animationDuration: 800,
        animationDurationUpdate: 800
      }
    }
  }
]