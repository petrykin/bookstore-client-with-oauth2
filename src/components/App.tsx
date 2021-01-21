import React, {FC, useContext} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Layout } from './layout/Layout';
import { AdminBooksView } from './views/AdminBooksView';
import { CartView } from './views/CartView';
import { UserBooksView } from './views/UserBooksView';
import { BookProvider } from '../context/BookContext';
import { PrivateRoute } from './PrivateRoute';
import { LoginMock } from './mock/LoginMock';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react/lib-esm/components';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { UserContext } from '../context/UserContext';
import { AdminRoute } from './AdminRoute';
import { AmplifySignUp } from '@aws-amplify/ui-react/lib-esm/components';

export const App: FC = () => {
  const {
    userState: { user, authState },
    userActions: { setAuthState, setUser }
  } = useContext(UserContext);

  React.useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <BookProvider>
      <Layout>
        <Switch>
          <AdminRoute exact path = '/books/manage' component = { AdminBooksView } />
          <PrivateRoute exact path = '/cart' component = { CartView } />
          <Route exact path = '/books' component = { UserBooksView } />
          <Route exact path = '/login' component = { LoginMock } />
          <Redirect exact to = '/books' />
        </Switch>
      </Layout>
    </BookProvider>
  ) : (
    <AmplifyAuthenticator>
      <AmplifySignUp
        slot='sign-up'
        usernameAlias='username'
        formFields={[
          {
            type: 'username',
            label: 'Username',
            placeholder: 'Enter your username',
            required: true
          },
          {
            type: 'name',
            label: 'Full Name',
            placeholder: 'Enter your full name',
            required: true
          },
          {
            type: 'email',
            label: 'Email',
            placeholder: 'Enter your email',
            required: true
          },
          {
            type: 'password',
            label: 'Password',
            placeholder: 'Enter your password',
            required: true
          },
          {
            type: 'phone_number',
            label: 'Phone number',
            placeholder: 'Enter your phone number',
            required: false
          }
        ]}
      />
    </AmplifyAuthenticator>
  );
  // return (
  //   <AmplifyAuthenticator>
  //     <BookProvider>
  //       <Layout>
  //         <Switch>
  //           <PrivateRoute exact path = '/books/manage' component = { AdminBooksView } />
  //           <PrivateRoute exact path = '/cart' component = { CartView } />
  //           <Route exact path = '/books' component = { UserBooksView } />
  //           <Route exact path = '/login' component = { LoginMock } />
  //           <Redirect exact to = '/books' />
  //         </Switch>
  //       </Layout>
  //     </BookProvider>
  //   </AmplifyAuthenticator>
  //   );
};