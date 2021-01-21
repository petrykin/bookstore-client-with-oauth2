import React, {Dispatch} from 'react';
import {AuthState} from '@aws-amplify/ui-components';

interface IBook {
  id?: number;
  title: string;
  isbn: string;
  description: string;
  price: number;
  currency: string;
  coverUrl: string;
  quantity: number;
  author: string;
  visible: boolean;
}

interface IBookState {
  isLoading: boolean;
  books: IBook[];
}

interface IBookActions {
  addBook: (arg: IBook) => void;
  editBook: (arg: IBook) => void;
}

interface IBookContext {
  bookState: IBookState;
  bookActions: IBookActions;
}

interface IBookAdminViewProps {
  selectedId: number | null | undefined;
  setSelectedId: Dispatch<React.SetStateAction<number | null | undefined>>;
  inEdit: boolean;
  setInEdit: Dispatch<React.SetStateAction<boolean>>;
}

type LayoutProps = {
  children: React.ReactNode;
};

interface IUser {}

interface IUserState {
  user: object | undefined | null;
  authState: AuthState | undefined;
  signedin: boolean;
  isAdmin: boolean;
}

interface IUserActions {
  logout: (arg: React.MouseEvent) => void;
  setUser: any;
  setAuthState: any;
}

interface IUserContext {
  userState: IUserState;
  userActions: IUserActions;
}