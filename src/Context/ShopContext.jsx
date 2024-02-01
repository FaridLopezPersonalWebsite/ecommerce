// ShopContext.js
import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

// Function to create a default cart with all product IDs initialized to 0
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

// Create a context to hold the state and functions related to shopping
export const ShopContext = createContext(null);

// Component to provide the context to the component tree
const ShopContextProvider = (props) => {
  // State to manage the user login status
  const [loggedIn, setLoggedIn] = useState(false);

  // State to manage the cart items
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Function to log in the user
  const login = () => {
    setLoggedIn(true);
    // Additional logic for user login if needed
  };

  // Function to log out the user
  const logout = () => {
    setLoggedIn(false);
    console.log('User logged out');
  };

  // Function to add an item to the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // Function to calculate the total amount of items in the cart
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.new_price;
      }
    }
    return totalAmount;
  };

  // Function to calculate the total number of items in the cart
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  // Context value containing state and functions
  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    login,
    logout,
    loggedIn, // Added the loggedIn state
  };

  // Provide the context value to the component tree
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

