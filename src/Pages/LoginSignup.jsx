// // LoginSignup.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { userLogin } from '../Components/API';

// const LoginSignup = () => {
//   const [loginData, setLoginData] = useState({
//     username: '', // Clear default username
//     password: '', // Clear default password
//   });

//   const [error, setError] = useState(null);

//   const handleInputChange = (event) => {
//     setLoginData({
//       ...loginData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     try {
//       // Use the userLogin function from API.js with the loginData
//       const { token, id } = await userLogin({
//         username: loginData.username,
//         password: loginData.password,
//       });

//       // Save the token and user id in localStorage for authentication
//       localStorage.setItem('token', token);
//       localStorage.setItem('userId', id);

//       // Redirect or perform any other action after successful login
//     } catch (error) {
//       console.error('Error during login:', error);
//       setError('Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//         <h1>Login</h1>
//         <form onSubmit={handleLogin}>
//           <div className="loginsignup-fields">
//             <input type="text" name="username" placeholder='Username' onChange={handleInputChange} required />
//             <input type="password" name="password" placeholder='Password' onChange={handleInputChange} required />
//           </div>
//           {error && <p className="login-error">{error}</p>}
//           <button type="submit">Login</button>
//         </form>
//         <p className="loginsignup-login">
//           Don't have an account? <Link to='/signup'>Sign Up here</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default LoginSignup;



