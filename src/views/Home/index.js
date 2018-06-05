import React, {Component} from "react";
import {connect} from "react-redux"
import {push} from "react-router-redux";
import styles from "./index.scss"
import Table from "components/Table"
import {getTxts} from "redux/reducer/txt"
import {getCats} from "redux/reducer/cat"
import {formatterDate} from "utils"

@connect(state => ({txtReducer: state.txtReducer, catReducer: state.catReducer}), {getTxts, getCats,push})
export default class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount = () => {
    this.props.getTxts();
    this.props.getCats();
  }
  componentWillReceiveProps(nextProps) {}
  putTxt = (rowData) => {
    this.props.push(`/txt/${rowData.id}`);
  }
  txtHeader = [
    {
      key: "title",
      name: "标题"
    }, {
      key: "createdAt",
      name: "创建时间",
      func: formatterDate
    }, {
      key: "edit",
      name: "编辑",
      style: {
        width: "80px"
      },
      func: (e, rowData) => (<span className="btn" onClick={() => this.putTxt(rowData)}>编辑</span>)
    }
  ]
  render() {
    let {txts} = this.props.txtReducer;
    let {cats} = this.props.catReducer;
    return (<div className={styles.body}>
      <div className={styles.leftView}>
        <div className={styles.myInfo}>
          <img src="./bg.png" width="192" height="108"/>
          <div>Dord</div>
          <div>web前端</div>
          <div>全栈爱好者</div>
        </div>
        <div className={styles.cats}>
          <h3 className={styles.tip}>标签</h3>
          <ul>
            {
              cats && cats.map((cat, index) => {
                return <li key={cat.id}>
                  <a>{cat.name}</a>
                </li>;
              })
            }
          </ul>
        </div>
      </div>
      <div className={styles.rightView}>
        <Table dataSource={txts} header={this.txtHeader}/>
      </div>
    </div>)
  }
}
