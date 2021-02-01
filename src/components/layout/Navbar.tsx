import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { UserContext } from '../../context/UserContext';
import { IUserContext } from '../../type';

export const Navbar: FC = () => {
  const { userState: { user, signedin, isAdmin }, userActions: { logout } } = useContext<IUserContext>(UserContext);
  // @ts-ignore
  const username = user?.signInUserSession.idToken.payload.email;

  return (
    <nav>
      <section>
        <div className='navbar-item'>
          <Link to='/'>Book Store</Link>
        </div>
        <div>
          <h4 style={{color: 'white'}}>{signedin && `Hello, ${ username }`}</h4>
        </div>
        <div style={{display: 'flex'}}>
          {
            signedin && isAdmin && <Link to='/books/manage'>
              <Icon name='edit outline' /> Manage Books
            </Link>
          }
          <Link to='/books'>
            <Icon name='book' /> Books
          </Link>
          {
            signedin && <Link to='/cart'>
              <Icon name='cart' /> Cart
            </Link>
          }
            <Link to='/' onClick={logout} className='navbar-item'>
              Sign Out
            </Link>
        </div>
      </section>
    </nav>
  );
};
