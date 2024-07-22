import React, { useState } from 'react';
import './users.css'
import { FaTrash,FaUserPlus,FaEdit  } from 'react-icons/fa';
import {Link, useNavigate} from 'react-router-dom';

const User = () => {
  


  const [users, setUsers] = useState([
    { id: 1, name: 'John mathew', email: 'john@gmail.com' },
    { id: 2, name: 'maya john', email: 'maya@gmail.com' },
    { id: 3, name: 'surya kiran', email: 'surya@gmail.com' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  



  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const handleAddUser = () => {
    const newUser = { id: users.length + 1, name: 'New User', email: 'newuser@gmail.com' };
    setUsers([...users, newUser]);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleEdit=()=>{
navigate('/edit')
  }
  

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (<div className="mainuser">
    <h1>USERS</h1>
    <div className="top">
    <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ marginRight: '10px' }}
        />
        <button  onClick={handleAddUser}><FaUserPlus style={{ marginRight: '20px'}} />Add User</button>
      
    </div>
    <div className="section">
    <table style={{ width: '1300px', height:'600px',background:'white' }}>
      <thead>
        <tr>
          <th style={{ padding: '10px', border: '1px solid black',background:' #D0B8A8'  }}>ID</th>
          <th style={{ padding: '10px', border: '1px solid black',background:' #D0B8A8'  }}>Name</th>
          <th style={{ padding: '10px', border: '1px solid black',background:' #D0B8A8'  }}>Email</th>
          <th style={{ padding: '10px', border: '1px solid black',background:' #D0B8A8'  }}>Action</th>
        </tr>
      </thead>
      <tbody>
      {filteredUsers.map((user) => (
          <tr key={user.id}>
            <td style={{ padding: '10px', border: '1px solid black' }}>{user.id}</td>
            <td style={{ padding: '10px', border: '1px solid black' }}>{user.name}</td>
            
            <td style={{ padding: '10px', border: '1px solid black' }}>{user.email}</td>
            
            <td style={{ padding: '10px', border: '1px solid black' }}>
            <Link to={`/edit/${user.id}`}></Link>
             <FaTrash  style={{color:"red",marginRight:'40px',fontSize:"20"}}onClick={() => handleDelete(user.id)} />
            <FaEdit style={{ cursor: 'pointer',fontSize:"20" }}onClick={() =>handleEdit()} /> 
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
  );
};


  
   export default User;
  