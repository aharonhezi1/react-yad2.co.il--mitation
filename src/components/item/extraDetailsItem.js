import React from "react";
import { decamelize } from "../../utils/decamelize";
export default class extends React.Component {
  flat = this.props.flat;

  detailsBoxStyle = {
    width: "483px",
    backgroundColor: "white",
    marginLeft:'15px'

  };
  comercialBoxStyle = {
  
    backgroundColor: "#f0f0f0",
   
  };
  aboutStyle = {
    padding: "10px 50px 10px 10px"
  }
  
  aboutDetailStyle={fontWeight:"bold" }
  propertyDetailsContainer={ display: "flex", flexWrap: "wrap" }
  aboutCol = Object.keys(this.flat.about);
  propertyDetailsCol = Object.keys(this.flat.propertyDetails);
  render() {
    return (
      <div>
        <font size="2">
          <table>
            <tr>
              <td rowSpan="3" style={this.comercialBoxStyle}>
                <div style={{width: "195px"}}></div>
              </td>
              <td style={this.detailsBoxStyle}>
                <div style={this.detailsBoxStyle}>
                  <table>
                    <tr>
                      <th colSpan="2">Description</th>
                    </tr>
                    <tr>
                      <td colSpan="2">{this.flat.description}</td>
                    </tr>

                    {this.aboutCol.map((detail, i) => {
                      if (i % 2 === 1 || detail === "_id") return;
                      return (
                        <tr>
                          <td style={this.aboutStyle}>
                            {" "}
                            {decamelize(detail, " ")} :{" "}
                          <span style={this.aboutDetailStyle}>{this.props.flat.about[detail]}</span>  
                          </td>

                          {this.aboutCol[i + 1] && (
                            <td>
                              {this.aboutCol[i + 1]} :{" "}
                             <span style={this.aboutDetailStyle}> {this.flat.about[this.aboutCol[i + 1]]}</span>
                            </td>
                          )}
                        </tr>
                      );
                    })}
                  </table>{" "}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <div style={this.detailsBoxStyle}>
                  <hr></hr>{" "}
                  <div>
                    <div>Property Details</div>
                    <div style={this.propertyDetailsContainer}>
                      {this.propertyDetailsCol.map((detail, i) => {
                        if (detail === "_id") return;
                        if (i % 5 === 0) return <br></br>;
                        return (
                          <span
                            style={
                              this.flat.propertyDetails[detail]
                                ? { width: "120px",fontWeight:"bold" }
                                : { width: "120px", color: "gray" }
                            }
                          >
                            {" "}
                            {decamelize(detail, " ")}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </font>
      </div>
    );
  }
}
