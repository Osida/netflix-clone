import React from "react";
// import ReactDOM from "react-dom";
import { render } from "react-dom";
import App from "./app.jsx";
import "normalize.css";
import { GlobalStyles } from "./global-styles.jsx";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
