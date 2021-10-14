import React, { FC, lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Quiz = lazy(() => import("./pages/Quiz"));
const Results = lazy(() => import("./pages/Results"));
const NotFound = lazy(() => import("./pages/NotFound"));

export enum RouteLink {
  Home = "/",
  Quiz = "/quiz",
  Results = "/results",
}

const Routes: FC = () => (
  <Switch>
    <Route path={RouteLink.Home} exact component={Home} />
    <Route path={RouteLink.Quiz} component={Quiz} />
    <Route path={RouteLink.Results} component={Results} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
