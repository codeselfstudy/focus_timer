import React from "react";

import "./form-input.scss";

const FormInput = ({ label, handleChange, ...otherProps }) => (
    <div className="form-group">
        {label ? (
            <label htmlFor={otherProps.id} className="label">
                {label}
            </label>
        ) : null}
        <input
            className="form-input"
            onChange={handleChange}
            id={otherProps.name}
            {...otherProps}
        />
    </div>
);

export default FormInput;
