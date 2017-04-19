import React, {Component} from "react";
import {connect} from "react-redux"
import {push} from "react-router-redux"
import {getUrl} from "src/redux/reducer/auth"
import styles from './base.scss'

@connect(state=>({authReducer:state.authReducer}),{getUrl,push})
export default class AppLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.props.getUrl()
        console.log(this.props.authReducer);
    }
    onalcik=()=>{
      this.props.push("/Home")
    }
    render() {
      console.log(styles);
        return <div className={styles.bg} onClick={this.onalcik}>
            asdafa555555555555
            {this.props.children}
        </div>
    }
}
