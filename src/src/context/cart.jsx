import { createContext, useContext, useState } from "react";

const cartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState({});

  return (
    <cartContext.Provider value={{ cartData, setCartData }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;

export const useCartdata = () => {
  return useContext(cartContext);
};
