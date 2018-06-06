import React, {Component} from "react";
import styles from "./index.scss";
import ElementsView from "./ElementsView"
import Container from "./Container"
import AttrsView from "./AttrsView"
import LinearLayout from "element/LinearLayout"

export default class Drag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attrs: []
    }
  }
  dragEnd = (index) => {
    let element = this.elements[index];
    this.setState({element, attrs: element.element.attrs});
  }
  changeAttrs = (index, value) => {
    this.state.attrs[index].value = value;
    this.state.element.attrs = this.state.attrs;
    this.setState({});
  }
  elements = [
    {
      name: "LinearLayout",
      element: LinearLayout
    }, {
      name: "LinearLayout1",
      element: LinearLayout
    }, {
      name: "LinearLayout2",
      element: LinearLayout
    }, {
      name: "LinearLayout3",
      element: LinearLayout
    }, {
      name: "LinearLayout4",
      element: LinearLayout
    }
  ]
  componentDidMount() {}

  dragover = (ev) => {
    console.log(ev);
    ev.preventDefault();
  }

  render() {
    return (<div className={styles.body}>
      <ElementsView elements={this.elements} dragEnd={this.dragEnd}/>
      <AttrsView attrs={this.state.attrs} change={this.changeAttrs}/>
    </div>)
  }
}
