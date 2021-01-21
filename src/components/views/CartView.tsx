import React, {FC, useContext} from 'react';
import {IBookContext} from '../../type';
import {BookContext} from '../../context/BookContext';
import {CartItem} from '../cart/CartItem';
import {Button, CardGroup} from 'semantic-ui-react';

export const CartView: FC = () => {
  const { bookState: { books } } = useContext<IBookContext>(BookContext);

  const renderCartItems = (): React.ReactNode | React.ReactNodeArray => {
    return books && books.map(book => <CartItem key={ book.isbn } book={ book } />);
  };

  return (
    <section className='page'>
      <h1>User Cart</h1>
      <div className='cart-item'>
        <CardGroup>
          { renderCartItems() }
        </CardGroup>
      </div>
      <div style={{padding: '20px 15px 0 0', textAlign: 'end'}}>
        <Button primary onClick={() => {}}>Checkout</Button>
      </div>
    </section>
  );
};