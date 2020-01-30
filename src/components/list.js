import React from "react";
import Item from "./item/item";
import {useParams} from 'react-router-dom'
export default class List extends React.Component {
  state = {
    isClickItem: [],
    isHoverItem: [],
    realEstateType:'forsale'
  };
  componentDidMount() {
    // console.log(useParams());
    
    // this.setState(()=>({realEstateType:useParams().type||'forsale'}))
  }
  render() {
    return (
      <div>
        {this.props.realEstates.map((item, i) => (
          <Item key={i} realEstate={item} />
        ))}
      </div>
    );
  }
}
