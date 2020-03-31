import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// import Spinner from "../../components/spinner/spinner";

import "./pressable-button.scss";

const PressableButton = ({ children, ...otherProps }) => {
    const [isPressed, setIsPressed] = useState(false);
    const [depressedClass, setDepressedClass] = useState("");

    // TODO: after `isPressed` is true, redirect to a URL where people
    // can configure a timer.
    function handleMouseDown(_e) {
        setDepressedClass("is-pressed");
        setTimeout(() => {
            setIsPressed(true);
        }, 700);
    }

    return (
        <>
            {!isPressed ? (
                <button
                    onMouseDown={handleMouseDown}
                    className={`pressable-button ${
                        depressedClass ? "is-pressed" : null
                    }`}
                    {...otherProps}
                >
                    {children}
                </button>
            ) : (
                <Redirect to="/timer" />
            )}
        </>
    );
};

export default PressableButton;
