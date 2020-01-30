import React from "react";
import Filter from "./components/filter/filter";
import List from "./components/list";
import Navbar from "./components/navbar/navbar";
import "./App.css";
import { connect } from "react-redux";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  withRouter
} from "react-router-dom";
class App extends React.Component {
  state = {
    error: null,
    isLoadeda: false,
    realEstates: [],
   // realEstateType: "forsale"
  };
  constructor(props){
    super(props)
  this.child = React.createRef();
  }
 // match = useRouteMatch();

  url = "http://localhost:4000/api/real-estate";
    
    onChangeRealEstateType=(realEstateType)=>{
      this.setState(()=>({realEstateType}))
      this.getRealEstate(realEstateType)
    }
    getRealEstate=(realEstateType='forsale')=>{
      axios.get(this.url + "/" + realEstateType).then(
        result => {
          this.setState(()=>({realEstates:[]}))
          this.setState({
            isLoaded: true,
            realEstates: result.data
          });
          this.props.updateState(realEstateType, result.data);
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
    }
  componentDidMount() {
  this.getRealEstate()
  }
  closeFilters=()=>{
this.child.current.onClickOutFilter()
  }
  // childRef = this.useRef();


  render() {
    const { error, isLoaded, realEstates } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      // console.log(this.props);

      return (
        <div  style={{ width: "60%", backgroundColor: " #f8f8f8" }} onClick={this.closeFilters}>
          <div
            style={{
              width: "100vw",
              height: "75px",
              backgroundColor: "#f57028"
            }}
          ></div>
           <Navbar onChangeRealEstateType={this.onChangeRealEstateType}/>
        
          <div className="components-container">
            <div className="filter"> <Filter ref={this.child} /></div>
         
         <div className="list"> <List realEstates={realEstates} /></div>
          </div>
          
         
         

        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateState: (type, realEstates) =>
      dispatch({ type: "SET_STATE", paylod: { type, realEstates } })
  };
};
const mapStateToProps = ({ realEstate }) => realEstate;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <ul>

//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>

//           <Route path="/topics">
//             <Topics />
//           </Route>

//       </div>
//     </Router>
//   );
// }

// function Topics() {
//   let match = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>
//             Props v. State
//           </Link>
//         </li>
//       </ul>

//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <Topic />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   let { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }
