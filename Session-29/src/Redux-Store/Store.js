import { legacy_createStore, applyMiddleware } from "redux";
import myReducer from "../Reducers/myReducer";
import logger from "redux-logger";

let myStore = legacy_createStore(myReducer, applyMiddleware(logger));

export default myStore;
