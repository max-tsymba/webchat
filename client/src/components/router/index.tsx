import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import IRoute, { privateRoutes, publicRoutes, RouteNames } from '../../routes';

const AppRouter: React.FunctionComponent = (): React.ReactElement => {
  const isAuth = false;
  return isAuth ? (
    <Switch>
      {privateRoutes.map((route: IRoute) => (
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to={RouteNames.HOME} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route: IRoute) => (
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to={RouteNames.LOGIN} />
    </Switch>
  );
};

export default AppRouter;
