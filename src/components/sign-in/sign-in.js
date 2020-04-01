import React, { useState } from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { auth } from "../../firebase/firebase.utils";

import "./sign-in.scss";

const SignIn = () => {
    const [values, setValues] = useState({ email: "", password: "" });

    async function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = values;
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    return (
        <div className="sign-in">
            <h2>Sign In</h2>
            <form className="sign-in-form" onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    required
                />
                <FormInput
                    type="password"
                    label="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    required
                />

                <CustomButton type="submit">Sign In</CustomButton>
            </form>
        </div>
    );
};

export default SignIn;
