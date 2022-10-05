import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import Content from 'components/Content';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBooks } from 'store/books/thunk';
import { getConstructors } from 'store/constructors/thunk';
import { getIsToken } from 'store/users/selectors';
import style from './style.module.scss';

const Main: React.FC = () => {
  const navigate = useNavigate();
  const isAuth = useAppSelector(getIsToken);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!isAuth) {
      navigate('/register');
    }
  }, [isAuth, navigate]);

  useEffect(() => {
    dispatch(getConstructors());
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className={style.wrapper}>
      <Header />
      <ErrorBoundary>
        <Content />
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default Main;
