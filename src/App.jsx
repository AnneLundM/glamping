import { useRoutes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Stays from "./pages/Stays";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";

// Parent/forældre komponent - Den 'hoved'-komponent der styrer visninger af andre komponenter
function App() {
  /* Hook fra React der gør det muligt at navigere imellem siderne. Ruterne (path) bestemmer, 
  hvilke komponenter der skal vises baseret på URL-stien */
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/stays", element: <Stays /> },
  ]);

  return (
    <>
      <Navigation />
      {routes}
      <Footer />
    </>
  );
}

export default App;
