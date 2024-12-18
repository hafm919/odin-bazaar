import ProductCard from "../ProductCard";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

function Products() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  const { category } = useParams();
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const productData = await response.json();
      console.log(productData);
      setProductList(productData);
      setLoading(false);
    }
    fetchProducts();
  }, [category]);

  return (
    <div className="flex flex-col h-full">
      <div className="p-10 flex-1">
        <h1 className="font-serif text-3xl">{categoryTitle}</h1>
        <hr className="w-full border-black"></hr>
        {(loading && (
          <div className="h-full flex place-content-center justify-center">
            <i className="fa fa-circle-o-notch fa-spin text-6xl place-content-center"></i>
          </div>
        )) || (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-3 h-min">
            {productList.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                price={product.price}
                image={product.image}
                title={product.title}
              ></ProductCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Products;
