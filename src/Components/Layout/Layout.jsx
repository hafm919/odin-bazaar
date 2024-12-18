import { CartContextProvider } from "../../Context/CartContext";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
function Layout() {
  const [showSidebar, setShowSidebar] = useState(false);
  function toggleSidebar() {
    setShowSidebar(!showSidebar);
    console.log(showSidebar);
  }
  return (
    <CartContextProvider>
      <Sidebar
        showSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
      ></Sidebar>
      <Navbar toggleSidebar={toggleSidebar}></Navbar>
      <Outlet />
    </CartContextProvider>
  );
}
export default Layout;
