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


* action -> action creater -> reducer -> redux.createStore(redux.combineReducers(reducer)) -> react-redux.connect(mapStateToProps, mapDispatchToProps)(Container) -> container.dispatch(actionCreater)
> Action 是返回一个对象的方法，描述事件，有type 和最简单的state属性     
> Action Creator 是集中生成action方法，传给reducer    
> reducer 是一个纯方法，用于处理action Creator，传入state和action，最终出来新的state     
> redux 提供combineReducers和createStore(reducers)方法来总结出中的store  
> react-redux 提供connect方法和Provider组件来包装container    
> container一般处理逻辑，不处理表现，用react-redux 中的connect方法来生成, dispatch actionCreator


待理解：
<input ref={node=>{input=node}}/>
