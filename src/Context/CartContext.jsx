import { createContext } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
const CartContext = createContext({ cartItems: [], addToCart: () => {} });

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(new Map());

  function addToCart(item) {
    console.log(item);
    setCartItems((prev) => {
      const updatedCart = new Map(prev);
      updatedCart.set(item.id, { item });
      return updatedCart;
    });
    console.log(cartItems);
  }

  function incrementQuantity(id) {
    console.log(id);
    setCartItems((prev) => {
      const updatedCart = new Map(prev);
      if (updatedCart.has(id)) {
        const existingItem = updatedCart.get(id).item;
        updatedCart.set(id, {
          item: {
            ...existingItem,
            quantity: (existingItem.quantity || 1) + 1,
          },
        });
      }
      return updatedCart; // If the item doesn't exist, do nothing
    });
  }

  function getQuantity(id) {
    if (cartItems.has(id)) {
      return cartItems.get(id).item.quantity;
    }
    return 0;
  }

  function decrementQuantity(id) {
    console.log(id);
    setCartItems((prev) => {
      const updatedCart = new Map(prev);
      if (updatedCart.has(id)) {
        const existingItem = updatedCart.get(id).item;

        // If the quantity is greater than 1, decrement it
        if (existingItem.quantity > 1) {
          updatedCart.set(id, {
            item: {
              ...existingItem,
              quantity: existingItem.quantity - 1,
            },
          });
        } else {
          // If the quantity is 1 or less, remove the item from the cart
          updatedCart.delete(id);
        }
      }
      return updatedCart;
    });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        incrementQuantity,
        getQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
CartContextProvider.propTypes = {
  children: PropTypes.node,
};

export { CartContextProvider, CartContext };
