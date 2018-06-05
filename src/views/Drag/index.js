import React, {Component} from "react";
import styles from "./index.scss";
import ElementsView from "./ElementsView"
import Container from "./Container"
import LinearLayout from "element/LinearLayout"

export default class Drag extends Component {
  constructor(props) {
    super(props);
  }
  dragEnd = (index) => {
    console.log(index,this.container)
    this.container.setData(this.elements[index]);
  }
  elements = [
    {
      name: "LinearLayout",
      element: <LinearLayout className={styles.LinearLayout}/>
    }, {
      name: "LinearLayout1",
      element: <LinearLayout className={styles.LinearLayout}/>
    }, {
      name: "LinearLayout2",
      element: <LinearLayout className={styles.LinearLayout}/>
    }, {
      name: "LinearLayout3",
      element: <LinearLayout className={styles.LinearLayout}/>
    }, {
      name: "LinearLayout4",
      element: <LinearLayout className={styles.LinearLayout}/>
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
      <div className={styles.container}>
        <Container ref={ref => {
            this.container = ref
          }}/>
      </div>
    </div>)
  }
}
