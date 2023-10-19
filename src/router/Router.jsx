import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/addProduct/AddProduct";
import MyCart from "../pages/myCart/MyCart";
import FoodMenuPage from "../pages/foodMenuPage/FoodMenuPage";
import UpdateProduct from "../pages/updateProduct/UpdateProduct";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/:path",
        element: <FoodMenuPage></FoodMenuPage>,
        loader: () => fetch("foodMenu.json"),
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
    ],
  },
]);

export default Router;
