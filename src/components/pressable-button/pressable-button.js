import React, { useState } from "react";

import "./pressable-button.scss";

const PressableButton = ({ children, handleClick, ...otherProps }) => {
    const [isPressed, setIsPressed] = useState(false);

    function handleMouseDown(_e) {
        setIsPressed(true);
    }

    return (
        <>
            <button
                onMouseDown={handleMouseDown}
                onClick={handleClick}
                className={`pressable-button ${
                    isPressed ? "is-pressed" : null
                }`}
                {...otherProps}
            >
                {children}
            </button>
        </>
    );
};

export default PressableButton;
