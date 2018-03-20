import React, {Component} from "react";
import {connect} from "react-redux"
import {push} from "react-router-redux";
import styles from "./index.scss";
import Table from "components/Table";
import BraftEditor from 'braft-editor'
import styless from 'braft-editor/dist/braft.css'
import {getTxtMsgs} from "redux/reducer/msg";
import {getTxtInfo, putTxtInfo} from "redux/reducer/txt";
import {formatterDate} from "utils";

@connect(state => ({msgReducer: state.msgReducer, txtReducer: state.txtReducer}), {push, getTxtMsgs, getTxtInfo, putTxtInfo})
export default class AppLayout extends Component {
  constructor(props) {
    super(props);
    let {txt} = props.location.state || {};
    let paths = props.location.pathname.split("/");
    let id = paths[paths.length - 1];
    this.state = {
      id
    }
  }
  componentDidMount() {
    let {id} = this.state;
    this.props.getTxtMsgs(id);
    this.props.getTxtInfo(id);
  }
  componentWillReceiveProps(nextProps) {
    let msgs = nextProps.msgReducer.msgs;
    let {fcPutTxt, txtInfo} = nextProps.txtReducer;
    if (msgs != this.props.msgReducer.msgs) {
      this.setState({msgs});
    }
    if (!fcPutTxt && this.props.txtReducer.fcPutTxt) {
      console.log("fcPutTxt");
      Object.assign(this.state.txt, this.txt)
      this.setState({edit: false});
    }
    if (txtInfo != this.props.txtReducer.txtInfo) {
      console.log("txtdInfo");
      this.editorProps = {
        height: 500,
        contentFormat: 'html',
        initialContent: txtInfo.body,
        onChange: this.handleChange,
        onRawChange: this.handleRawChange
      }
      this.setState({edit: false, txt: txtInfo});
    }
  }
  save = () => {
    let body = this.editor.getContent();
    let title = this.refs.input.value;
    this.txt = {
      body,
      title
    }
    this.props.putTxtInfo(this.state.txt.id, this.txt);
  }
  edit = () => {
    this.setState({
      edit: !this.state.edit
    });
  }
  render() {
    let {txt, edit} = this.state;
    if (!txt) {
      return (<div></div>);
    }
    return (<div>
      <div className={styles.title}>
        <h2>
          {
            edit
              ? <input ref="input" defaultValue={txt.title}></input>
              : txt.title
          }
        </h2>
        <div className={styles.time}>
          <div>
            <span className="btn" onClick={this.edit}>{
                edit
                  ? "取消"
                  : "编辑"
              }</span>
            {" "}
            <span className="btn" onClick={this.save}>保存</span>
          </div>
          <br/> {formatterDate(txt.updatedAt)}
        </div>
      </div>
      {
        edit
          ? <BraftEditor ref={(element) => {
                this.editor = element;
              }} {...this.editorProps}/>
          : <div className={styles.body} dangerouslySetInnerHTML={{
                __html: txt.body
              }}></div>
      }
    </div>)
  }
}
