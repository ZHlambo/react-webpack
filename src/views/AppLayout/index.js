import React, {Component} from "react";
import {connect} from "react-redux";
import {push} from "react-router-redux";
import NavList from "components/NavList";
import sidebar from "./data";
import styles from "./index.scss"

@connect(state => ({}),{push})
// export default withRouter(connect(mapStateToProp, mapDispatchToProp)(AppContainer));
export default class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  views=[
    {id:1,view:<div style={{width:"100%",height:"100%",background:"black",color:"white"}}>111111111111</div>},
    {id:2,view:<div style={{width:"100%",height:"100%",background:"yellow",color:"white"}}>222222222222</div>},
    {id:3,view:<div style={{width:"100%",height:"100%",background:"blue",color:"white"}}>333333333333</div>},
    {id:4,view:<div style={{width:"100%",height:"100%",background:"red",color:"white"}}>444444444444</div>},
    {id:5,view:<div style={{width:"100%",height:"100%",background:"red",color:"white"}}>555555555555</div>},
  ]
  itemClick = (data) => {
    // this.props.push("index");
    if(location.pathname != data.value)
    this.props.push(data.value);
  }
  render() {
    return (
      <div>
        <NavList className={styles.body} dataSource={sidebar} itemClick={this.itemClick} value={location.pathname}/>
        <div style={{marginLeft:"250px", padding: "10px"}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
