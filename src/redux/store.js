import { createStore } from "redux";
//import axios from "axios";

const initState = {
  realEstate: {
    forRent: [],
    commercial: [],
    roomMates: [],
    forsale: []
  }
};
let store = createStore((state = initState, action) => {
  switch (action.type) {
    case "SET_STATE":
      //state.realEstate[action.paylod.type]=action.paylod.realEstates
      console.log(state,action);

      return {
        ...state,
        realEstate: {
          ...state.realEstate,
          [action.paylod.type]: action.paylod.realEstates
        }
      };
    default:
      return state;
  }
});
export default store;
