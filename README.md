# zufang

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 首页

点击城市选择, 弹出选择城市框(北京、上海、深圳、广州), 根据不同城市渲染首页的房源数据
 懒加载功能
点击搜索框, 弹出搜索页面, 无搜索功能



整租/合租/公寓/找室友

根据城市(广州)、类型(整租)渲染房源列表
排序功能(默认排序/按租金排序)
筛选功能(整租/合租/公寓)
懒加载功能



房源详情页

根据路由传参过来的房源id和城市渲染房源详情
房源图片走马灯
百度地图功能: 根据地址设置地图中心点、拖拽地图、放大缩小地图、地方标记点
收藏提示
预约看房功能
预约管家



注册

验证用户名是否存在
手机号和密码注册
验证码功能



登录

手机号和密码登录
生成token



我的

路由守卫
退出登录