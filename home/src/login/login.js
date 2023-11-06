import React, { useState } from 'react';
import './login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import img2 from "../images/image.png"

const LoginPage = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send login request with formData.email and formData.password
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Login successful, navigate to the home
        console.log('Login successful!');
        navigate('/Home'); // Redirect to the home
      } else {
        // Handle login failure, show error messages, etc.
        console.error('Login failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="login-page">
      <div className="div">
        <div className="overlap">
           <p className="text-wrapper">
            
          </p>
          <div className="text-wrapper-2">Let’s get started.</div>
          <div className="text-wrapper-3">Login to your account</div> 
          
          <div id="registrationform">
            <form id="registration" onSubmit={handleSubmit}>
              <label htmlFor="email">Email address</label><br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address ..."
                value={formData.email}
                onChange={handleChange}
              /><br />

              <label htmlFor="password">Password</label><br />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password ..."
                value={formData.password}
                onChange={handleChange}
              /><br />

              <button type="submit">login</button>
              <p className="text-wrapper">
                
              </p>
              <p className="link"><NavLink to="/">do not have an account? sighn up!</NavLink></p>
        
            </form>
          </div>

          <img className="image" alt="Image2" src={img2} />
          
        </div>
        <div className="login-image">
          <img
            className="unnamed"
            src="https://lh3.googleusercontent.com/1fmzgGEWYdufxJ9AFbI3gO8GMROfyrYYo5uE8EzAKpYeMfid89ZBoWtagyjQ5gYSJexxnYxfTRP5zHd0UUtlsNtsNDCPcn_Lcty8DGAgXQ=s750"
            alt="Unnamed"
          />
          
        </div>
      </div>
    </div>
  );
};

export default LoginPage;