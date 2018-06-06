import React, {Component} from "react";
import LinearLayout from "element/LinearLayout"
import styles from "./index.scss"

export default class StylesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attrs:props.attr || []
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.attrs != this.props.attrs) {
      this.setState({attrs: nextProps.attrs});
    }
  }
  onChange = (index, e) => {
    let value = e.target.value;
    this.state.attrs[index].value = value;
    this.props.change && this.props.change(index,value);
  }
  render() {
    let {attrs} = this.props;
    return (<div>
      {
        attrs.map((attr, index) => {
          return (<div key={index} className={styles.attrView}>
            <span title={attr.name}>{attr.name}</span>
            <span>
              {attr.type && <input onChange={this.onChange.bind(this, index)}/> || <select></select>}
            </span>
          </div>);
        })
      }
    </div>)
  }
}
