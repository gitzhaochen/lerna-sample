#### yarn workspace 管理依赖

- yarn workspaces add <module> 为所有的包增加
- yarn workspace packageA add <module> 只为包 packageA 增加
- yarn workspace packageA add packageB@version 只为包 packageA 增加
- yarn add -W <module> 只在当前根目录安装

#### babel

- 在根目录配置 babel.config.json 文件，对所有的包适用，包括 preset/env，bable-runtime 等
- 子模块想要适用根目录的配置，需要在设置`root-mode:upward`
  ```json
   "scripts": {
    "babel": "babel --root-mode upward src/main.js --out-file dist-babel.js"
  }
  ```
  ```js
  {
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
      options: {
        rootMode: 'upward'
      }
    },
    exclude: [/node_modules/]
  }
  ```
- 字模块想要自己的单独的配置，可以在子目录增加 .babelrc.json 文件，同时在根 babel.config.json 增加配置如下
  ```json
  { "babelrcRoots": [".", "packages/*", "examples"] }
  ```
