import React from 'react';
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar">
      <div className="search-bar-container">
        <input 
          type="text" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          placeholder="Search products..." 
        />
        <IoIosSearch className="search-icon" />
      </div>
    </div>
  );
};

export default SearchBar;
