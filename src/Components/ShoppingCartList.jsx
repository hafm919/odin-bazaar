import ShoppingCartItem from "./ShoppingCartItem";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
function ShoppingCartList() {
  const { cartItems } = useContext(CartContext);
  const cartArray = Array.from(cartItems.values());
  console.log(cartArray);
  return (
    <div className=" max-h-screen overflow-auto">
      {cartArray.map((idx) => (
        <ShoppingCartItem
          key={idx.item.id}
          img={idx.item.image}
          title={idx.item.title}
          price={idx.item.price}
          quantity={idx.item.quantity}
          id={idx.item.id}
        ></ShoppingCartItem>
      ))}
    </div>
  );
}

export default ShoppingCartList;
