import React from "react";

const UsersList = ({ users, setUserSelected }) => {
  return (
    <ul className="users-list">
      {users.map((user) => (
        <li key={user.id}>
          <p><i class="fa-solid fa-user"></i><b> Name:</b> {user.first_name}</p>
          <p><i class="fa-solid fa-user"></i><b> Last name:</b>{user.last_name}</p>
          <p><i class="fa-solid fa-envelope"></i><b> Email:</b>{user.email}</p>
          <p><i class="fa-solid fa-cake-candles"></i><b> Birthday: </b>{user.birthday}</p>
          <button id="listbutton" onClick={() => setUserSelected(user)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;