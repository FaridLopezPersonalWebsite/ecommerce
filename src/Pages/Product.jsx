import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  const handleAddToCart = () => {
    addToCart(product.id);
  };

  return (
    <div className="product">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>${product.new_price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;

