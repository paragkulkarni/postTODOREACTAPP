import { combineReducers } from "@reduxjs/toolkit";
import { ADD_POST, DELETE_POST, AUTH_CRED, LOGOUT } from "./action";

const initialState = {
    posts: [],
    authenticated: false,
    isLogout: false
}

const logoutReducer = (state=initialState, action) =>{
    console.log("----logout action----",action.payload)
    switch(action.type){
        case LOGOUT:
            return {
                ...state,
                isLogout: [state.isLogout, action.payload]
            }
        default:
            return state
    }
}

const authReducer = (state = initialState, action)=>{
    switch(action.type){
        case AUTH_CRED:
            return {
                ...state,
                authenticated: [state.authenticated, action.payload]
            }
        default:
            return state
    }
}

const postReducer = (state = initialState, action)=>{

    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post)=>post.id!==action.payload),
            }
        default:
            return state
    }

}


export const rootReducer = combineReducers({
    posts: postReducer,
    authenticated: authReducer,
    logout: logoutReducer
})