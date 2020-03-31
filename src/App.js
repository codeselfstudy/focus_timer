import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import Notification from "./components/notification/notification";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import metadata from "./settings/metadata";

import HomePage from "./pages/home/home";
import AuthPage from "./pages/auth/auth";
import TimerPage from "./pages/timer/timer";
import AboutPage from "./pages/about/about";
import ProfilePage from "./pages/profile/profile";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import { auth, createUserProfile } from "./firebase/firebase.utils";

import "./App.scss";

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            // if the user is logged in
            if (userAuth) {
                const userRef = await createUserProfile(userAuth);

                // subscribe to changes
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data(),
                    });
                });
            }

            // else the userAuth is null if it gets to here
            setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="app">
                <Navbar siteName={metadata.title} />

                <div className="page-wrapper">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/profile" component={ProfilePage} />
                        <Route path="/timer" component={TimerPage} />
                        <Route
                            path="/auth"
                            render={() =>
                                this.props.currentUser ? (
                                    <Redirect to="/" />
                                ) : (
                                    <AuthPage />
                                )
                            }
                        />
                    </Switch>
                </div>

                <Footer siteName={metadata.title} />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
