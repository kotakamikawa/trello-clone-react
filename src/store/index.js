import { createStore } from "redux";
import listReducers from "../reducers";

const store = createStore(listReducers);

export default store;
