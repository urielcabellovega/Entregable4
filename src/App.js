import './App.css';
import axios from "axios"
import { useState, useEffect } from "react";
import UsersForm from './Components/UsersForm';
import UsersList from './Components/UsersList';

function App() {
  const [userSelected,setUserSelected]=useState(null);
  const[users,setUsers]=useState([]);

  useEffect(() =>{
    axios.get("https://users-crud1.herokuapp.com/users/")
      .then(res =>setUsers(res.data))

  },[]);
  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
    console.log(users);
  };
  const removeUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(()=>getUsers());
    console.log(id)
  };

  console.log(users);
  
  return (
    <div className="App" >
       <UsersForm
        getUsers={getUsers}
        userSelected={userSelected}
        setUserSelected={setUserSelected}
      />
      <UsersList 
      users={users} 
      setUserSelected={setUserSelected}
      removeUser={removeUser} 
      />
    </div>
  );
}

export default App;
