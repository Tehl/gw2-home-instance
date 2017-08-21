import { combineReducers } from "redux";
import nodeDb from "./nodeDb";

const app = combineReducers({ nodeDb });

export default app;
