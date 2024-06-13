import { Navigate, createBrowserRouter } from "react-router-dom";
import Photography from "./Pages/PhotographyAndVideography/PhotographyPage.js";
import App from "./App";
import Decoration from "./Pages/DecorationPage/Decoration";
import Home from "./Pages/HomePage/HomePage.js";
import Catering from "./Pages/CateringPage/CateringPage";
import Place from "./Pages/PlacePage/PlacePage";
import Login from "./Pages/Auth/Login.js";
import Signup from "./Pages/Auth/Signup";
import Basket from "./Pages/BasketPage/BasketPage";
import WorkshopPage from "./Pages/WorkshopPage/WorkshopPage.js";
import ConcertPage from "./Pages/ConcertPage/ConcertPage.js";
import Managepage from "./Pages/admin/Manage.js";
import Addpage from "./Pages/admin/Add.js";
import Updatepage from "./Pages/admin/update.js";
import AdminLogin from "./Pages/admin/Auth/AdminLogin.js";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/photography",
        element: <Photography />,
      },
      {
        path: "/decoration",
        element: <Decoration />,
      },
      {
        path: "/catering",
        element: <Catering />,
      },
      {
        path: "/place",
        element: <Place />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/workshop",
        element: <WorkshopPage />,
      },
      {
        path: "/concert",
        element: <ConcertPage />,
      },
      {
        path: "/admin/login",
        element: <AdminLogin />,
      },
      {
        path: "/admin/manage",
        element: <Managepage />,
      },
      {
        path: "/admin/add",
        element: <Addpage />,
      },
      {
        path: "/admin/items/:id/update",
        element: <Updatepage />,
      },
      {
        path: "*",
        element: <Navigate to={"/"} />,
      },
    ],
  },
]);
