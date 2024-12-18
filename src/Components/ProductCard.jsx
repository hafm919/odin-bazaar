import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useState } from "react";
import PropTypes from "prop-types";
function ProductCard({ id, title, image, price }) {
  const { addToCart, getQuantity } = useContext(CartContext);
  const [quantity, setQuantity] = useState(getQuantity(id));

  const product = { id, title, image, price };

  function incrementQuantity() {
    setQuantity(quantity + 1);
  }
  function decrementQuantity() {
    if (quantity) {
      setQuantity(quantity - 1);
    }
  }

  function handleAddToCart() {
    if (quantity) {
      const item = { ...product, quantity };
      addToCart(item);
    }
  }

  return (
    <div className=" max-h-full shadow-md flex flex-col place-content-around items-center">
      <img src={image} className="size-1/2"></img>
      <div className="flex flex-col place-items-center p-4">
        <h1 className="font-sans max-w-full text-3xl text-center  ">
          {title.length > 40 ? `${title.substring(0, 40)}...` : title}
        </h1>
        <h2 className="font-sans text-2xl font-light">${price}</h2>
        <div className="flex gap-4">
          <button className="text-2xl font-thin" onClick={decrementQuantity}>
            -
          </button>
          <input
            className="border-b-2 text-center font-light"
            size={1}
            value={quantity}
          ></input>
          <button className="text-2xl font-thin" onClick={incrementQuantity}>
            +
          </button>
          <button
            className="border px-2 border-black"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};
export default ProductCard;
