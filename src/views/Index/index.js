import React, {Component} from "react";
import {connect} from "react-redux"

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentWillReceiveProps(nextProps) {}
  render() {
    let style = {
      width: "100%",
      height: "100%",
      minWidth: "1920px",
      minHeight: "1080px",
      position: "fixed",
      background: "url(./bg.png) no-repeat center",
      backgroundSize: "100% 100%"
    }
    return (<div style={style}></div>)
  }
}
