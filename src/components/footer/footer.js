import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

import "./footer.scss";

const Footer = ({ siteName }) => (
    <div className="footer">
        <div className="left">
            &copy; {new Date().getFullYear()} {siteName} &bull;{" "}
            <Link to="/about">About</Link> &bull;{" "}
        </div>
        <div className="right">
            <div className="icons">
                <a
                    href="https://github.com/codeselfstudy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub size={32} />
                </a>{" "}
                <a
                    href="https://twitter.com/codeselfstudy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaTwitter size={32} />
                </a>{" "}
                <a
                    href="https://www.youtube.com/codeselfstudy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaYoutube size={32} />
                </a>
            </div>
        </div>
    </div>
);

export default Footer;
