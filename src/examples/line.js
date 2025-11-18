// 折线图示例集合（与官方示例风格一致）
export const lineExamples = [
  {
    key: 'line-basic',
    name: '基础折线图',
    option: () => ({
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'] },
      yAxis: { type: 'value' },
      series: [{ type: 'line', data: [150, 230, 224, 218, 135, 147, 260] }]
    })
  },
  {
    key: 'line-smooth',
    name: '基础平滑折线图',
    option: () => ({
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'] },
      yAxis: { type: 'value' },
      series: [{ type: 'line', smooth: true, data: [120, 132, 101, 134, 90, 230, 210] }]
    })
  },
  {
    key: 'line-area-basic',
    name: '基础面积图',
    option: () => ({
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', boundaryGap: false, data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'] },
      yAxis: { type: 'value' },
      series: [{ type: 'line', areaStyle: {}, data: [140, 232, 101, 264, 90, 340, 250] }]
    })
  },
  {
    key: 'line-stacked',
    name: '折线图堆叠',
    option: () => ({
      tooltip: { trigger: 'axis' },
      legend: {},
      xAxis: { type: 'category', boundaryGap: false, data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'] },
      yAxis: { type: 'value' },
      series: [
        { name: '邮件营销', type: 'line', stack: 'Total', data: [120, 132, 101, 134, 90, 230, 210] },
        { name: '联盟广告', type: 'line', stack: 'Total', data: [220, 182, 191, 234, 290, 330, 310] },
        { name: '视频广告', type: 'line', stack: 'Total', data: [150, 232, 201, 154, 190, 330, 410] },
        { name: '直接访问', type: 'line', stack: 'Total', data: [320, 332, 301, 334, 390, 330, 320] }
      ]
    })
  },
  {
    key: 'line-stacked-area',
    name: '堆叠面积图',
    option: () => ({
      tooltip: { trigger: 'axis' },
      legend: {},
      xAxis: { type: 'category', boundaryGap: false, data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'] },
      yAxis: { type: 'value' },
      series: [
        { name: '邮件营销', type: 'line', stack: 'Total', areaStyle: {}, data: [120, 132, 101, 134, 90, 230, 210] },
        { name: '联盟广告', type: 'line', stack: 'Total', areaStyle: {}, data: [220, 182, 191, 234, 290, 330, 310] },
        { name: '视频广告', type: 'line', stack: 'Total', areaStyle: {}, data: [150, 232, 201, 154, 190, 330, 410] },
        { name: '直接访问', type: 'line', stack: 'Total', areaStyle: {}, data: [320, 332, 301, 334, 390, 330, 320] }
      ]
    })
  },
  {
    key: 'line-gradient-area',
    name: '渐变堆叠面积图',
    option: () => ({
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', boundaryGap: false, data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'] },
      yAxis: { type: 'value' },
      series: [{
        type: 'line',
        smooth: true,
        showSymbol: false,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(96,165,250,0.6)' },
            { offset: 1, color: 'rgba(96,165,250,0.1)' }
          ])
        },
        data: [140, 232, 101, 264, 90, 340, 250]
      }]
    })
  },
  {
    key: 'line-temperature',
    name: '未来一周气温变化',
    option: () => ({
      tooltip: { trigger: 'axis' },
      legend: {},
      xAxis: { type: 'category', boundaryGap: false, data: ['周一','周二','周三','周四','周五','周六','周日'] },
      yAxis: { type: 'value', axisLabel: { formatter: '{value} °C' } },
      series: [
        { name: '最高气温', type: 'line', data: [10, 11, 13, 11, 12, 12, 9], markPoint: { data: [{ type: 'max' }, { type: 'min' }] }, markLine: { data: [{ type: 'average' }] } },
        { name: '最低气温', type: 'line', data: [1, -2, 2, 5, 3, 2, 0], markPoint: { data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -2 }] }, markLine: { data: [{ type: 'average' }] } }
      ]
    })
  },
  {
    key: 'line-confidence-band',
    name: 'Confidence Band',
    option: () => {
      const base = 120
      const series = new Array(100).fill(0).map((_, i) => base + Math.sin(i / 5) * 20 + Math.random() * 10)
      const upper = series.map(v => v + 15)
      const lower = series.map(v => v - 15)
      return {
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: series.map((_, i) => i) },
        yAxis: { type: 'value' },
        series: [
          { name: '区间上边界', type: 'line', lineStyle: { opacity: 0 }, stack: 'conf', data: upper },
          { name: '区间下边界', type: 'line', areaStyle: { color: 'rgba(96,165,250,0.2)' }, stack: 'conf', data: lower },
          { name: '均值', type: 'line', data: series, symbolSize: 4 }
        ]
      }
    }
  },
  {
    key: 'line-step',
    name: '阶梯折线图',
    option: () => ({
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'] },
      yAxis: { type: 'value' },
      series: [
        { name: 'Start', type: 'line', step: 'start', data: [120, 132, 101, 134, 90, 230, 210] },
        { name: 'Middle', type: 'line', step: 'middle', data: [220, 282, 201, 234, 290, 430, 310] },
        { name: 'End', type: 'line', step: 'end', data: [450, 432, 401, 454, 590, 530, 510] }
      ]
    })
  },
  {
    key: 'line-markline',
    name: '折线图的标记线',
    option: () => ({
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'] },
      yAxis: { type: 'value' },
      series: [{
        type: 'line',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        markLine: { data: [{ type: 'average' }, [{ xAxis: 'Tue' }, { xAxis: 'Fri' }]] }
      }]
    })
  },
  {
    key: 'line-dynamic-time',
    name: '动态数据 + 时间坐标轴',
    option: () => {
      const now = +new Date()
      const oneDay = 24 * 3600 * 1000
      const data = []
      for (let i = 0; i < 100; i++) data.push([new Date(now + i * oneDay), Math.round(Math.random() * 1000)])
      return {
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'time' },
        yAxis: { type: 'value' },
        series: [{ type: 'line', showSymbol: false, data }]
      }
    }
  }
]