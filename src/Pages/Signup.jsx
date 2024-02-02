
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createAccount } from '../Components/API';


const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      
      const token = await createAccount(formData);
      console.log('User signed up with token:', token);
      
    } catch (error) {
      console.error('Error during signup:', error);
      setError('Error during signup. Please try again.');
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
          <div className="loginsignup-fields">
            <input type="text" name="name" placeholder='Your Name' onChange={handleInputChange} required />
            <input type="email" name="email" placeholder='Email Address' onChange={handleInputChange} required />
            <input type="password" name="password" placeholder='Password' onChange={handleInputChange} required />
          </div>
          {error && <p className="signup-error">{error}</p>}
          <button type="submit">Continue</button>
        </form>
        <p className="loginsignup-login">
          Already have an account? <Link to='/login'>Login here</Link>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
