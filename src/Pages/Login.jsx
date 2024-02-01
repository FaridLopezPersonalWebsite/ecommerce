// Login.jsx
import React, { useContext, useState } from 'react';
import './CSS/LoginSignup.css';
import { Link, Navigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Login = () => {
  const { login, setToken, addToCart } = useContext(ShopContext);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    try {
      // Call your API endpoint for user login
      const loginResponse = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const loginData = await loginResponse.json();

      if (loginData.token) {
        // Call the login function from the context to update the user state
        login({ username });
        // Set token if setToken function is available
        setToken && setToken(loginData.token);
        // Set the user as authenticated
        setIsAuthenticated(true);
        // Optional: Add logic to fetch and update user data, cart, etc.
        // For example, fetch user's cart data and update the context
        // const userCartData = await fetchUserCartData(username);
        // updateCart(userCartData);
        // Redirect the user to the desired page (e.g., home)
        // You can use the Navigate component from React Router for this
        // Example: <Navigate to='/home' replace />
      } else {
        setError('Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again.');
    }
  };

  // If the user is already authenticated, redirect them to the home page or any other desired page
  if (isAuthenticated) {
    return <Navigate to='/home' replace />;
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="loginsignup-fields">
            <input type="text" name="username" placeholder='Username' required />
            <input type="password" name="password" placeholder='Password' required />
          </div>
          {error && <p className="login-error">{error}</p>}
          <button type="submit">Login</button>
        </form>
        <p className="loginsignup-login">
          Don't have an account? <Link to='/signup'>Sign up here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;







