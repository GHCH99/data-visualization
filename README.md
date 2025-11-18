# 数据可视化

## 运行

- 在 `f:\TRAE\data visualization` 目录执行 `python serve.py`
- 打开 `http://127.0.0.1:8000/`

## 技术

- ECharts `5.4.3`（CDN）
- 原生 ES6 模块：`src/` 下按类别组织示例
- 响应式布局：纯 CSS Grid/Flex

## 结构

- `index.html`：入口页面、主题切换、菜单、路由
- `styles.css`：样式与响应式
- `src/main.js`：图表实例与渲染控制
- `src/router.js`：分类索引与菜单构建
- `src/examples/*`：各类别的示例集合

## 扩展接口

- 新增示例：在对应 `src/examples/<category>.js` 文件中追加对象 `{ key, name, option }`
- `option()` 返回 ECharts 配置对象，与官方示例结构保持一致
- 菜单与路由会自动识别 `key` 并可通过 `#<key>` 进行深链

## 配置

- 主题：通过页面右上角切换深/浅色，内部调用 `echarts.init` 的主题参数
- 性能：默认启用合适的 `animation`，大数据示例可按需设置 `showSymbol:false`、`sampling` 等

## 注意

- 若需要地图、GL、词云等扩展示例，请按需引入对应插件与数据资源（如 `echarts-gl`、`echarts-wordcloud`、GeoJSON 等），并在 `index.html` 引入插件脚本后新增示例模块。