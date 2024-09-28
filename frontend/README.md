## 项目结构

```
frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/                # 静态资源（图片、字体等）
│   ├── components/            # 可复用的组件
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── NewsCard.js
│   │   └── ...
│   ├── pages/                 # 页面组件
│   │   ├── HomePage.js
│   │   └── ...
│   ├── services/              # API 调用
│   │   └── api.js
│   ├── store/                 # 状态管理（Redux）
│   │   ├── index.js
│   │   ├── newsSlice.js
│   ├── styles/                # 样式文件
│   │   ├── index.css
│   │   └── ...
│   ├── App.js                 # 主应用组件
│   ├── index.js               # 入口文件
│   └── routes.js              # 路由配置
├── .babelrc                   # Babel 配置
├── package.json               # 项目依赖
└── webpack.config.js          # Webpack 配置
```
