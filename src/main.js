import React, {Component} from "react";
import ReactDOM from 'react-dom'
import routes from './views/router'

// let value = prompt("请输入密码");
// let psw = "lambo";
// psw += "123";
// if (value == psw) {
// }
ReactDOM.render(routes(), document.getElementById('root'));
