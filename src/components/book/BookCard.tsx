import React, { FC } from 'react';

import { IBook } from '../../type';

import './BookCard.css';

type BookCardProps = {
  book: IBook
};

export const BookCard: FC<BookCardProps> = ({ book }) => {
  return (
    <div className='card'>
      <div className='card-content'>
        <h3>{ book.title }</h3>
        <div className='subtitle'>
          { book.author }
        </div>
        <h4>
          ISBN: { book.isbn }
        </h4>
        <div className='display-flex'>
          <div className='content-img-desc'>
            <img src={ book.coverUrl } alt=''/>
          </div>
          <div className='content-img-desc'>
            <h2>${ book.price }</h2>
            <p>
              { book.description }
            </p>
          </div>
        </div>
        <div className='card-details'>
          <div className='card-details-inner'>
            <div className='read-more'>
              <a className='button' href='#'><i className='fa fa-shopping-cart' /> Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};