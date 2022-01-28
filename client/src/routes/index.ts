import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';

export default interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  HOME = '/',
  LOGIN = '/login',
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, component: Login, exact: true },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.HOME, component: Home, exact: true },
];
