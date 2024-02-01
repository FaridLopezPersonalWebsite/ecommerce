import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../src/Components/API"; 

const ProductDisplay = () => {
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
          {/* Add more categories as needed */}
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
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
