import React, { createContext, FC, useEffect, useState } from 'react';
import { loadData, saveData } from '../service/service';
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
    loadData('https://resourcebookstoreapi-env.eba-emdde8rm.us-east-1.elasticbeanstalk.com/books')
      .then(books => {
        setBooks(books);
        setLoading(false);
      });
  };

  useEffect(() => {
    !books.length && fetchBooks();
  }, []);

  const handleAddBook = async (book: IBook) => {
    saveData('https://resourcebookstoreapi-env.eba-emdde8rm.us-east-1.elasticbeanstalk.com/books', JSON.stringify(book), 'POST')
      .then(rBook => {
        setBooks(books.concat(rBook));
      });
  };

  const handleEditBook = (book: IBook) => {
    saveData(`https://resourcebookstoreapi-env.eba-emdde8rm.us-east-1.elasticbeanstalk.com/books/${book.id}`, JSON.stringify(book), 'PUT')
      .then(rBook => {
        let items = [...books];
        let index = items.findIndex(item => item.id === rBook.id);
        items[index] = rBook;
        setBooks(items);
      });
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
