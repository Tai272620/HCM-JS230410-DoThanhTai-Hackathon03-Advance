import Content from "./components/content/Content";
import Header from "./components/header/Header";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem("listUsers")) || []);

  const handleAddUser = (newUser) => {
    console.log(newUser);
    const updateUsers = [...users, newUser];
    setUsers(updateUsers);
    localStorage.setItem("listUsers", JSON.stringify(updateUsers));
  }
  const handleDeleteUser = (id) => {
    const updateUsers = users.filter((user) => {
      return user.id !== id;
    })
    setUsers(updateUsers);
    localStorage.setItem("listUsers", JSON.stringify(updateUsers));
  }

  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = users.map((user) => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      }
      return user;
    });
    setUsers(updatedUsers);
    localStorage.setItem("listUsers", JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <Header handleAddUser={handleAddUser} />
      <Content users={users} handleDeleteUser={handleDeleteUser} handleUpdateUser={handleUpdateUser} />
    </div>
  );
}

export default App;
