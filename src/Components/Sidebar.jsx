import { Link } from "react-router-dom";
function Sidebar({ showSidebar, toggleSidebar }) {
  return (
    <div
      className={`top-0 left-0 w-full md:w-[25vw] bg-white p-5  text-white fixed min-h-full z-40 ease-in-out duration-300 ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-end text-black">
        <button className="" onClick={() => toggleSidebar()}>
          x
        </button>
      </div>
      <div className="">
        <h3 className="text-4xl font-semibold text-black font-serif">
          Categories
        </h3>
        <hr className="w-full border-black"></hr>
      </div>
      <div className="flex flex-col gap-3">
        <Link to="/products/jewelery">
          <div className="flex place-content-between" onClick={toggleSidebar}>
            <h3 className="font-serif text-black text-3xl">Jewelery</h3>
            <h3 className="font-serif text-black text-3xl">&gt;</h3>
          </div>
        </Link>
        <Link to="/products/men's clothing ">
          <div className="flex place-content-between" onClick={toggleSidebar}>
            <h3 className="font-serif text-black text-3xl">
              Men&apos;s Clothing
            </h3>
            <h3 className="font-serif text-black text-3xl">&gt;</h3>
          </div>
        </Link>
        <Link to="/products/women's clothing">
          <div className="flex place-content-between" onClick={toggleSidebar}>
            <h3 className="font-serif text-black text-3xl">
              Wome&apos;s Clothing
            </h3>
            <h3 className="font-serif text-black text-3xl">&gt;</h3>
          </div>
        </Link>
        <Link to="/products/electronics">
          <div className="flex place-content-between" onClick={toggleSidebar}>
            <h3 className="font-serif text-black text-3xl">Electronics</h3>
            <h3 className="font-serif text-black text-3xl">&gt;</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
