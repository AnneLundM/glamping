import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Stays from "./pages/Stays";
import StayDetails from "./pages/StayDetails";
import {
  activitiesLoader,
  reviewsLoader,
  stayDetailsLoader,
  staysLoader,
} from "./loaders/DataLoaders";
import ErrorElement from "./components/feedbackElements/ErrorElement";
import Contact from "./pages/Contact";
import MyList from "./pages/MyList";
import NotFound from "./pages/404";
import Loading from "./components/loading/Loading";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />} hydrateFallbackElement={<Loading />}>
      <Route
        index
        element={<Home />}
        loader={reviewsLoader}
        errorElement={<ErrorElement />}
      />
      <Route
        path='activities'
        element={<Activities />}
        loader={activitiesLoader}
        errorElement={<ErrorElement />}
      />
      <Route
        path='stays'
        element={<Stays />}
        loader={staysLoader}
        errorElement={<ErrorElement />}
      />
      <Route
        path='stay/:id'
        element={<StayDetails />}
        loader={stayDetailsLoader}
      />
      <Route path='contact' element={<Contact />} />
      <Route path='mylist' element={<MyList />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

export default routes;
