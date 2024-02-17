import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Product from '../Pages/Product';  


const Shop = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div>
      <h2>{category}</h2>
      <img src={banner} alt={`${category} banner`} />

      <div className="product-list">
        {all_product.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
