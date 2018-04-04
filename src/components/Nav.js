import React from 'react';
import Search from './Search.js';
import SearchContainer from '../containers/SearchContainer.js';

var Nav = ({handleSearchInputChange}) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <SearchContainer />
    </div>
  </nav>
);

export default Nav;
