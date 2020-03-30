import React from "react";
import { Link } from "react-router-dom";

import "./footer.scss";

const Footer = ({ siteName }) => (
    <div className="footer">
        &copy; {new Date().getFullYear()} {siteName} &bull;{" "}
        <Link to="/about">About</Link>
    </div>
);

export default Footer;
