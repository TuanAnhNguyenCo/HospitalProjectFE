import "./login.scss"
import React from 'react';
import LoginPage  from "../../components/user/LoginPage";
import LoginContent from "../../components/user/LoginContent";


const Login = () => {
    
    return (
        <div className="login">
            <div className="login-content"><LoginContent/></div>
            <div className="login-form"><LoginPage/></div>
        </div>
    )
}

export default Login