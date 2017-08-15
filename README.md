# 环境：
> webpack 3.5.4: 参考网上[Webpack3官网](https://webpack.js.org/configuration/)自己配置  
> Webpack应用了htmlWebpackPlugin自动加打包好的bundle.js到index.html中   
> 安装了rimraf npm 包来删除dist文件夹， 使得每次webpack build 之前都清空这个文件夹

# 笔记： 
> action -> action creator -> Reducer(each state) -> redux.combineReducers/redux.createStore <- react-redux.connect(mapStateToProps, mapDispatchToProps)/'<Provider store={store}>'

* Action 是一个对象，描述事件，有type 和最简单的state属性
* Actiron Creator是生成action 的方法， 避免每次dispatch事件都要重新写一次事件
* reducer 是一个纯方法，用于处理事件，传入state和action，最终出来新的state
* redux 提供combineReducers和createStore(reducers)方法来总结出中Reducer中的各个state，从而生成唯一的store树
* react-redux 提供connect方法来连接component(传state和dispath方法)和Provider组件来包装最外层的组件，从而state可以一直传下去
* container一般处理逻辑，不处理表现，用react-redux 中的connect方法来连接child component从而生成container, 生成的过程中，会把state和dispatch都转化为child component的props！ 而child component就可以用props来dispatch一个action
* 某个viewchild component）dispatch 了某个事件，首先会从事件生成器生成一个action，然后dispatch到每个reducer，从而更新相应state。 而state状态改变了，又会触发各个组件的刷新（mapStateToProps会接收到最新的state，从而导致component的props改变了）
* mapStateToProps会把整个store 树中的所有state都传过去，也就是说每个componnent都得到了全部的state
* mapStateToProps和mapDispatchToProps都可以传两个参数，第一个是 state/dispatch，第二个是ownProps

 # 待理解/待办项：
<input ref={node=>{input=node}}/>
1. 用ES6和React的其他包来写
2. 用webpack-dev-server 或者 express 服务器来热更新
3. 尝试用脚手架来项目起步

# 遇到的坑
* new HTMLWebpackPlugin中的inject一定要body，不能head，因为容易dom还没加载好久可以运行react代码，导致"Invariant Violation: _registerComponent(...): Target container is not a DOM element"的错误

* store中各个state的最终名字以combineReducer为准，例如下面，最终的store有两个state，一个叫todos，一个叫visibilityFilter
```
const todoAppReducers= combineReducers({
	todos: todoListReducer,
	visibilityFilter: filterTodoListReducer
});
```
* const LinkComponent = ({active, children, onClick}) => {} react组件传参是一个对象，这里如果去掉{}，那么会报"Uncaught Invariant Violation: Objects are not valid as a React child(found: object with keys{}).If you meant to render a collection of children,use an array instead or wrap the object using createFragment(object) from the React add-ons. Check the reader method of 'LinkComponent'"
* React中属性和样式都必须是驼峰标识， 所以onClick，onSubmit不能写成html事件onclick，onsubmit； 而textDecoration样式不能写成text-decoration
* Object.assign这个静态方法是ES2017的东西，babel-preset-ES2015/latest 都不能完全翻译这个， 需要用babel-polyfill来使得在浏览器也能正常解析；可以在入口文件import进来， 也可以在wbpack入口文件哪里引用进来； 如果用babel-node命令来运行某个文件， babel-node自带了babel-polyfill
* preset是用来翻译成ES5，polyfill是用来支持哪些没有翻译成ES5的语法也能在浏览器上成功执行


# 学习资料
> github上的源代码地址：https://github.com/reactjs/redux.git   
> [React中文网](http://cn.redux.js.org/index.html)   
> [一位学习者的笔记](https://github.com/kenberkeley/redux-simple-tutorial)   
> [ES语法且用了React-propType的学习笔记](http://www.cnblogs.com/heigehe/)   
> [ES6语法写的相同例子](https://github.com/willerfu/redux-todoList)   
> [配置Express服务器的例子] (https://github.com/hanxzi/react-redux)   

# Other Note:
> React 入门可以去腾讯课堂看智能社 Blue 老师的公开课，看完后再回过头看这个 Redux 的教程，基本就可以了  
> 如果还想深入了解 webpack，可以去看阮一峰的 webpack 教程，网上也有很多 webpack2 的教程，跟着配一遍就基本可以了  
> 这三块都了解了之后，就可以去找个 React 的脚手架，挽起袖子撸了  
> 暂时只是为了学习redux , 所以没有配合使用打包工具， 建议新手朋友可以直接使用react的官方脚手架Create-react-app 搭建项目结构，简单便捷好用  
> https://github.com/ryouaki/react-redux-create有一个别人做的小型react + redux脚手架，真正项目在template内，cnpm install一下再npm run start就可以运行了  
> 可以到优酷搜千锋H5的视频看！专业的老师  
