import React from "react";
import { render } from "react-dom";
import { GlobalStyles } from "./global-styles";
import { FirebaseProvider } from "./context";
import App from "./App";
import "normalize.css";
// import { firebase } from "./lib/firebase.prod.js"

render(
  <>
    <FirebaseProvider>
      <GlobalStyles />
      <App />
    </FirebaseProvider>
  </>,
  document.getElementById("root")
);
