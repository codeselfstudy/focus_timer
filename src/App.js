import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import Notification from "./components/notification/notification";

import settings from "./settings";

import HomePage from "./pages/home/home";
import AuthPage from "./pages/auth/auth";
import TimerPage from "./pages/timer/timer";
import AboutPage from "./pages/about/about";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import "./App.scss";

function App({ currentUser }) {
    // Should this be stored globally?
    // const [notificationsEnabled, setNotificationsEnabled] = useState(false);

    return (
        <div className="app">
            <Navbar siteName={settings.site.metadata.title} />

            <div className="page-wrapper">
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
            </div>

            <Footer siteName={settings.site.metadata.title} />
        </div>
    );
}

export default App;
