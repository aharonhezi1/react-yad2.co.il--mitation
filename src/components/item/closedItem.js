import React from "react";

export default props => {
  const itemBoxStyle = { width: "695px" };
  const priseTdStyle = {
    width: "182px",
    textAlign: "right",
    paddingRight: "5px"
  };
  const aboutCol=['squaremeter','floor','rooms']
  return (
    <div
      onMouseEnter={props.onMouseOverItem}
      onMouseLeave={props.onMouseOutItem}
      onClick={props.onClickItem}
      style={
        props.isHoverOn
          ? {
              ...itemBoxStyle,
              boxShadow:
                " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
          : itemBoxStyle
      }
    >
      <font size="3">
        {" "}
        <table className="table-item">
          <tr>
            <td style={{ width: "345px", paddingLeft: "5px" }}>
              <table>
                <tr>
                  <th>
                    {(
                      <img
                        alt=""
                        height="66px"
                        width="110px"
                        src={props.flat.pictures[0]}
                      />
                    ) || ""}
                  </th>
                  <th>
                    {" "}
                    <h5>
                      {props.flat.address.number} {props.flat.address.street}
                    </h5>
                    <p>
                      {props.flat.address.city}{" "}
                      {props.flat.address.neighborhood}
                    </p>
                  </th>
                </tr>
              </table>
            </td>
            <td style={{ width: "186px", textAlign: "center" }}>
              <table
                style={{
                  width: "186px",
                  textAlign: "center",
                 
                }}
              >
                <tr >
                  <th >
                    {" "}
                    {props.flat.about.squaremeter
                      ? " " + props.flat.about.squaremeter
                      : ""}
                  </th>
                  <th>
                    {props.flat.about.floor ? " " + props.flat.about.floor : ""}
                  </th>
                  <th>
                    {" "}
                    {props.flat.about.rooms ? " " + props.flat.about.rooms : ""}
                  </th>
                </tr>
                <tr style={{ color: "gray"}}>
                  <th >squaremeter </th>
                  <th>floor </th>
                  <th>rooms </th>
                </tr>
              </table>
              {/* <div style={{ display: "flex", justifyContent:'space-around',flexWrap:'wrap'}}>
              {aboutCol.map(about=>{
                      return(
                          <span style={{fontSize:'14px',marginRight:'10px',textAlign:'center'}}>{props.flat.about[about]}</span>
                      )
                  })}
                  {aboutCol.map(about=>{
                      return(
                          <span style={{fontSize:'14px',color:'gray',marginRight:'10px'}}>{about}</span>
                      )
                  })}
                   
              </div> */}

            </td>
            <td style={priseTdStyle}>
              {props.flat.prise ? "$ " + props.flat.prise : "not mentioned"}
            </td>
          </tr>
        </table>
      </font>
    </div>
  );
};
