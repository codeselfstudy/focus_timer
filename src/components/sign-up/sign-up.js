import React, { useState } from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { auth, createUserProfile } from "../../firebase/firebase.utils";

import "./sign-up.scss";

const SignUp = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            createUserProfile(user, { displayName });

            setDisplayName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        } catch (err) {
            console.error(err);
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
    }

    return (
        <div className="sign-up">
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    label="Username"
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
