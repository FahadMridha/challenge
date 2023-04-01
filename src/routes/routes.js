import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AdminOrderList from "../component/dashboard/orderList/OrderList";
import Home from "../component/home/Home";
import Login from "../component/authentication/Login";
import Register from "../component/authentication/Register";
import Products from "../component/products/Products";
import Productdetails from "../component/products/ProductDetails";
import PrivateRoutes from "./PrivateRoutes";
import Booking from "../component/products/booking/Booking";
import OrderList from "../component/products/orderList/OrderList";
import Dashboard from "../component/dashboard/Dashboard";
import CustomerList from "../component/dashboard/customerList/CustomerList";
import ProductsList from "../component/dashboard/productList/ProductsList";
import AddProducts from "../component/dashboard/addProducts/AddProducts";
import ErrrorPage from "../component/shared/errorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(
            `https://e-commerce-server-three.vercel.app/details/${params.id}`
          ),
        element: <Productdetails />,
      },
      {
        path: "/addToBooking/:id",
        loader: ({ params }) =>
          fetch(
            `https://e-commerce-server-three.vercel.app/addToBooking/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <Booking />
          </PrivateRoutes>
        ),
      },
      {
        path: "/orderList",
        element: <OrderList />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/customerList",
        element: <CustomerList />,
      },
      {
        path: "/dashboard/productList",
        element: <ProductsList />,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProducts />,
      },
      {
        path: "/dashboard/adminAllOrder",
        element: <AdminOrderList />,
      },
    ],
  },
]);
