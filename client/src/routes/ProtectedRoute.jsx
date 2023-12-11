import * as React from "react"
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom"
import { LoginContext } from "../context/LoginContext";


export default function ProtectedRoute({children, redirectTo = '/'}) {

    const { user } = React.useContext(LoginContext)
    
    if(!user.logged && user.admin){
        return <Navigate to={redirectTo}/>
    } 

    if(!user.logged){
        return <Navigate to={redirectTo}/>
    }
  
    return children
  
}

ProtectedRoute.propTypes = {
    children: PropTypes.node,
    redirectTo: PropTypes.node,
};