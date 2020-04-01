import React, { useState } from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { auth, createUserProfile } from "../../firebase/firebase.utils";

import "./sign-up.scss";

const SignUp = () => {
    const emptyFormValues = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const [values, setValues] = useState(emptyFormValues);

    async function handleSubmit(e) {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = values;
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
            setValues(emptyFormValues);
        } catch (err) {
            console.error(err);
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    return (
        <div className="sign-up">
            <h2>Sign Up</h2>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    label="Username"
                    name="displayName"
                    id="signUpUsername"
                    value={values.displayName}
                    onChange={handleChange}
                    required
                />
                <FormInput
                    type="email"
                    label="Email"
                    name="email"
                    id="signUpEmail"
                    value={values.email}
                    onChange={handleChange}
                    required
                />
                <FormInput
                    type="password"
                    label="Password"
                    name="password"
                    id="signUpPassword"
                    value={values.password}
                    onChange={handleChange}
                    required
                />
                <FormInput
                    type="password"
                    label="Confirm Password"
                    name="confirmPassword"
                    id="signUpConfirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    required
                />

                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    );
};

export default SignUp;
