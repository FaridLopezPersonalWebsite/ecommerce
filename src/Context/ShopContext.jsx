import React, { createContext, useState, useEffect } from "react";
import { getAllProducts } from "../Components/API";

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 100; index++) {
    cart[index] = 0;
  }
  return cart;
};

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [all_product, setAllProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllProducts();
        setAllProduct(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    }

    fetchData();
  }, []);

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
    setCartItems(getDefaultCart()); 
    console.log('User logged out');
  };

  const addToCart = (productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }));
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: Math.max((prev[productId] || 0) - 1, 0) }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const productId in cartItems) {
      if (cartItems[productId] > 0) {
        const itemInfo = all_product.find((product) => product.id === Number(productId));
        if (itemInfo) {
          totalAmount += cartItems[productId] * itemInfo.price;
        }
      }
    }

    return totalAmount.toFixed(2);
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    login,
    logout,
    loggedIn,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;









