import React from "react";

import "./form-input.scss";

const FormInput = ({ label, handleChange, ...otherProps }) => (
<div className="form-group">
    <input className="form-input"
        onChange={handleChange}
        {...otherProps}
    />
            {label ? (
                <label className="label">{label}</label>
            ) : null}
</div>
);

export default FormInput;
