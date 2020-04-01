import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

// import CustomButton from "../../components/custom-button/custom-button";
import PressableButton from "../../components/pressable-button/pressable-button";

import "./timer-start.scss";

const TimerStartPage = () => {
    const [timerId, setTimerId] = useState(null);

    function handleStartPomodoroTimer(e) {
        setTimeout(() => setTimerId(Math.floor(Math.random() * 5000)), 1200);
    }

    return (
        <div className="timer">
            <h1>Productivity Timers</h1>

            {timerId ? (
                <Redirect to={`/timer/${timerId}`} />
            ) : (
                <PressableButton handleClick={handleStartPomodoroTimer}>
                    Start a Pomodoro Timer
                </PressableButton>
            )}

            {/*
        <CustomButton disabled title="Coming soon">
            Create a Custom Timer
        </CustomButton>
        */}
        </div>
    );
};

export default TimerStartPage;
