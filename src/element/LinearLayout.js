import React, {Component} from "react";
import styles from "./LinearLayout.scss"

export default class LinearLayout extends Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    horiziontal: 1,
    style: {}
  }

  static attrs = [
    {
      name: "height",
      type: "number"
    }, {
      name: "width",
      type: "number"
    }, {
      name: "color",
      type: "string"
    }, {
      name: "background",
      type: "string"
    }, {
      name: "padding",
      type: "string"
    }, {
      name: "margin",
      type: "string"
    }, {
      name: "border",
      type: "string"
    }, {
      name: "justify-content",
      type: "string"
    }
  ];
  render() {
    let {horiziontal, className, children, style} = this.props;
    return (<div style={style} className={`${styles.body} ${horiziontal
        ? styles.horiziontal
        : styles.vertical} ${className}`}>
      {children}
    </div>)
  }
}
