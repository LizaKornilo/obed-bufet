import Head from 'next/head'
import '../styles/globals.css';
import 'styles/auth-cange.css';
import { wrapper } from 'store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkIsItAdminActionCreator } from 'store/action-creators/user-actions-creator';

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkIsItAdminActionCreator(localStorage.getItem('token')));
  })

  return (
    <>
      <Head>
        <title>Бистро &quot;Обед-буфет&quot;</title>
        <meta name="description" content="Сайт бистро Обед-буфет" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
