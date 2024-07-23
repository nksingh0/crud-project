import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

let UpdateUser = () => {
  let [user, setUser] = useState({ name: '', email: '' });
  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${encodeURIComponent(id)}`)
     .then(response => setUser(response.data));
  });
  let handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
  };

  let handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/user/${encodeURIComponent(id)}`, user)
     .then(response => navigate('/'));
  };

  return (
    <>
      <form onSubmit={handleUpdate}>
      <div className="custom_input">
      <h1>Update User</h1>
      <input className="input" type="text" placeholder='Name' name='name' value={user.name} onChange={handleChange}/><br /><br />
        <input className='input' type="email" placeholder='E-mail' name='email' value={user.email} onChange={handleChange}/><br /><br />
        <input type="submit" value="Update User" className='testbutton'/>
      </div>
      </form>
    </>
  );
};

export default UpdateUser;