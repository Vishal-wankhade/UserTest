import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import './App.css';

function Login() {
  // State to store login information and error message
  const [loginData, setLoginData] = useState({
    uname: '',
    pass: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  // Handler to update login information in the state
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // Retrieve user information from localStorage
  const storedUser = JSON.parse(localStorage.getItem('user')) || {};

  // Use the useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  // Attempt to log in
  const handleLogin = () => {
    if (loginData.uname === storedUser.uname && loginData.pass === storedUser.pass) {
      // Redirect to the dashboard if credentials are correct
      navigate('/Dashboard');
    } else {
      // Display error message for incorrect credentials
      setErrorMessage('Wrong username or password. Please try again.');
    }
  };

  // Call preFillLoginDetails when the component mounts
  useEffect(() => {
    preFillLoginDetails();
  });

  // Pre-fill the login form with saved details
  const preFillLoginDetails = () => {
    setLoginData({
      uname: storedUser.uname || '',
      pass: storedUser.pass || '',
    });
  };

  return (
    <div className="log">
      <div className="logo">Logo</div>
      <p>Welcome</p>
      <label>Username </label>
      <input type="text" name="uname" value={loginData.uname} onChange={handleChange} required /><br/>
      <label>Password </label>
      <input type="password" name="pass" value={loginData.pass} onChange={handleChange} required /><br/>
      <button className='log-btn' onClick={handleLogin}>Login</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <Link to="/Register">Do not have an account? Register</Link>
      <Outlet />
    </div>
  );
}

export default Login;
