import { injectGlobal } from "@emotion/css";
import React from "react";
import { Router } from "@reach/router";

import Home from "./Home";

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .App {
    font-family: "Roboto", sans-serif;
  }
`;

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
      </Router>
    </div>
  );
}

export default App;
