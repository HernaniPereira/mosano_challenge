import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import membersReducer from "./reducers";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({ modalReducer, membersReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
