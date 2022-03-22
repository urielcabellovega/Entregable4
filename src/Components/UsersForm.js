import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UsersForm = ({ getUsers, userSelected, setUserSelected }) => {
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [password,setPassword]=useState("");
  
  useEffect(() => {
    if (userSelected) {
      setBirthday(userSelected.birthday);
      setEmail(userSelected.email);
      setFirst_name(userSelected.first_name);
      setLast_name(userSelected.last_name);
      setPassword(userSelected.password)
    }
  }, [userSelected]);

  

  const submit = (e) => {
    e.preventDefault();
    const user = {
      birthday,
      email,
      first_name,
      last_name,
      password,
    };
    if (userSelected) {
      console.log("Se actualiza :D");
      axios
        .put(
          `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
          user
        )
        .then(() => {
          getUsers();
          setUserSelected(null);
          reset();
        });
    } else {
      axios
        .post("https://users-crud1.herokuapp.com/users/", user)
        .then(() => {
          getUsers();
          reset();
        })
        .catch((error) => console.log(error.response));
      console.log(user);
    }
  };

  const reset = () => {
    setUserSelected(null);
    setBirthday("");
    setEmail("");
    setFirst_name("");
    setLast_name("");
    setPassword("")  
  };

  return (
    <form onSubmit={submit} className="users-form">
      
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="input-container">
        <label htmlFor="first_name">First name</label>
        <input
          type="text"
          onChange={(e) => setFirst_name(e.target.value)}
          value={first_name}
        />
      </div>
      <div className="input-container">
        <label htmlFor="last_name">Last name</label>
        <input
          type="text"
          onChange={(e) => setLast_name(e.target.value)}
          value={last_name}
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className="input-container">
      <i class="fa-solid fa-cake-candles"></i><label htmlFor="birthday"> </label>
        <input
          type="date"
          onChange={(e) => setBirthday(e.target.value)}
          value={birthday}
        />
      </div>
      <div id="submitcancel">
        <button>Submit</button>
        <button onClick={() => reset()} type="button">
          Cancel changes
        </button>
      </div>
      
    </form>
  );
};

export default UsersForm;
