/* eslint-disable react/prop-types */
import { useContext } from "react";
import AuthProvider, { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PriveitRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    if(loading){
        return <p>loading.....</p>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PriveitRoute;