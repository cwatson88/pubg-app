import React, { ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";

interface RestrictedRouteProps {
  children: ReactNode;
  auth: string;
  redirectURL: string;
  [x: string]: any;
}
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function RestrictedRoute({
  children,
  auth,
  redirectURL,
  ...rest
}: RestrictedRouteProps) {
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
