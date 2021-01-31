import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Books from "./components/Books";
import About from "./routes/About";

function App() {
    return (
        <HashRouter>
            <Route path="/" exact={true} component={Books} />
            <Route path="About" component={About} />
        </HashRouter>
    );
}

export default App;