import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// import Spinner from "../../components/spinner/spinner";

import "./start-button.scss";

const StartButton = ({ children, ...otherProps }) => {
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
                    className={`start-button ${
                        depressedClass ? "is-pressed" : null
                    }`}
                    {...otherProps}
                >
                    Start a Timer
                </button>
            ) : (
                <Redirect to="/timer" />
            )}
        </>
    );
};

export default StartButton;
