import React, {Component} from "react";
import {Route, Router, IndexRoute, browserHistory} from 'react-router'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'//改变promise的type状态
import { syncHistoryWithStore,routerMiddleware} from 'react-router-redux'//routerMiddleware 通过redux导航路由即用（push方法跳转）
import thunk from 'redux-thunk'//当使用异步加载的时候需要加入插件thunk,插件需要传入applyMiddleWare方法，如果这个时候还加入了devtool插件，applyMiddleWare(thunk)必须要放在devtool()的前面，否则会报错。
import reducers from './redux/reducers'
import {createHistory} from 'history'
import AppLayout from './views/AppLayout'
import Home from './views/Home'

const store = createStore(reducers, applyMiddleware(thunk,promiseMiddleware({}),routerMiddleware(browserHistory)))
const history = syncHistoryWithStore(browserHistory,store) // Tell the Router to use our enhanced(增强的) history
export default() => {
    return <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={AppLayout}>
                <IndexRoute component={Home}></IndexRoute>
            </Route>
            <Route path="/Home" component={Home}></Route>
        </Router>
    </Provider>
}
