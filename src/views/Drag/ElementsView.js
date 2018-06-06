import React, {Component} from "react";
import styles from "./index.scss"

export default class ElementsView extends Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    elements: [],
    view: ""
  }

  dragEnd = (index) => {
    console.log("leftchild")
    this.props.dragEnd && this.props.dragEnd(index);
  }
  getAttrs = (attrs) => {
    let obj = {};
    if (attrs instanceof Array) {
      attrs.forEach(attr => {
        obj[attr.name] = attr.value;
      })
    }
    return obj;
  }
  render() {
    let {elements} = this.props;
    return (<div className={styles.ElementsView} ref={ref => {
        this.ref = ref;
      }}>
      {
        elements.map((item, index) => {
          return (<div key={index} draggable={true} onDragEnd={() => this.dragEnd(index)}>
            <span title={item.name}>{item.name}</span>
            <div><item.element style={this.getAttrs(item.attrs)}/></div>
          </div>);
        })
      }
    </div>)
  }
}
