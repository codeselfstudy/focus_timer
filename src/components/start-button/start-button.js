import React, { useState } from "react";
import Spinner from "../../components/spinner/spinner";
import { Redirect } from "react-router-dom";

import "./start-button.scss";

const StartButton = ({ children, ...otherProps }) => {
    const [isPressed, setIsPressed] = useState(false);
    const [timerId, setTimerId] = useState(null);

    // TODO: after `isPressed` is true, show spinner for 1 sec and
    // redirect to a timer URL
    function handleMouseDown(_e) {
        setIsPressed(true);
        setTimeout(() => {
            // TODO: set a timerId from Firebase
            setTimerId(Math.floor(Math.random() * 1000));
        }, 1500);
    }

    return (
        <>
            {/* once it gets a timerId, then redirect */}
            {timerId ? (
                <Redirect to={`/timer/${timerId}`} />
            ) : (
                <button
                    onMouseDown={handleMouseDown}
                    className={`start-button ${isPressed ? "is-pressed" : ""}`}
                    {...otherProps}
                >
                    {isPressed ? (
                        <span>
                            Starting Timer <Spinner fontSize="50" />
                        </span>
                    ) : (
                        <span>Start Timer</span>
                    )}
                </button>
            )}
        </>
    );
};

export default StartButton;
