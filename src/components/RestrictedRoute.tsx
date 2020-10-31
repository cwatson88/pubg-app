import React, { ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";

interface RestrictedRouteProps {
  children?: ReactNode;
  // TODO: give this a real type
  render?: any;
  auth:
    | {
        data: {
          read(): any;
        };
      }
    | undefined;
  redirectURL: string;
  [x: string]: any;
}
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function RestrictedRoute({
  render,
  auth,
  redirectURL,
  ...rest
}: RestrictedRouteProps) {
  const { gamerTag } = auth?.data?.read();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        gamerTag ? (
          render({ gamerTag })
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
