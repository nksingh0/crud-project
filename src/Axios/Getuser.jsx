import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

let Getuser = () => {
  let navigate = useNavigate();
  let [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/user')
      .then(response => {
        if (response.data) {
          setUsers(response.data);
        } else {
          console.error('No users found');
        }
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  // Function to delete a user
  let deleteUser = (id) => {
    axios.delete(`http://localhost:3000/user/${id}`)
      .then(response => {
        console.log('User deleted successfully:', response.data);
        // Remove the deleted user from state
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };
  let navigateToAddUser = () => {
    navigate('/edit');
  };

  return (
    <>
      <button onClick={navigateToAddUser} className='testbutton'>Add +</button><br/>
      <table className='customTable'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/update/${user.id}`}> <button className='testbutton'>Update</button></Link><span> </span>
                <button onClick={() => deleteUser(user.id)} className='testbutton'>Delete -</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Getuser;