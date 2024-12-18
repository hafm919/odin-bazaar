import Navbar from "../Navbar";
import "../../styles/Homepage.css";
import Sidebar from "../Sidebar";
import { useState } from "react";
import { Link } from "react-router-dom";
function Homepage() {
  const [showSidebar, setShowSidebar] = useState(false);
  function toggleSidebar() {
    setShowSidebar(!showSidebar);
    console.log(showSidebar);
  }
  return (
    <>
      <Sidebar
        showSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
      ></Sidebar>
      <div className=" h-full flex flex-col">
        <Navbar toggleSidebar={toggleSidebar}></Navbar>
        <div className="hero flex flex-1 flex-wrap items-center p-12">
          <div className="w-full md:w-1/2">
            <h1 className=" font-serif text-6xl text-white font-bold ">
              Premium Eco-Friendly Products
            </h1>
            <Link to="products">
              <button className=" rounded-sm text-white bg-accent-green px-10 py-2 font-sans mt-2 ">
                Shop Now
              </button>
            </Link>
          </div>
          <img
            src="src/assets/hero-img.png"
            alt=""
            className="w-full md:w-1/2"
          />
        </div>
      </div>
    </>
  );
}
export default Homepage;
