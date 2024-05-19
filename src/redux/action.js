export const ADD_POST = "Add post";
export const DELETE_POST = "Delete post";
export const AUTH_CRED = "Auth credentials";
export const LOGOUT = "Logout";

export const logout = (isLogout)=>({
    type: LOGOUT,
    payload: true
})


export const authCred = (cred)=>({
    type: AUTH_CRED,
    payload: true
})



export const addPost = (post)=>({
    type: ADD_POST,
    payload: post
})


export const deletePost = (postId)=>({
    type: deletePost,
    payload: postId
})