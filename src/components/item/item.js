import React from "react";
import ClosedItem from "./closedItem"
import  OpenedItem from './openedItem'
import ExtraDetails from './extraDetailsItem'
import './item.css'
export default class Item extends React.Component {
  flat = this.props.realEstate;
  state = {
    isHoverOn: false,
    isClicked: false
  };
  onClickItem = () => {
    this.setState(() => ({ isClicked: !this.state.isClicked }));
  };
  onMouseOverItem = () => {
    if (!this.state.isHoverOn)
    this.setState(() => ({ isHoverOn: true }));
  };
  onMouseOutItem = () => {
    this.setState(() => ({ isHoverOn: false }));
  };
  render() {
    return (<div>
       <div>{!this.state.isClicked?
       <ClosedItem flat={this.flat}
        onClickItem={this.onClickItem} 
       onMouseOverItem={this.onMouseOverItem} 
        onMouseOutItem={this.onMouseOutItem} 
        isHoverOn={this.state.isHoverOn}/>
       :<div><OpenedItem flat={this.flat}
       onClickItem={this.onClickItem} 
       onMouseOverItem={this.onMouseOverItem} 
       onMouseOutItem={this.onMouseOutItem} 
       isHoverOn={this.state.isHoverOn} />
       <ExtraDetails flat={this.flat}/></div>}</div>
       </div>
    );
  }
}
