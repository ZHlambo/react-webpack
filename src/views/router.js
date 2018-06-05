import React, {Component} from "react";
import {
  Route,
  Router,
  IndexRoute,
  browserHistory,
  Switch,
  Redirect
} from 'react-router'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware' //改变promise的type状态
import {ConnectedRouter, syncHistoryWithStore, routerMiddleware} from 'react-router-redux' //routerMiddleware 通过redux导航路由即用（push方法跳转）
import thunk from 'redux-thunk' //当使用异步加载的时候需要加入插件thunk,插件需要传入applyMiddleWare方法，如果这个时候还加入了devtool插件，applyMiddleWare(thunk)必须要放在devtool()的前面，否则会报错。
import reducers from '../redux/reducers'
import createHistory from 'history/createBrowserHistory'
import AppLayout from './AppLayout'
import Home from './Home'
import Txt from './Txt'
import IndexPage from './Index'
import Drag from './Drag'

const history = createHistory() // Tell the Router to use our enhanced(增强的) history
const store = createStore(reducers, applyMiddleware(thunk, promiseMiddleware({}), routerMiddleware(history)))
export default() => {
  //必须是个方法并且reaturn有效标签，不能用标签包裹方式
  let appLayout = () => (<AppLayout>
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/txt/:id" component={Txt}/>
      <Redirect to="/home"/>
    </Switch>
  </AppLayout>)
  /* 404 no found 页面 */
  let errRoute = () => (<div>asdfadsfa</div>)
  return (<Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/drag" component={Drag}/>
        <Route path="/err" component={errRoute}/>
        <Route path="/index" component={IndexPage}/>
        <Route path="/" component={appLayout}/>
      </Switch>
    </ConnectedRouter>
  </Provider>)
}
