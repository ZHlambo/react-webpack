import React, {Component} from "react";
import styles from "./LinearLayout.scss"

export default class LinearLayout extends Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    horiziontal: 1
  }
  render() {
    let {horiziontal, className, children} = this.props;
    return (<div className={`${horiziontal
        ? styles.horiziontal
        : styles.vertical} ${className}`}>
      {children}
    </div>)
  }
}
