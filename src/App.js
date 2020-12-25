import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Browse, Home, SignIn, SignUp } from "./pages";

export default function App() {
  return (
    <>
      <Router>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.BROWSE} component={Browse} />
        <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
      </Router>
    </>
  );
}