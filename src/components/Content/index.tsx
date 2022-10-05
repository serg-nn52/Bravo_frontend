import { Button } from 'antd';
import Preloader from 'components/Preloader';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import React, { useState } from 'react';
import { getIsLoading } from 'store/constructors/selectors';
import { getUserEmail } from 'store/users/selectors';
import { logoutUser } from 'store/users/slice';
import OrdersForm from './OrdersForm';
import OrdersList from './OrdersList';
import style from './style.module.scss';

const Content: React.FC = () => {
  const [orders, setOrders] = useState('add');
  const dispatch = useAppDispatch();
  const email = useAppSelector(getUserEmail);
  const isLoading = useAppSelector(getIsLoading);

  return isLoading ? (
    <Preloader />
  ) : (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.buttons}>
            <div className={style.leftButtons}>
              <Button type="primary" onClick={() => setOrders('add')}>
                Оставить заявку
              </Button>
              <Button type="primary" onClick={() => setOrders('search')}>
                Заявки
              </Button>
            </div>
            <Button
              type="primary"
              onClick={() => dispatch(logoutUser())}
            >{`Выйти из ${email}`}</Button>
          </div>
        </div>
        {orders === 'add' && <OrdersForm />}
        {orders === 'search' && <OrdersList />}
      </div>
    </div>
  );
};

export default Content;
