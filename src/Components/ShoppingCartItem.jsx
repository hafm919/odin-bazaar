import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import PropTypes from "prop-types";
function ShoppingCartItem({ title, quantity, img, price, id }) {
  const { incrementQuantity, decrementQuantity, getQuantity } =
    useContext(CartContext);
  quantity = getQuantity(id);
  return (
    <>
      <div className="flex p-10 items-center place-content-center md:place-content-between flex-wrap">
        <img src={img} className="max-w-20"></img>
        <h1 className="font-sans text-3xl text-center  ">
          {title.length > 40 ? `${title.substring(0, 40)}...` : title}
        </h1>
        <div className="flex gap-4 place-content-center">
          <button
            className="text-2xl font-thin"
            onClick={() => {
              decrementQuantity(id);
            }}
          >
            -
          </button>
          <input
            className="border-b-2 text-center font-light"
            size={1}
            value={quantity}
          ></input>
          <button
            className="text-2xl font-thin"
            onClick={() => {
              incrementQuantity(id);
            }}
          >
            +
          </button>
        </div>
        <h2 className="font-sans text">{price * quantity}</h2>
      </div>
      <hr className="border-black"></hr>
    </>
  );
}
ShoppingCartItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};
export default ShoppingCartItem;
