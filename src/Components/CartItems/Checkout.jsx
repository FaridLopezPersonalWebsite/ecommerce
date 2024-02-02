
import React, { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const Checkout = () => {
  const { getTotalCartAmount, logout } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    cardNumber: '',
    shippingAddress: '',
    name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert('Thank you for shopping with us today!');
    
    setFormData({
      cardNumber: '',
      shippingAddress: '',
      name: ''
    });
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Card Number:
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Shipping Address:
          <input
            type="text"
            name="shippingAddress"
            value={formData.shippingAddress}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Purchase</button>
      </form>
      <div>
        <h2>Total Amount: ${getTotalCartAmount()}</h2>
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Checkout;
