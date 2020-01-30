/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./filter.scss";
import { Row, Col } from "react-bootstrap";

export default class Filter extends React.Component {
  state = {
    isPropertyTypeClicked: false,
    isRoomNumberClicked:false
  };

  onclickPropertyType = e => {
    
    e.stopPropagation();
    this.setState(() => ({
      isPropertyTypeClicked: !this.state.isPropertyTypeClicked
    }));
  };
  onclickRoomNumber = e => {
    
    e.stopPropagation();
    this.setState(() => ({
      isRoomNumberClicked: !this.state.isRoomNumberClicked
    }));

  };
  onClickOutFilter = () => {
    this.setState(() => ({ isPropertyTypeClicked: false,
    isRoomNumberClicked:false
    }));
  };
  render() {
    return (
      <div onClick={this.onClickOutFilter}>
        <div className="filterContainer">
          <form>
              <Row>
              {" "}
              <div className="inputsFlex">
                <table>
                  <thead></thead>
                  <tr>
                    <td colspan="3">
                      {" "}
                      <h5>
                        Which <a>property</a> would you like to search for?
                      </h5>
                    </td>{" "}
                  </tr>
                  <tbody>
                    <tr className="labels">
                      <td>
                        
                          {" "}
                          <label>area ,street or niegberhood</label>
                      </td>
                      <td>
                        {" "}
                        <label >
                          property type
                        </label>
                      </td>
                      <td>
                        {" "}
                        <label>number of rooms</label>
                      </td>
                      <td>
                        <label>price</label>
                      </td>
                    </tr>
                    <tr className="inputs">
                      <td>
                        {" "}
                        <input type="text" autocomplete="something-new" />
                      </td>
                      <td>
                        {" "}
                        <div className="property-type" onClick={this.onclickPropertyType}>
                          <input type="text" autocomplete="something-new" />
                          <img
                            style={
                              this.state.isPropertyTypeClicked
                                ? { transform: "rotate(180deg)" }
                                : {}
                            }
                            src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
                          />
                        </div>
                      </td>
                      <td className="rooms-num" onClick={this.onclickRoomNumber}>
                      
                        <input type="text" />
                        <img
                            style={
                              this.state.isRoomNumberClicked
                                ? { transform: "rotate(180deg)" }
                                : {}
                            }
                            src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
                          />
                      </td>
                      <td className="price-input">
                        <input type="text" />
                      </td>
                      <td className="price-input">
                        <input type="text" />
                      </td>
                      <td>
                        {" "}
                        <button type="button" className="advanced-search">Advanced Search</button>{" "}
                      </td>
                      <td>
                        {" "}
                        <button type="submit" className="search-button">Search</button>
                      </td>
                    </tr>
                  </tbody>
                </table>{" "}
              </div>
            </Row>
          </form>
        </div>
      </div>
    );
  }
}
