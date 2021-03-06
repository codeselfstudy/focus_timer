import React from "react";

import "text-spinners";
// import "./spinner.scss";

const Spinner = ({ fontSize = 32 }) => {
    return <div style={{ fontSize: fontSize }} className="loading dots"></div>;
};

export default Spinner;
