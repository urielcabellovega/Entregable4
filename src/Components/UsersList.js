import React from "react";

const UsersList = ({ users, setUserSelected, removeUser }) => {
  return (
    <ul className="users-list">
      {users.map((user) => (
        <li key={user.id}>
          <p><i class="fa-solid fa-user"></i><b> Name:</b> {user.first_name}</p>
          <p><i class="fa-solid fa-user"></i><b> Last name:</b>{user.last_name}</p>
          <p><i class="fa-solid fa-envelope"></i><b> Email:</b>{user.email}</p>
          <p><i class="fa-solid fa-cake-candles"></i><b> Birthday: </b>{user.birthday}</p>
          <button className="listbutton" onClick={() => setUserSelected(user)}>Edit</button>
          <button className="listbutton" onClick={()=>removeUser(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;