import Navbar from "../Navbar";
import ProductCard from "../ProductCard";
import Sidebar from "../Sidebar";
import { useState, useEffect } from "react";

function Products() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  function toggleSidebar() {
    setShowSidebar(!showSidebar);
    console.log(showSidebar);
  }

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/men's clothing"
      );
      const productData = await response.json();
      console.log(productData);
      setProductList(productData);
      setLoading(false);
    }
    fetchProducts();
  }, []);
  if (loading) {
    return (
      <>
        <Sidebar
          showSidebar={showSidebar}
          toggleSidebar={toggleSidebar}
        ></Sidebar>
        <div className="flex flex-col h-full">
          <Navbar toggleSidebar={toggleSidebar}></Navbar>
          <div className="p-10 flex-1">
            <h1 className="font-serif text-3xl">Men&apos;s Fashion</h1>
            <hr className="w-full border-black"></hr>
            <div className="h-full flex place-content-center justify-center">
              <i className="fa fa-circle-o-notch fa-spin text-6xl place-content-center"></i>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Sidebar
        showSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
      ></Sidebar>
      <div>
        <Navbar toggleSidebar={toggleSidebar}></Navbar>
        <div className="p-10">
          <h1 className="font-serif text-3xl">Men&apos;s Fashion</h1>
          <hr className="w-full border-black"></hr>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-3 h-min">
            {productList.map((product) => (
              <ProductCard
                key={product.id}
                price={product.price}
                image={product.image}
                title={product.title}
              ></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Products;
