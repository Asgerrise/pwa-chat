import { injectGlobal } from "@emotion/css";
import React from "react";
import { Router } from "@reach/router";

import Home from "./Home";

import MessageContextProvider from "./contexts/MessageContext";

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
      <MessageContextProvider>
        <Router>
          <Home path="/" />
        </Router>
      </MessageContextProvider>
    </div>
  );
}

export default App;
