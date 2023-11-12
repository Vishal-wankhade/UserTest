import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';

function Register() {
  // State to store user information
  const [user, setUser] = useState({
    fullname: '',
    uname: '',
    pass: '',
  });

  // Handler to update user information in the state
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Handler to handle registration and store data in localStorage
  // Handler to handle registration and store data in localStorage
const handleRegistration = () => {
  // Check if username and password are not empty
  if (!user.uname || !user.pass) {
    alert('Username and password cannot be empty. Please fill in the required fields.');
    return;
  }

  // Store user information in localStorage
  localStorage.setItem('user', JSON.stringify(user));
  alert('Registration successful! Now you can log in.');
};




  return (
    <div className="reg">
      <div className='logo'>Logo</div>
      <p>Register</p>
      <label>Full Name </label>
      <input type="text" name="fullname" value={user.fullname} onChange={handleChange} required /> <br/>
      <label>Username </label>
      <input type="text" name="uname" value={user.uname} onChange={handleChange} required /><br/>
      <label>Password </label>
      <input type="password" name="pass" value={user.pass} onChange={handleChange} required />
      <button onClick={handleRegistration} className='reg-btn'>Register</button>
      {/* Use Link for navigation to the login page */}
      <Link to="/">Already have an account? Login</Link>
      <Outlet />
    </div>
  );
}

export default Register;
