import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import { auth } from "../../firebase/firebase.utils";

import "./navbar.scss";

const Navbar = ({ siteName, currentUser }) => {
    console.log("[[navbar.js]] currentUser", currentUser);
    return (
        <nav className="navbar">
            <div className="left">
                <span className="site-name">
                    <Link to="/">{siteName}</Link>
                </span>{" "}
            </div>

            <div className="right">
                {currentUser ? (
                    <Link to="/profile">{currentUser.displayName}</Link>
                ) : (
                    <Link to="/auth">Sign In</Link>
                )}
            </div>
        </nav>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Navbar);
