import { useState, useEffect } from 'react';
import './SearchBar.css';


const SearchBar = ({searchTerm, setSearchTerm, filteredUsers, setFilteredUsers}) => {
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  return (
    <input type="text" placeholder="Search by name, country, or company" onChange={handleSearch} />
  );
}

export default SearchBar;
