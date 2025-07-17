import React from "react";
import "./Header.css"; 
import {Link} from "react-router-dom"

function Header() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/BrowseBooks">Browse Books</Link></li>
      <li><Link to="/AddBook">Add Book</Link></li>
       <li><Link to="/book">Book</Link></li>
    </ul>
  );
}

export default Header;
