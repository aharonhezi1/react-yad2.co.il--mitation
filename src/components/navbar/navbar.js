import React from "react";
import { connect } from "react-redux";

import "./navbar.css";
import { decamelize } from "../../utils/decamelize";
import { Link,withRouter } from "react-router-dom";
 class Navbar extends React.Component {
  componentDidMount() {
    // let { url } = useRouteMatch();
  }
  realEstateType = ["forsale", "forRent", "roommates", "commercial"];
  state = {
    chosenRealEstate: "forsale"
  };
  onClickedRealEstate = type => {
this.props.onChangeRealEstateType(type)
     this.setState(()=>({chosenRealEstate:type}))
     

  };
  chosenRealEstateStyle={color:"#f57028",borderBottom:'2px solid '}
  clicedTdStyle = {
    color: "#f57028"
  };

  render() {
    //console.log(useRouteMatch())
    return (
      <div>
        <table id="navbarTable">
          {/* <tr>
                    <td style={this.state.theClickedOn==="forsale"?this.clicedTdStyle:{}} id="forsale">for sale</td>
                    <td onClick={this.onClickedRealEstate} id="rent">for rent</td>
                    <td id="roommates">roommataes</td>
                    <td id="commercial">commercial</td>

                </tr> */}
          <tr>
            {this.realEstateType.map(type => (
              <td 
              style={this.state.chosenRealEstate===type?this.chosenRealEstateStyle:{}}
                onClick={() => {
                  this.onClickedRealEstate(type);
                }}
              >
                <Link  style={this.state.chosenRealEstate===type?{color:"#f57028"}:{}}
                to={"/" + type}>{decamelize(type, " ")}</Link>{" "}
              </td>
            ))}
          </tr>
        </table>
      </div>
    );
  }
}
// const mapDispatchToProps = dispatch => {
//     return {
//       updateState: (type, realEstates) =>
//         dispatch({ type: "SET_STATE", paylod: { type, realEstates } })
//     };
//   };
// const mapStateToProps = ({ realEstate }) => realEstate;

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
export default Navbar
// export default ()=>{

//     function Home() {
//         let match = useRouteMatch();
//         let params=    useParams()

//         return <h2>{  console.log(match)}
//                    { console.log(useParams())}

//         Home</h2>;
//       }

//     return(
//     <div>
//         <Router>
//        <Link to={`/home`}>
//             Props v. State
//           </Link>
//           <Route path="/home/:id">
//             <Home />
//           </Route>
//           </Router>
//     </div>)
// }
