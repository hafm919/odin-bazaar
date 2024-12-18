function Sidebar({ showSidebar, toggleSidebar }) {
  return (
    <div
      className={`top-0 left-0 w-full md:w-[25vw] bg-white p-10  text-white fixed min-h-full z-40 ease-in-out duration-300 ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-end text-black">
        <button className="" onClick={() => toggleSidebar()}>
          x
        </button>
      </div>
      <h3 className="mt-20 text-4xl font-semibold text-black">
        I am a sidebar
      </h3>
    </div>
  );
}

export default Sidebar;
