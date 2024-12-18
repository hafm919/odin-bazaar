import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Components/Pages/Homepage.jsx";
import Products from "./Components/Pages/Products.jsx";
import ShoppingCart from "./Components/Pages/ShoppingCart.jsx";
import Layout from "./Components/Layout/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "products/:category", element: <Products /> },
      { path: "shoppingcart", element: <ShoppingCart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
