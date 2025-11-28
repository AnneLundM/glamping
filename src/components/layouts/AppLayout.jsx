import { ToastContainer } from "react-toastify";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import { Outlet, ScrollRestoration } from "react-router-dom";

// Hele projektet: #root --> .app --> main --> Outlet
// <Outlet/> renderer alle vores Route-elementer (der er defineret i Routes-komponenten)
// <ScrollRestoration/> sørger for at visning af siderne starter øverst ved navigation.
const AppLayout = () => {
  return (
    <div className='app'>
      <Navigation />
      <main>
        <Outlet />
        <ScrollRestoration />
        <ToastContainer
          position='bottom-center' //  ændr placering
          autoClose={3000} // forsvind efter 3 sekunder
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme='light'
        />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
