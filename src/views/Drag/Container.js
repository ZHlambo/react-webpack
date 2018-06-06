import React, {Component} from "react";
import LinearLayout from "element/LinearLayout"

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [<LinearLayout />]
    }
  }
  setData = (element) => {
    this.state.elements.push(element);
    this.setState({});
  }
  render() {
    console.log(this.state.elements);
    return (<div onDrop={this.onDrop} style={{
        width: "100%",
        height: "100%"
      }}></div>)
  }
}
