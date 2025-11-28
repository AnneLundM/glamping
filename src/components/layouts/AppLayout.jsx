import { ToastContainer } from "react-toastify";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import { Outlet, ScrollRestoration } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className='app'>
      <Navigation />
      <main>
        <Outlet />
        <ScrollRestoration />
        <ToastContainer autoClose={3000} />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
