import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import "./sighnup.css"
import img1 from "../images/image.png";

const CreateAccount = () => {
  const navigate = useNavigate();

  const initialFormData = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [notification, setNotification] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('formData', formData)
    try {
      const response = await fetch('https://moringa-desk-9m7v.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('response', response)
      if (response.ok) {
        alert('Signup successful!');
        console.log(response);
        setNotification('Signup successful!');
        setFormData(initialFormData);
        navigate('/login');
      } else {
        console.error('Signup failed.');
        setNotification('Signup failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      setNotification('Error occurred during signup.');
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
        <img src={img1} alt="logo" />
      </div>
      <div id="registrationform">
        <form id="registration" onSubmit={handleSubmit}>
          <label>First name</label><br />
          <input
            type='text'
            
            name='first_name'
            placeholder='Your first name ...'
            value={formData.first_name}
            onChange={handleChange}
          /><br />

          <label>Last name</label><br />
          <input
            type='text'
            
            name='last_name'
            placeholder='Your last name ...'
            value={formData.last_name}
            onChange={handleChange}
          /><br />
          <label>Username</label><br />
          <input
            type='text'
            
            name='username'
            placeholder='Your user name ...'
            value={formData.username}
            onChange={handleChange}
          /><br />

          <label>Email address</label><br />
          <input
            type='email'
            
            name='email'
            placeholder='Enter your email address ...'
            value={formData.email}
            onChange={handleChange}
          /><br />

          <label>Password</label><br />
          <input
            type='password'
            
            name='password'
            placeholder='Enter your password ...'
            value={formData.password}
            onChange={handleChange}
          /><br />

          <button type="submit" className="login-btn">Sign up</button>
          <p className="text-wrapper"><NavLink to="/login">Already have an account? Login!</NavLink></p>
        </form>
        <div className="registration-image">
          <img
            className="unnamed"
            alt="Unnamed"
            src="https://lh3.googleusercontent.com/1fmzgGEWYdufxJ9AFbI3gO8GMROfyrYYo5uE8EzAKpYeMfid89ZBoWtagyjQ5gYSJexxnYxfTRP5zHd0UUtlsNtsNDCPcn_Lcty8DGAgXQ=s750"
          />
        </div>
        {notification && <p className="notification">{notification}</p>}
      </div>
    </>
  );
};

export default CreateAccount;