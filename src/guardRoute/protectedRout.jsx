import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

import Home from "../components/Home";



const ProtectedRoute = (props)=>{
    const {Component} = props;
    const auth = useSelector(store => store.authenticated);
    console.log(auth)

    return (
        <div>
            <Component />
        </div>
    )
}

export default ProtectedRoute;
