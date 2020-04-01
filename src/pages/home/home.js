import React from "react";
import { Link } from "react-router-dom";

import ExternalLink from "../../components/external-link/external-link";

import metadata from "../../settings/metadata";

import "./home.scss";

const HomePage = () => (
    <div className="home">
        <h1>{metadata.title}</h1>
        <p className="subtitle">{metadata.description}</p>
        <Link to="/start">Start a Timer</Link>
        <h2>How It Works</h2>
        <p>
            In order to prevent spam, you need to log in to create and manage a
            timer, but anyone can follow a timer. If they also log in, they will
            have access to additional features.
        </p>

        <p>
            <strong>TIP:</strong> Be sure to enable desktop notifications to get
            pop-up alerts when the timer starts and stops!
        </p>
        <h2>How to Contribute</h2>
        <p>
            The source code is on{" "}
            <ExternalLink href="https://github.com/codeselfstudy/focus_timer">
                Github
            </ExternalLink>
            . Please join{" "}
            <ExternalLink href="https://forum.codeselfstudy.com/">
                our online community
            </ExternalLink>{" "}
            and ask the members there about current tasks that might need
            assistance. See also the{" "}
            <ExternalLink href="https://github.com/codeselfstudy/focus_timer/issues">
                issue queue
            </ExternalLink>
            .
        </p>
    </div>
);

export default HomePage;
