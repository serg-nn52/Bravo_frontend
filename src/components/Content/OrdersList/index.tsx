import { Table } from 'antd';
import { useAppSelector } from 'hooks/useAppSelector';

import React from 'react';
import { getAllBooks } from 'store/books/selectors';
import style from './style.module.scss';

type TFilterBook = {
  title: string;
  quantity: number;
  key: string;
};

const OrdersList: React.FC = () => {
  const allBooks = useAppSelector(getAllBooks);

  const books: TFilterBook[] = [];
  for (let i = 0; i < allBooks.length; i += 1) {
    if (
      !books
        .map((el) => el.title.toUpperCase())
        .includes(allBooks[i].title.toUpperCase())
    ) {
      books.push({
        title: allBooks[i].title,
        quantity: allBooks.filter((book) => book.title === allBooks[i].title)
          .length,
        key: allBooks[i].title,
      });
    }
  }
  books.sort((a, b) => b.quantity - a.quantity);

  const columns = [
    {
      title: 'Название книги',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Количество',
      dataIndex: 'quantity',
      key: 'quantity',
    },
  ];

  return (
    <div className={style.wrapper}>
      <h2>Заявки</h2>
      {!books.length ? (
        <h2>Актуальных заявок нет!</h2>
      ) : (
        <Table
          className={style.list}
          pagination={false}
          dataSource={books}
          columns={columns}
        />
      )}
    </div>
  );
};

export default OrdersList;
