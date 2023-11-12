// Content.js
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

function Content() {
  return (
    <div className="content">
      <div className='center'>
     
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      
      </div>
    </div>
  );
}

export default Content;
