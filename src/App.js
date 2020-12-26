import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Browse, Home, SignIn, SignUp } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener();
  // console.log("App.js - user = ", user);

  return (
    <>
      <Router>
        {/* <Route exact path={ROUTES.HOME} component={Home} /> */}
        <IsUserRedirect
          exact
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          // component={Home}
        >
          <Home />
        </IsUserRedirect>
        <IsUserRedirect
          exact
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
          // component={SignIn}
        >
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect
          exact
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
          // component={SignUp}
        >
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute
          exact
          user={user}
          path={ROUTES.BROWSE}
          /* Functions are not valid as a React child. This may happen if
          you return a Component instead of <Component /> from render */
          // component={Browse}
        >
          <Browse />
        </ProtectedRoute>
      </Router>
    </>
  );
}
