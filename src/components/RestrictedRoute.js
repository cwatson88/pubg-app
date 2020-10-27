import React from "react";
import { Route, Redirect } from "react-router-dom";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function RestrictedRoute({
  children,
  auth,
  redirectURL,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: redirectURL,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
