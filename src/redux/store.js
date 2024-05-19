import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import  {thunk}  from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";


const composedEnhanser = composeWithDevTools(applyMiddleware(thunk))


const store = configureStore({
    reducer: rootReducer,
    composedEnhanser
})


export default store;