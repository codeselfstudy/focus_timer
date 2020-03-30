/**
 * This component is to demonstrate the palette.
 */
import React from "react";

import { colorsList } from "./palette.data";

import "./palette.scss";

function Color({ hex }) {
    return (
        <div
            style={{
                backgroundColor: hex,
                width: 50,
                height: 50,
            }}
        ></div>
    );
}

const Palette = () => {
    return (
        <div className="palette">
            {colorsList.map(c => (
                <Color className="color" key={c} hex={c} />
            ))}
        </div>
    );
};

export default Palette;
