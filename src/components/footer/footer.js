import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

import ExternalLink from "../external-link/external-link";

import "./footer.scss";

const Footer = ({ siteName }) => (
    <div className="footer">
        <div className="left">
            &copy; {new Date().getFullYear()} {siteName} &bull;{" "}
            <Link to="/about">About</Link> &bull;{" "}
            <ExternalLink to="https://codeselfstudy.com/">
                Code Self Study
            </ExternalLink>
        </div>
        <div className="right">
            <div className="icons">
                <ExternalLink href="https://github.com/codeselfstudy">
                    <FaGithub size={32} />
                </ExternalLink>{" "}
                <ExternalLink href="https://twitter.com/codeselfstudy">
                    <FaTwitter size={32} />
                </ExternalLink>{" "}
                <ExternalLink href="https://www.youtube.com/codeselfstudy">
                    <FaYoutube size={32} />
                </ExternalLink>
            </div>
        </div>
    </div>
);

export default Footer;
