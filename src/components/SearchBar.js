import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
    return (
      <div class="input-group search-group">
       
        <input
          type="text"
          class="form-control search-control"
          placeholder="Searc Movie"
          
        />
      </div>
    );
}

export default SearchBar
