import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

// import css from './shared-layout.module.css';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
