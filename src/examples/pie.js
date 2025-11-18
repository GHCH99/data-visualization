// 饼图示例集合
export const pieExamples = [
  {
    key: 'pie-doughnut',
    name: '环形图',
    option: () => ({
      tooltip: { trigger: 'item' },
      legend: { top: 'top' },
      series: [{ type: 'pie', radius: ['40%', '70%'], data: [
        { value: 1048, name: '搜索引擎' },
        { value: 735, name: '直接访问' },
        { value: 580, name: '邮件营销' },
        { value: 484, name: '联盟广告' },
        { value: 300, name: '视频广告' }
      ] }]
    })
  },
  {
    key: 'pie-half-doughnut',
    name: '半环形图',
    option: () => ({
      tooltip: { trigger: 'item' },
      series: [{ type: 'pie', startAngle: 180, radius: ['40%', '70%'], data: [
        { value: 1048, name: '搜索引擎' },
        { value: 735, name: '直接访问' },
        { value: 580, name: '邮件营销' }
      ] }]
    })
  },
  {
    key: 'pie-pad-angle',
    name: '饼图扇区间隙',
    option: () => ({
      tooltip: { trigger: 'item' },
      series: [{ type: 'pie', padAngle: 5, radius: '60%', data: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ] }]
    })
  },
  {
    key: 'pie-nightingale',
    name: '南丁格尔玫瑰图',
    option: () => ({
      tooltip: { trigger: 'item' },
      series: [{ type: 'pie', roseType: 'area', radius: [20, 120], data: [
        { value: 40, name: 'rose 1' },
        { value: 33, name: 'rose 2' },
        { value: 28, name: 'rose 3' },
        { value: 22, name: 'rose 4' },
        { value: 20, name: 'rose 5' },
        { value: 15, name: 'rose 6' },
        { value: 12, name: 'rose 7' },
        { value: 10, name: 'rose 8' }
      ] }]
    })
  },
  {
    key: 'pie-nested',
    name: '嵌套环形图',
    option: () => ({
      tooltip: { trigger: 'item' },
      series: [
        { type: 'pie', selectedMode: 'single', radius: [0, '40%'], label: { position: 'inner' }, data: [
          { value: 1548, name: '搜索引擎' }, { value: 775, name: '直接访问' }, { value: 679, name: '邮件营销' }
        ] },
        { type: 'pie', radius: ['55%', '70%'], data: [
          { value: 1048, name: '搜索引擎' }, { value: 735, name: '直接访问' }, { value: 580, name: '邮件营销' }, { value: 300, name: '视频广告' }
        ] }
      ]
    })
  },
  {
    key: 'pie-scroll-legend',
    name: '可滚动的图例',
    option: () => ({
      tooltip: { trigger: 'item' },
      legend: { type: 'scroll', orient: 'vertical', left: 10, top: 20 },
      series: [{ type: 'pie', radius: '60%', data: Array.from({ length: 20 }, (_, i) => ({ value: Math.round(Math.random() * 1000), name: '类目' + i })) }]
    })
  },
  {
    key: 'pie-special-label',
    name: '富文本标签',
    option: () => ({
      tooltip: { trigger: 'item' },
      series: [{ type: 'pie', radius: '55%', label: { formatter: '{b}: {d}%\n{c}', rich: { b: { fontWeight: 'bold' } } }, data: [
        { value: 335, name: '直接访问' }, { value: 310, name: '邮件营销' }, { value: 234, name: '联盟广告' }, { value: 135, name: '视频广告' }, { value: 1548, name: '搜索引擎' }
      ] }]
    })
  }
]