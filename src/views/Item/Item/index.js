import React, { Component } from "react";
import {connect} from "react-redux";
import Table from "components/Table"
import Images from "components/Images"
import {getSkus} from "redux/reducer/sku";

@connect(state => ({skuReducer: state.skuReducer}), {getSkus})
export default class Item extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount(){
    this.props.getSkus({limit: 25});
  }

  header = [
    {name: "序号", key: "id"},
    {name: "名称", key: "name"},
    {name: "创建时间", key: "createdAt", propsKey: "date"},
    {name: "图片", key: "images", view: Images},
    {name: "价格", key: "price"},
  ]

  loadMore = () => {
    let {skusFilter, skus, fcSkus, skusNoMore} = this.props.skuReducer;
    if (!fcSkus && !skusNoMore) {
      skusFilter.offset = skus.length;
      this.props.getSkus(skusFilter);
    }
  }

  render(){
    let {skus, fcSkus, skusNoMore} = this.props.skuReducer;

    return (
      <div>
        <Table dataSource={skus} fetching={fcSkus} noMore={skusNoMore} header={this.header} loadMore={this.loadMore}
          selectKey="id" selectValue={this.state.id} rowClick={(a)=>{this.setState({id: a.rowData.id})}}/>
      </div>
    );
  }
}
