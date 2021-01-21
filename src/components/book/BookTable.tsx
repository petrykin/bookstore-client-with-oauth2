import React, { FC, useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Button, Icon, Image, Segment, Table } from 'semantic-ui-react';
import { IBookContext, IBookAdminViewProps } from '../../type';

export const BookTable: FC<IBookAdminViewProps> = ({ selectedId, setSelectedId, inEdit, setInEdit }) => {

  const { bookState: { books } } = useContext<IBookContext>(BookContext);

  const rows: JSX.Element[] = books && books.map(book => (
    <Table.Row
      key={ book.id }
      onClick={ () => setSelectedId(book.id) }
      active={ book.id === selectedId }
    >
      <Table.Cell>{ book.title }</Table.Cell>
      <Table.Cell textAlign='center'>{ book.currency === 'USD' ? '$' : '' }{ book.price }</Table.Cell>
      <Table.Cell className='align-content-center'><Image src={ book.coverUrl } size='tiny'/></Table.Cell>
      <Table.Cell textAlign='center'>{ book.quantity }</Table.Cell>
      <Table.Cell textAlign='center'>
        <Button
          active={ inEdit && selectedId === book.id }
          disabled={ selectedId !== book.id }
          onClick={ () => setInEdit(!inEdit) }
          icon
          toggle
        ><Icon name='edit' />
        </Button>
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <Segment basic>
      <Table celled striped selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign='left'>Title</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Price</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Cover</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Quantity</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Edit</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{ rows }</Table.Body>
      </Table>
    </Segment>
  );
};
