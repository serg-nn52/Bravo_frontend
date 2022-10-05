import React from 'react';
import { Button, Form, Input, notification, Select } from 'antd';
import { useAppSelector } from 'hooks/useAppSelector';
import { getAllConstructors } from 'store/constructors/selectors';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { addBook } from 'store/books/thunk';
import { TBooks } from 'store/books/types';
import { getAllBooks } from 'store/books/selectors';
import style from './style.module.scss';

const OrdersForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { Option } = Select;
  const [form] = Form.useForm();
  const constructors = useAppSelector(getAllConstructors);
  const books = useAppSelector(getAllBooks);

  const sendBook = (book: TBooks) => {
    if (
      books.filter(
        (el) =>
          el.name === book.name &&
          el.title.toUpperCase().trim() === book.title.toUpperCase().trim(),
      ).length
    ) {
      notification.warning({ message: 'Вы заказывали такую книгу!' });
      return;
    }
    dispatch(addBook(book));
    form.resetFields();
  };

  return (
    <div className={style.wrapper}>
      <h2>Оставить заявку</h2>
      <Form
        form={form}
        name="orders"
        className={style.orders}
        onFinish={(book) => sendBook(book)}
        autoComplete="off"
        requiredMark={false}
      >
        <Form.Item
          className={style.item}
          label="Введите ФИО"
          name="name"
          rules={[{ required: true, message: 'Пожалуйста, выберите имя!' }]}
        >
          <Select className={style.select} placeholder="Выберите конструктора">
            {constructors.map((el) => {
              return (
                <Option key={el.id} value={el.name}>
                  {el.name}
                </Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          className={style.item}
          label="Введите название книги"
          name="title"
          rules={[{ required: true, message: 'Пожалуйста, введите название!' }]}
        >
          <Input placeholder="Введите название" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" className={style.button} htmlType="submit">
            Отправить заявку!
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default OrdersForm;
