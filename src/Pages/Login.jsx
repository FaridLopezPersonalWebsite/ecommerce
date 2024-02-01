// Login.jsx
import React, { useContext, useState } from 'react';
import './CSS/LoginSignup.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { userLogin } from '../Components/API';

const Login = () => {
  const { login } = useContext(ShopContext);
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    try {
      const response = await userLogin({ email, password });
      // Call the login function from the context to update the user state
      login({ username: response.username }); 
    } catch (error) {
      console.error('Error during login:', error);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="loginsignup-fields">
            <input type="email" name="email" placeholder='Email Address' required />
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
