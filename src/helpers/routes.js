import React from "react";
import { Route, Redirect } from "react-router-dom";

export function IsUserRedirect({
  /* component,*/
  user,
  loggedInPath,
  children,
  ...restProps
}) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) {
          return children;
          //   return component;
        }

        if (user) {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }

        return null;
      }}
    />
  );
}

// 4:29:09
export function ProtectedRoute({
  /* component,*/ user,
  children,
  ...restProps
}) {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (user) {
          return children;
          //   return component;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: "signin",
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
