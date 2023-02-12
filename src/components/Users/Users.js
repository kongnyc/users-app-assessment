import { useState, useEffect } from 'react';
import User from '../User/User';
import './Users.css';
import SearchBar from '../SearchBar/SearchBar';


const Users = ({ users}) => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [expanded, setExpanded] = useState([]);

  const toggleExpanded = (id) => {
    // console.log(id,expanded)
      if (!expanded.includes(id)) {
        // const newExpanded = [...expanded, id];
        setExpanded([...expanded, id])
      } else {
        // const removeID = expanded.filter(item => item!== id);
        setExpanded(expanded.filter(item => item!== id))
      }
}
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
      <button className='StudentCard__controls' 
        onClick={()=>{
          if(expanded.length === 0) {
            const allIds=users.map((user)=>user.id);
            setExpanded(allIds);}
            else{
              setExpanded([]);
          }
        }}
          
      >
      { expanded.length === 0? 'Show All' : 'Hide All'}
      </button>
      {filteredUsers.map((user) => {
        const { id } = user;
        return <User key={id} user={user} expanded={expanded.includes(id)} onClickExpanded={toggleExpanded}/>;
      })}
    </article>
  );
};

export default Users;
