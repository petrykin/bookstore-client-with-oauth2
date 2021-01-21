import React, {FC} from 'react';
import '../book/BookCard.css';
import {IBook} from '../../type';
import {Button, Card, CardContent, CardDescription, CardHeader, Image, Label} from 'semantic-ui-react';

type BookCardProps = {
  book: IBook
};

export const CartItem: FC<BookCardProps> = ({ book }) => {
  return (
    <Card>
      <CardContent>
        <Image src={ book.coverUrl } alt='' size='tiny' floated='left' spaced='left'/>
        <CardContent>
          <div className='display-flex' style={{padding: '0 0 10px 0'}}>
            <div style={{display: 'flex'}}>
              <div style={{padding: '0 10px 0 0'}}>
                <CardHeader><h2>Book Title</h2></CardHeader>
              </div>
              <Label color='green' size='large'>$200</Label>
              <Label color='blue' size='large'>{1} in the cart</Label>
            </div>
            <Button compact icon='remove' circular color='red' />
          </div>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque. Vel orci porta non pulvinar.
          </CardDescription>
        </CardContent>
      </CardContent>
    </Card>
  );
};
