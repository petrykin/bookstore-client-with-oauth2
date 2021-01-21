import React, { createContext, FC, useEffect, useState } from 'react';
import { loadData } from '../service/service';
import { IBook, IBookContext } from '../type';

export const BookContext = createContext<IBookContext>({
  bookState: {
    isLoading: false,
    books: []
  },
  bookActions: {
    addBook: (_arg: IBook) => {},
    editBook: (_arg: IBook) => {}
  }
});

export const BookProvider: FC = ({ children }) => {

  const [isLoading, setLoading] = useState<boolean>(false);
  const [books, setBooks] = useState<IBook[]>([]);

  const fetchBooks = async () => {
    setLoading(true);
    loadData('http://localhost:3001/books')
      .then(books => {
        setBooks(books);
        setLoading(false);
      });
  };

  useEffect(() => {
    !books.length && fetchBooks();
  }, []);

  const handleAddBook = (book: IBook) => {
    setBooks(books.concat(book));
  };

  const handleEditBook = (book: IBook) => {
    let items = [...books];
    let index = items.findIndex(item => item.id !== book.id);
    items[index] = book;
    setBooks(items);
  };

  return (
    <BookContext.Provider value={{
      bookState: { books, isLoading },
      bookActions: {
        addBook: handleAddBook,
        editBook: handleEditBook
      }
    }}>
      { children }
    </BookContext.Provider>
  );
};
