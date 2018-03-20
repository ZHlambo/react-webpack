import React, {Component} from "react";
import {connect} from "react-redux";
import {push} from "react-router-redux";
import NavList from "components/NavList";
import styles from "./index.scss"

@connect(state => ({}), {push})
// export default withRouter(connect(mapStateToProp, mapDispatchToProp)(AppContainer));
export default class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bars: [
        { text: "首页", path: "/home" },
        { text: "首页", path: "/home" },
        { text: "首页", path: "/home" },
        { text: "首页", path: "/home" }
      ]
    }
  }
  render() {
    let {bars} = this.state;
    return (<div>
      <ul className={styles.header}>
        {
          bars.map((bar, index) => {
            return <li key={index}>
              <a>{bar.text}</a>
            </li>;
          })
        }
      </ul>
      <div className={styles.children}>
        {this.props.children}
      </div>
    </div>)
  }
}
