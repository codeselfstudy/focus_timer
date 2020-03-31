import React from "react";

import "./timer.scss";

const TimerPage = ({ match }) => {
    const {
        params: { timerId },
    } = match;

    return (
        <div className="timer">
            <h1>Timer (Random ID: {timerId})</h1>
            <p>This is where the timer countdown will go.</p>
        </div>
    );
};

export default TimerPage;
