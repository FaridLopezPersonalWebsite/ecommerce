// CartItems.jsx
import React, { useContext } from 'react';
import './CartItems.css';
import remove_icon from '../Assets/cart_cross_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {Object.entries(cartItems).map(([itemId, quantity]) => {
        const item = all_product.find((product) => product.id === Number(itemId));

        if (quantity > 0 && item) {
          return (
            <div key={itemId}>
              <div className="cartitems-format cartitems-format-main">
                <img src={item.image} alt="" className='carticon-product-icon' />
                <p>{item.title}</p>
                <p>${item.price}</p>
                <div className='cartitems-quantity-section'>
                  <button className='cartitems-quantity-btn' onClick={() => removeFromCart(itemId)}>-</button>
                  <span className='cartitems-quantity'>{quantity}</span>
                  <button className='cartitems-quantity-btn' onClick={() => addToCart(itemId)}>+</button>
                </div>
                <p>${(item.price * quantity).toFixed(2)}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(itemId) }} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <Link to='/checkout'>
            <button>PROCEED TO CHECKOUT</button>
          </Link>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;











