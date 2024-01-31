import React, {useState} from 'react'

export default function UserList() {
    const[users, setUsers] = useState([
        {id:1, name: 'Raman', email:'raman@gmail.com'},
        {id:2, name: 'Yadav', email:'yadav@gmail.com'},
        {id:3, name: 'Kumar', email:'kumar@gmail.com'}
    ]);
    const addUser = () =>{
        const newUser ={
            id: users.length +1,
            name: 'New User',
            email: 'newuser@gmail.com'
        };
        setUsers([...users, newUser]);
    };
  return (
    <div><h2>User List</h2>
    <ul>{users.map((user)=>(<li key ={user.id}>
        {`ID:${user.id},Name:${user.name},Email:${user.email}`}
    </li>))}
    </ul>
    <button onClick={addUser}>Add USer</button></div>

  )
}
