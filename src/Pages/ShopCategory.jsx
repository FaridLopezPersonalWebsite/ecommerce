import React, { useEffect, useState, useContext } from "react";
import { getAllProducts } from "../Components/API";
import { ShopContext } from '../Context/ShopContext';

const ShopCategory = () => {
  const { addToCart } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    }

    fetchData();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory === "all" ? products : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (productId) => {
    addToCart(productId);
  };

  return (
    <div>
      <h1>Product List</h1>
      <div>
        <label htmlFor="categoryFilter">Filter by Category:</label>
        <select id="categoryFilter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
      {filteredProducts.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} style={{ maxWidth: "100px" }} />
          <p>Description: {product.description}</p>
          <p>ID: {product.id}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ShopCategory;




