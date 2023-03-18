import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// Non-null assertion as root definetly exists
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const domNode = document.getElementById("root")!;
const root = ReactDOM.createRoot(domNode);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
