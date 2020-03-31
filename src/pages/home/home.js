import React from "react";

import StartButton from "../../components/start-button/start-button";
import Palette from "../../components/palette/palette";

import metadata from "../../settings/metadata";

import "./home.scss";

const HomePage = () => (
    <div className="home">
        <h1>{metadata.title}</h1>
        <p className="subtitle">{metadata.description}</p>

        <StartButton>Start Timer</StartButton>
        <h2>How It Works</h2>
        <p>todo</p>
        <p>
            In order to prevent spam, you need to log in to create and manage a
            timer, but anyone can follow a timer.
        </p>

        <p>
            <strong>TIP:</strong> Be sure to enable desktop notifications to get
            pop-up alerts when the timer starts and stops!
        </p>
        <h2>How to Contribute</h2>
        <p>
            Sit cum nobis tempore alias laudantium libero. Deleniti reiciendis
            corrupti iusto fuga maiores? Quidem rerum est quisquam suscipit
            veniam magni a, dolores Quia soluta eveniet facilis repudiandae
            molestiae. Nemo reiciendis?
        </p>
        <h3>Palette Ideas</h3>
        <Palette />
    </div>
);

export default HomePage;
