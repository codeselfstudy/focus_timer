import React, { useState } from "react";

import SignIn from "../../components/sign-up/sign-up";
import SignUp from "../../components/sign-in/sign-in";
import Spinner from "../../components/spinner/spinner";

import "./auth.scss";

const AuthPage = () => {
    const [
        hasSuccessfulllySubmittedForm,
        setHasSuccessfullySubmittedForm,
    ] = useState(false);

    return (
        <div className="auth">
            <h1>Sign up or sign in to get started!</h1>
            {hasSuccessfulllySubmittedForm ? (
                <div className="spinner-wrapper">
                    <Spinner fontSize={64} />
                </div>
            ) : (
                <div className="forms">
                    <SignIn
                        setHasSuccessfullySubmittedForm={
                            setHasSuccessfullySubmittedForm
                        }
                    />
                    <SignUp
                        setHasSuccessfullySubmittedForm={
                            setHasSuccessfullySubmittedForm
                        }
                    />
                </div>
            )}
        </div>
    );
};

export default AuthPage;
