import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import "/home/mwangi/FINAL_PROJECT/client/src/components/sighnup.css";
import img1 from "/home/mwangi/MoringaDesk_Frontend/home/src/images/image.png";

const CreateAccount = () => {
  const navigate = useNavigate();

  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Signup successful!');
        setFormData(initialFormData);
        navigate('/login');
      } else {
        console.error('Signup failed.');
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
        <img src={img1} alt="logo" />
      </div>
      <div id="registrationform">
        <form id="registration" onSubmit={handleSubmit}>
          <label>First name</label><br />
          <input
            type='text'
            id='fname'
            name='firstName'
            placeholder='Your first name ...'
            value={formData.firstName}
            onChange={handleChange}
          /><br />

          <label>Last name</label><br />
          <input
            type='text'
            id='lname'
            name='lastName'
            placeholder='Your last name ...'
            value={formData.lastName}
            onChange={handleChange}
          /><br />

          <label>Email address</label><br />
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email address ...'
            value={formData.email}
            onChange={handleChange}
          /><br />

          <label>Password</label><br />
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Enter your password ...'
            value={formData.password}
            onChange={handleChange}
          /><br />

          <button type="submit">Sign up</button>
          <p className="text-wrapper"><NavLink to="/login">Already have an account? login!</NavLink></p>
        </form>
        <div className="registration-image">
          <img
            className="unnamed"
            alt="Unnamed"
            src="https://lh3.googleusercontent.com/1fmzgGEWYdufxJ9AFbI3gO8GMROfyrYYo5uE8EzAKpYeMfid89ZBoWtagyjQ5gYSJexxnYxfTRP5zHd0UUtlsNtsNDCPcn_Lcty8DGAgXQ=s750"
          />
        </div>
      </div>
    </>
  );
};

export default CreateAccount;