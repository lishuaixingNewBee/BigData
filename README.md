# 聚合数据-狗蛋实验室

<p align="center">
  <img height="50" src="http://c2.h54hterh.top/manage/common/9e94c959250edb13612dacec696e70a5.png">
</p>

> 狗蛋实验室 推出的智能化数据抓取、处理、分析，挖掘平台。提供美团、大众点评、饿了么、百度地图等数据。这是一个 极简的 vue admin 管理后台 它只包含了 Element UI & axios & iconfont & permission control & lint，这些搭建后台必要的东西。

**在线 demo:** https://lishuaixingnewbee.github.io/BigData/dist/

## Build Setup

```bash
# Clone project
git clone https://github.com/lishuaixingNewBee/BigData.git
# Install dependencies
npm install

# 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# Serve with hot reload at localhost:9528
npm run dev

# Build for production with minification
npm run build

# Build for production and view the bundle analyzer report
npm run build --report
```

## Demo

![demo](https://user-gold-cdn.xitu.io/2018/10/15/1667626743d3afaf?w=1374&h=650&f=gif&s=3824815)

## Extra

如果你想要根据用户角色来动态生成侧边栏和 router，你可以使用改分支[permission-control](https://github.com/PanJiaChen/vue-admin-template/tree/permission-control)

本项目基于`webpack4`开发

如果你想使用基于 vue + typescript 的管理后台, 可以看看这个项目: [vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template) (鸣谢: [@Armour](https://github.com/Armour))




### Element-Ui 使用 cdn 教程

首先找到 `index.html` ([根目录下](https://github.com/BigData/dist/blob/element-ui-cdn/index.html))

引入 Element 的 css 和 js ，并且引入 vue 。因为 Element-Ui 是依赖 vue 的，所以必须在它之前引入 vue 。

之后找到 [webpack.base.conf.js](https://github.com/BigData/dist/blob/element-ui-cdn/build/webpack.base.conf.js) 加入 `externals` 让 webpack 不打包 vue 和 element

```
externals: {
  vue: 'Vue',
  'element-ui':'ELEMENT'
}
```

之后还有一个小细节是如果你用了全局对象方式引入 vue，就不需要 手动 `Vue.use(Vuex）` ，它会自动挂载，具体见 [issue](https://github.com/vuejs/vuex/issues/731)

最终你可以使用 `npm run build --report` 查看效果
如图：
![demo](https://panjiachen.github.io/images/element-cdn.png)


