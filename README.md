# 笔记： 
> action -> action creator -> Reducer(each state) -> redux.combineReducers/redux.createStore <- react-redux.connect(mapStateToProps, mapDispatchToProps)/<Provider store={store}>  

> Action 是一个对象，描述事件，有type 和最简单的state属性
> Actiron Creator是生成action 的方法， 避免每次dispatch事件都要重新写一次事件
> reducer 是一个纯方法，用于处理事件，传入state和action，最终出来新的state
> redux 提供combineReducers和createStore(reducers)方法来总结出中Reducer中的各个state，从而生成唯一的store树
> react-redux 提供connect方法来连接component(传state和dispath方法)和Provider组件来包装最外层的组件，从而state可以一直传下去
> container一般处理逻辑，不处理表现，用react-redux 中的connect方法来连接child component从而生成container, 生成的过程中，会把state和dispatch都转化为child component的props！ 而child component就可以用props来dispatch一个action
> 某个viewchild component）dispatch 了某个事件，首先会从事件生成器生成一个action，然后dispatch到每个reducer，从而更新相应state。 而state状态改变了，又会触发各个组件的刷新（mapStateToProps会接收到最新的state，从而导致component的props改变了）
> mapStateToProps会把整个store 树中的所有state都传过去，也就是说每个componnent都得到了全部的state
> mapStateToProps和mapDispatchToProps都可以传两个参数，第一个是 state/dispatch，第二个是ownProps


 # 待理解：
<input ref={node=>{input=node}}/>

# 遇到的坑
> new HTMLWebpackPlugin中的inject一定要body，不能head，因为容易dom还没加载好久可以运行react代码，导致"Invariant Violation: _registerComponent(...): Target container is not a DOM element"的错误

> store中各个state的最终名字以combineReducer为准，例如下面，最终的store有两个state，一个叫todos，一个叫visibilityFilter
const todoAppReducers= combineReducers({
	todos: todoListReducer,
	visibilityFilter: filterTodoListReducer
});
> const LinkComponent = ({active, children, onClick}) => {} react组件传参是一个对象，这里如果去掉{}，那么会报"Uncaught Invariant Violation: Objects are not valid as a React child(found: object with keys{}).If you meant to render a collection of children,use an array instead or wrap the object using createFragment(object) from the React add-ons. Check the reader method of 'LinkComponent'"
> React中属性和样式都必须是驼峰标识， 所以onClick，onSubmit不能写成html事件onclick，onsubmit； 而textDecoration样式不能写成text-decoration
> Object.assign这个静态方法是ES2017的东西，babel-preset-ES2015/latest 都不能完全翻译这个， 需要用babel-polyfill来使得在浏览器也能正常解析；可以在入口文件import进来， 也可以在wbpack入口文件哪里引用进来； 如果用babel-node命令来运行某个文件， babel-node自带了babel-polyfill
> preset是用来翻译成ES5，polyfill是用来支持哪些没有翻译成ES5的语法也能在浏览器上成功执行


# Redux-TodoList
This demo to learn Redux

Useful GitHub:
https://github.com/MuYunyun/todoList
https://github.com/MuYunyun/reactSPA

https://github.com/kenberkeley/redux-simple-tutorial

https://github.com/xxxgitone/react-redux-todos

https://github.com/willerfu/redux-todoList

配置webpace和配置Express服务器 https://github.com/hanxzi/react-redux  欢迎指正
http://www.redux.org.cn/docs/basics/ExampleTodoList.html
https://github.com/lingxiao-Zhu/react-redux-demo


Useful Note:
http://www.cnblogs.com/MuYunyun/p/6241924.html
https://css-tricks.com/learning-react-router/  
真正小白的教程http://www.cnblogs.com/heigehe/

Tutorail : 
http://cn.redux.js.org/docs/introduction/Examples.html
http://cn.redux.js.org/docs/basics/UsageWithReact.html


Other Note:
React 入门可以去腾讯课堂看智能社 Blue 老师的公开课，看完后再回过头看这个 Redux 的教程，基本就可以了。如果还想深入了解 webpack，可以去看阮一峰的 webpack 教程，网上也有很多 webpack2 的教程，跟着配一遍就基本可以了。这三块都了解了之后，就可以去找个 React 的脚手架，挽起袖子撸了

暂时只是为了学习redux , 所以没有配合使用打包工具， 建议新手朋友可以直接使用react的官方脚手架Create-react-app 搭建项目结构，简单便捷好用

https://github.com/ryouaki/react-redux-create有一个别人做的小型react + redux脚手架，真正项目在template内，cnpm install一下再npm run start就可以运行了。

github上的源代码地址：https://github.com/reactjs/redux.git

可以到优酷搜千锋H5的视频看！专业的老师

其实redux用于一些中小型项目的时候，会带来挺多的麻烦，而且中间件什么的一大堆。。。这里安利一波mobx吧，很容易上手，搭配react非常好用。

<<<<<<< HEAD
=======

* action -> action creater -> reducer -> redux.createStore(redux.combineReducers(reducer)) -> react-redux.connect(mapStateToProps, mapDispatchToProps)(Container) -> container.dispatch(actionCreater)
> Action 是返回一个对象的方法，描述事件，有type 和最简单的state属性     
> Action Creator 是集中生成action方法，传给reducer    
> reducer 是一个纯方法，用于处理action Creator，传入state和action，最终出来新的state     
> redux 提供combineReducers和createStore(reducers)方法来总结出中的store  
> react-redux 提供connect方法和Provider组件来包装container    
> container一般处理逻辑，不处理表现，用react-redux 中的connect方法来生成, dispatch actionCreator


待理解：
<input ref={node=>{input=node}}/>
>>>>>>> e40d6ac07d504add74dedd0756e036f066b3d0d2
