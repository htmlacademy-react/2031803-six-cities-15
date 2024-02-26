import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const.ts';
import React from 'react';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: React.JSX.Element;
}

const PrivateRoute = ({ authorizationStatus, children } : PrivateRouteProps): React.JSX.Element => (
  authorizationStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppRoute.Login} />
);

export default PrivateRoute;
