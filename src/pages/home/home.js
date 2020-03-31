import React from "react";

import CustomButton from "../../components/custom-button/custom-button";
import Palette from "../../components/palette/palette";

import "./home.scss";

const HomePage = () => (
    <div className="home">
        <h1>Focus Timer</h1>
        <p className="subtitle">
            A pomodoro-style timer to help you focus with your friends.
        </p>

        <CustomButton>Start Timer</CustomButton>
        <h2>How It Works</h2>
        <p>
            Amet eligendi corrupti libero laborum nisi. Voluptates ex non eum
            temporibus maiores. Similique illo mollitia sed labore eius placeat
            Numquam consequuntur commodi praesentium tempore nobis porro Dolor
            nobis incidunt dignissimos.
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
