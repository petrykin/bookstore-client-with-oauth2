import React, { useContext } from 'react';

import { BookContext } from '../../context/BookContext';

import { BookCard } from '../book/BookCard';
import { IBookContext } from '../../type';

export const UserBooksView: React.FC = () => {
  const { bookState: { books } } = useContext<IBookContext>(BookContext);

  const renderBooks = (): React.ReactNode | React.ReactNodeArray => {
    return books && books.map(book => <BookCard key={ book.isbn } book={ book } />);
  };

  return (
    <section className='page'>
      <h1>User Books</h1>
      <div className='wrapper display-flex'>
        { renderBooks() }
      </div>
    </section>
  );
};
