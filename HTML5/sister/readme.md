# 前端是代码界的导演，用上了3D的手法

1. 写的不再是js，而是ts，
  ts是js的超集， 超级前端
  tsc --watch data.ts 自动监听.ts文件将其编译成.js

2. 写的不再是css，而是stylus
  stylus 是css预编译器
  stylus --watch movie.styl -o movie.css 自动监听.styl文件将其编译成.css

3. html 引入的是编译后的data.js 和 movie.css
  前端和后端开发的感觉差不多了
  live-server 自动刷新页面

4. stylus 语法
  - Tab缩进，选择器的递进
  - 