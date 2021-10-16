import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import membersReducer from "./reducers";

const rootReducer = combineReducers({ membersReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
