import React from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

const Navbar = ({ siteName }) => (
    <nav className="navbar">
        <div className="left">
            <span className="site-name">
                <Link to="/">{siteName}</Link>
            </span>{" "}
        </div>

        <div className="right">
            <Link to="/auth">Sign In</Link>
        </div>
    </nav>
);
export default Navbar;
