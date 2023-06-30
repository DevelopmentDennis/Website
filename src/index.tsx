import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

export const COLOR_WHITE = "whitesmoke";
export const COLOR_GREEN = "yellowgreen";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
