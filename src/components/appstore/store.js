
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

const state = {};
const middleWare = [thunk];
const store = createStore(state, applyMiddleware(...middleWare)) 

export default store;