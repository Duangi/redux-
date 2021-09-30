import { createStore } from "redux";
import countReducer from './count_reducer'
import testReducer from "./test_reducer";
export default createStore(countReducer,testReducer)