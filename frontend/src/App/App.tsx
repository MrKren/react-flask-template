import React from "react";

import "./App.scss";
import tsLogo from "../Assets/ts-logo.svg";

const App = (): JSX.Element => (
  <div className="app">
    <p>Hello World</p>
    <img src={tsLogo} />
  </div>
);

export default App;
