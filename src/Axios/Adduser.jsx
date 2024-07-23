import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

let AddUser = () => {
  let [user, setUser] = useState({ name: '', email: '' });
  let navigate = useNavigate();

  let handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/user', user)
      .then(response => navigate('/'));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
       <div className='custom_input'>
       <h1>Add User</h1>
       <input className='input' type="text" placeholder='Name' name='name' value={user.name} onChange={handleChange}/><br /><br />
        <input className='input' type="email" placeholder='E-mail' name='email' value={user.email} onChange={handleChange}/><br /><br />
        <input type="submit" value="Add User" className='testbutton'/>
       </div>
      </form>
    </>
  );
};

export default AddUser;