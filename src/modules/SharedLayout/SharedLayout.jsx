import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

import css from './shared-layout.module.css';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main className={css.wrapper}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
