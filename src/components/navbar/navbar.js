import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { IoIosLogOut } from "react-icons/io";
import Spinner from "../spinner/spinner";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import { auth } from "../../firebase/firebase.utils";

import "./navbar.scss";

const Navbar = ({ siteName, currentUser }) => {
    console.log("[[navbar.js]] currentUser", currentUser);

    // TODO: change this to wait for the actual user state instead of a
    // fixed length of time. I don't know yet what React is doing here.
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1500);
    });

    return (
        <nav className="navbar">
            <div className="left">
                <span className="site-name">
                    <Link to="/">{siteName}</Link>
                </span>
            </div>

            <div className="right">
                {isLoading ? (
                    <>
                        <span className="loading-text">
                            Checking auth status
                        </span>{" "}
                        <Spinner fontSize="16" />
                    </>
                ) : currentUser ? (
                    <>
                        <Link to="/profile">{currentUser.displayName}</Link>{" "}
                        <IoIosLogOut
                            onClick={() => auth.signOut()}
                            title="Sign out"
                        />
                    </>
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
