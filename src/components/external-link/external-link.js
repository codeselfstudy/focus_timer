/**
 * This opens externals links in new tabs so that the timer isn't lost.
 *
 * This might not be needed, but I don't want to keep typing all the
 * attributes.
 *
 * Normally, it isn't a good practice to open new tabs on links, but
 * this is a long-running app that shouldn't be closed.
 */
import React from "react";

import "./external-link.scss";

const ExternalLink = ({ to, children, ...otherProps }) => (
    <a
        className="external-link"
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        {...otherProps}
    >
        {children}
    </a>
);

export default ExternalLink;
