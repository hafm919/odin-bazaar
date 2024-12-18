import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
function Navbar({ toggleSidebar }) {
  return (
    <div>
      <div className="flex">
        <div className="flex place-content-between items-center w-full p-3  ">
          <i
            className="fa-solid fa-bars text-2xl cursor-pointer"
            onClick={() => toggleSidebar()}
          ></i>
          <Link to="/">
            <h1 className="font-serif text-5xl">Bazaar</h1>
          </Link>

          <i className="fa fa-cart-shopping text-3xl cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
