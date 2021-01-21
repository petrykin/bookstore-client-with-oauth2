import React, { createContext, FC, useState } from 'react';
import { AuthState } from '@aws-amplify/ui-components';
import { Auth } from 'aws-amplify';
import { IUserContext } from '../type';

export const UserContext = createContext<IUserContext>({
  userState: {
    user: null,
    authState: undefined,
    signedin: false,
    isAdmin: false
  },
  userActions: {
    logout: (_arg: React.MouseEvent) => {},
    setUser: () => {},
    setAuthState: () => {}
  }
});

export const UserProvider: FC = ({ children }) => {

  const [authState, setAuthState] = useState<AuthState>();
  const [user, setUser] = useState<object | undefined | null>();

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    await Auth.signOut();
  };

  const signedin = authState === 'signedin';

  const isAdminRole = (role: string) => role === 'bookstore_admin';

  // @ts-ignore
  const isAdmin = user?.signInUserSession.idToken.payload['cognito:groups'].findIndex(isAdminRole) !== -1;

  return (
    <UserContext.Provider value={{
      userState: {
        user,
        authState,
        signedin,
        isAdmin
      },
      userActions: {
        logout: handleLogout,
        setUser,
        setAuthState
      }
    }}>
      { children }
    </UserContext.Provider>
  );
};