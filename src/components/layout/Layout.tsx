import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './Navbar';
import { LayoutProps } from '../../type';

export const Layout: FC<LayoutProps> = ({ children }) => (
    <Router>
      <Navbar />
      { children }
    </Router>
);