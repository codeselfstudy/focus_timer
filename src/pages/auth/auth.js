import React, { useState } from "react";

import SignIn from "../../components/sign-up/sign-up";
import SignUp from "../../components/sign-in/sign-in";

import "./auth.scss";

const AuthPage = () => {
    return (
        <div className="auth">
            <h1>Sign up or sign in to get started!</h1>
            <div className="forms">
                <SignIn />
                <SignUp />
            </div>
        </div>
    );
};

export default AuthPage;
