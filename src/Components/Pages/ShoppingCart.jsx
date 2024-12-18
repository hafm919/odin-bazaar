import ShoppingCartList from "../ShoppingCartList";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
function ShoppingCart() {
  const { cartItems } = useContext(CartContext);
  const cartArray = Array.from(cartItems.values());
  function calculateTotalPrice(cartArray) {
    return cartArray.reduce((total, item) => {
      return total + item.item.price * (item.item.quantity || 1); // Defaults quantity to 1 if not provided
    }, 0);
  }

  const cartTotal = calculateTotalPrice(cartArray);
  console.log(cartTotal);
  return (
    <div className=" h-full flex flex-col">
      <div className="p-10 flex-1">
        <h1 className="font-serif text-3xl">Shopping Cart</h1>
        <hr className="w-full border-black"></hr>
        <ShoppingCartList></ShoppingCartList>
        <div className="flex place-content-end items-center gap-3 flex-wrap">
          <h2 className="text-black text-2xl font-sans">
            Total:<b>${cartTotal}</b>
          </h2>
          <button className="rounded-sm text-white bg-accent-green px-10 py-2 font-sans mt-2 ">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
export default ShoppingCart;
