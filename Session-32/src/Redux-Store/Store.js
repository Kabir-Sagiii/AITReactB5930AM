import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import myReducer from "../Reducers/myReducer";
import productReducer from "../Reducers/productReducer";
import logger from "redux-logger";

var combinedReducer = combineReducers({ myReducer, productReducer });

let myStore = legacy_createStore(combinedReducer, applyMiddleware(logger));

export default myStore;
