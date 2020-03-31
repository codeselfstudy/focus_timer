import React from "react";

import SignIn from "../../components/sign-up/sign-up";

import "./auth.scss";

const AuthPage = () => (
    <div className="auth">
        <h1>Sign up or sign in to get started!</h1>
        <SignIn />
    </div>
);

export default AuthPage;
