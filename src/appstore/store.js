import { createStore, applyMiddleware, combineReducers } from "redux"
import reducers from "./reducers"
import thunk from "redux-thunk"

const allReducers = combineReducers({
    login: reducers
})
const middleWare = [thunk]
const store = createStore(
    allReducers(),
    applyMiddleware(...middleWare)
    )

    console.log(reducers)
export default store;