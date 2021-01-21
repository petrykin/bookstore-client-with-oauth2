import React, { useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

type PrivateRouteProps = RouteProps & {
  component: React.FC;
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const {userState: { signedin } } = useContext(UserContext);

  return (
    <Route {...rest} render={(props) => (
      signedin
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  );
};
