import React from "react";

import "./navbar.scss";

const Navbar = ({ siteName }) => (
    <nav className="navbar">
        <span className="site-name">{siteName}</span>
    </nav>
);
export default Navbar;
