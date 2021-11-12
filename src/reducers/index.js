import clothesReducer from "../reducers/clothesReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    clothes: clothesReducer
}) 
export default rootReducer;
