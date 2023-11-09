import React, { useState, useEffect } from 'react';
import './login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getData2 } from "../myStore";

const LoginPage = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation
  const dispatch = useDispatch();
  const [ userData, setUserData ] = useState([])


  useEffect(()=>{
    fetch('https://moringa-yjml.onrender.com/users')
    .then((res)=> res.json())
    .then(data => {
      setUserData(data)
    })
  }, [])

  const sendData = (user) => {
      dispatch(getData2(user));
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send login request with formData.email and formData.password
    try {
      const response = await fetch('https://moringa-yjml.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Login successful, navigate to the home
        console.log('Login successful!');
        sendData(userData?.filter(user => user.email === formData.email)[0])
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
    <>    
        <div id="img">
          <img id="signUpLogo" src={'https://moringaschool.com/wp-content/themes/moringa/public/images/logo-white.png'} alt="logo" />
        </div>    
          <div id="registrationform">
            <div className="login-image">
              <img
                className="unnamed1"
                src="https://lh3.googleusercontent.com/1fmzgGEWYdufxJ9AFbI3gO8GMROfyrYYo5uE8EzAKpYeMfid89ZBoWtagyjQ5gYSJexxnYxfTRP5zHd0UUtlsNtsNDCPcn_Lcty8DGAgXQ=s750"
                alt="Unnamed"
              />
            </div>
            
            <form id="registration" onSubmit={handleSubmit}>
              <div id="text-wrapper-3">Login to your account</div> 

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

              <button type="submit" className="login-btn">login</button>
              
              <p className="text-wrapper"><NavLink to="/">Do not have an account? Sign up!</NavLink></p>
        
            </form>
          </div>
    </>
  );
};

export default LoginPage;  