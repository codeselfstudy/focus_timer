import React from "react";

import settings from "./settings";
import Navbar from "./components/navbar/navbar";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Navbar siteName={settings.site.title} />
        </div>
    );
}

export default App;
