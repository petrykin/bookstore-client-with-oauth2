import React, { useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

type PrivateRouteProps = RouteProps & {
  component: React.FC;
};

export const AdminRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const {userState: { signedin, isAdmin } } = useContext(UserContext);

  return (
    <Route {...rest} render={(props) => (
      signedin && isAdmin
        ? <Component {...props} />
        : <Redirect to='/books' />
    )} />
  );
};
