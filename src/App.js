import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import settings from "./settings";
import Navbar from "./components/navbar/navbar";

import "./App.css";

function App({ currentUser }) {
    return (
        <div className="App">
            <Navbar siteName={settings.site.title} />

            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/timer" component={TimerPage} />
                <Route
                    path="/auth"
                    render={() =>
                        currentUser ? <Redirect to="/" /> : <AuthPage />
                    }
                />
            </Switch>
        </div>
    );
}

export default App;
