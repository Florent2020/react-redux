import { combineReducers } from "redux";
import { productReduser, selectedProductReduser } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReduser,
  product: selectedProductReduser,
});

export default reducers;
