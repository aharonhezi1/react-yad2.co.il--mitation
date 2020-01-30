import React from "react";
export default props => {
  console.log(props);
  const itemBoxStyle= { width: "695px",
  height:'137px' }
  const priseTdStyle={
    width: "182px",
    textAlign: "right",
    paddingRight: "5px"
  }

  return (
    <div
        onMouseEnter={props.onMouseOverItem}
        onMouseLeave={props.onMouseOutItem}
        onClick={props.onClickItem}
        style={
         props.isHoverOn
            ?{...itemBoxStyle,
              boxShadow:
              " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            : itemBoxStyle
        }
      >
        <font size="3">
          {" "}
          <table className="table-item-open">
            <tr>
            <th  rowSpan="2" style={{paddingLeft:'5px'}}>
                      {(
                        <img
                          alt=""
                          height="117px"
                          width="195px"
                          src={props.flat.pictures[0]}
                        />
                      ) || ""}
                    </th>
              <td style={{ width: "345px" }}>
                <table style={{ width: "345px" }}>
                  <tr>
                    
                    
                    <th >
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
              <td
                style={priseTdStyle}
              >
                {props.flat.prise ? "$ " + props.flat.prise : "not mentioned"}
              </td>
             
              
            </tr>
            <tr style={{ width: "186px", textAlign: "center" }}> <td >
                <table
                  style={{
                    width: "186px",
                    textAlign: "center"                  
                  }}
                >
                  <tr>
                    <th>
                      {" "}
                      {props.flat.about.squaremeter
                        ? " " + props.flat.about.squaremeter
                        : ""}
                    </th>
                    <th>
                      {props.flat.about.floor
                        ? " " + props.flat.about.floor
                        : ""}
                    </th>
                    <th>
                      {" "}
                      {props.flat.about.rooms
                        ? " " + props.flat.about.rooms
                        : ""}
                    </th>
                  </tr>
                  <tr style={{ color: "gray"}}>
                    <th>squaremeter </th>
                    <th>floor </th>
                    <th>rooms </th>
                  </tr>
                </table>
          
              </td></tr>
          </table>
        </font>
      </div>
  );
};
