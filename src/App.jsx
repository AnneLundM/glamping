import { useRoutes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Stays from "./pages/Stays";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import Activities from "./pages/Activities";
import MyList from "./pages/MyList";

// Parent/forældre komponent - Den 'hoved'-komponent der styrer visninger af andre komponenter
function App() {
  /* Vha react-router definerer vi hvilke komponenter der hører til hvilke paths */
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/stays", element: <Stays /> },
    { path: "/contact", element: <Contact /> },
    { path: "/activities", element: <Activities /> },
    { path: "/mylist", element: <MyList /> },
  ]);

  return (
    <div className='app'>
      <Navigation />
      <main>{routes}</main>
      <Footer />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
