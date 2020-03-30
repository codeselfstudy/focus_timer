import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import settings from "./settings";

import HomePage from "./pages/home/home";
import AuthPage from "./pages/auth/auth";
import TimerPage from "./pages/timer/timer";
import AboutPage from "./pages/about/about";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import "./App.css";

function App({ currentUser }) {
    return (
        <div className="App">
            <Navbar siteName={settings.site.title} />

            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route path="/timer" component={TimerPage} />
                <Route
                    path="/auth"
                    render={() =>
                        currentUser ? <Redirect to="/" /> : <AuthPage />
                    }
                />
            </Switch>
            <Footer siteName={settings.site.title} />
        </div>
    );
}

export default App;
