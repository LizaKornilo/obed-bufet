import Head from 'next/head'
import Footer from '../components/Footer/Footer';
import HeaderHome from '../components/Header-home/HeaderHome';
import Header from '../components/Header/Header';
import '../styles/globals.css';
import 'styles/auth-cange.css';
import { wrapper } from 'store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkIsItAdminActionCreator } from 'store/action-creators/user-actions-creator';

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  useEffect(() => {
    // const isItAdmin = true;
    dispatch(checkIsItAdminActionCreator(localStorage.getItem('token')));
  })

  return (
    <>
      <Head>
        <title>Бистро &quot;Обед-буфет&quot;</title>
        <meta name="description" content="Сайт бистро Обед-буфет" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        (Component.name === "LoginPage" || Component.name === "ChangePasswordPage")
          ? null
          : (Component.name === "Home") ? <HeaderHome /> : <Header />
      }
      <Component {...pageProps} />
      {
        (Component.name === "LoginPage" || Component.name === "ChangePasswordPage")
          ? null
          : <Footer />
      }

    </>
  );
}

export default wrapper.withRedux(MyApp);
