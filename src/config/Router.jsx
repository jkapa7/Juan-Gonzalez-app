import Home from "../view/Home";
import { createBrowserRouter } from "react-router-dom";
import Error404 from "../components/Error404";

export const Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error404 />,
    element: <Home />,
  },
]);

export default Router;
