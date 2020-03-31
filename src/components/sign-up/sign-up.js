import React, { useState } from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import "./sign-up.scss";

const SignUp = () => {
    const [displayName, setDisplayName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        alert("clicked");
    }

    function handleChange(e) {
        const { name, value } = e.target;
    }

    return (
        <div className="sign-up">
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    label="displayName"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    required
                />
                <CustomButton>Sign In</CustomButton>
            </form>
        </div>
    );
};

export default SignUp;
