import { useState, useEffect } from 'react';
import User from '../User/User';
import './Users.css';
import SearchBar from '../SearchBar/SearchBar';


const Users = ({ users}) => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        [user.name, user.country, user.company].join().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, users]);
  
  return (
    <article className="Users">
      <SearchBar searchTerm={searchTerm}  setSearchTerm={setSearchTerm} filteredUsers={filteredUsers} setFilteredUsers={setFilteredUsers} /> 
      <botton>Expand All</botton>
      <botton>Collapse All</botton>
      {filteredUsers.map((user) => {
        const { id } = user;
        return <User key={id} user={user} />;
      })}
    </article>
  );
};

export default Users;
