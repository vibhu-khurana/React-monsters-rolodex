import React from 'react';
import './search-box.styles.css';

export const SearchBox = (
  { placeholder, handleChange } // doing destrucing here as well. No taking entire props
) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);
