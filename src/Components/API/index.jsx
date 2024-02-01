import React from "react";

async function getAllProducts(){
    try{
        const res = await fetch ("https://fakestoreapi.com/products");
        const json = await res.json();
        return json;
    } catch(err) {
        throw err;
    }
}


async function getProductById(id) {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );
  
      if (!res.ok) {
        throw new Error(`Failed to fetch product with ID ${id}`);
      }
  
      const json = await res.json();
      return json;
    } catch (err) {
      console.error("Error in getProductById:", err);
      throw err; 
    }
  }

  async function createAccount(accountData) {
    try {
      const res = await fetch(
        "https://fakestoreapi.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(accountData),
        }
      );
      const json = await res.json();
      return json.token;
    } catch (err) {
      throw err;
    }
  }

  async function getUser() {
    try {
      const res = await fetch ("https://fakestoreapi.com/users",
      {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();
      return json;
    } catch (err) {
      console.error(err)
    }

  }


  async function userLogin(userObj) {
    try {
      const res = await fetch(
        "https://fakestoreapi.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userObj),
        }
      );
      const json = await res.json();
      if (res.ok) {
        return { token: json.token, id: json.id };
      } else {
        throw new Error(`Login failed: ${json.message}`);
      }
    } catch (err) {
      throw err;
    }
  }

  async function getCartByUserId(id) {

    try {
        const res = await fetch(
          `https://fakestoreapi.com/carts/user/${id}`
        );
    
        if (!res.ok) {
          throw new Error(`Failed to fetch cart with ID ${id}`);
        }
    
        const json = await res.json();
        console.log(json);
        return json;
      } catch (err) {
        console.error("Error in getCartById:", err);
        throw err; 
      }
  }

  



export { getAllProducts, getProductById, createAccount, userLogin, getCartByUserId, getUser };