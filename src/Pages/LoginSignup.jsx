// LoginSignup.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { userLogin } from '../Components/API';

const LoginSignup = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // Use the userLogin function from API.js
      const { token, id } = await userLogin(loginData);

      // You can save the token and user id in localStorage or cookies for authentication
      localStorage.setItem('token', token);
      localStorage.setItem('userId', id);

      // Redirect or perform any other action after successful login
    } catch (error) {
      console.error('Error during login:', error);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="loginsignup-fields">
            <input type="email" name="email" placeholder='Email Address' onChange={handleInputChange} required />
            <input type="password" name="password" placeholder='Password' onChange={handleInputChange} required />
          </div>
          {error && <p className="login-error">{error}</p>}
          <button type="submit">Login</button>
        </form>
        <p className="loginsignup-login">
          Don't have an account? <Link to='/signup'>Sign Up here</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginSignup;


