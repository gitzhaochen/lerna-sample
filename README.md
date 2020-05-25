####
- yarn workspace 管理依赖
  - yarn workspaces add <module> 为所有的包增加
  - yarn workspace packageA add <module> 只为包packageA增加
  - yarn workspace packageA add packageB@version 只为包packageA增加
  - yarn add -W  <module> 只在当前根目录安装

- babel
  - 在根目录配置babel.config.json文件，对所有的包适用，包括preset/env，bable-runtime等
  - 子模块想要适用根目录的配置，需要在设置`root-mode:upward`