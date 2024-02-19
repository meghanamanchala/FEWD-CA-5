// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from "react-router-dom"
import './Navbar.css'
// eslint-disable-next-line react/prop-types
function Navbar({ setSearchQuery }) {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center">
        <img
          className="w-10 h-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlYpled7hx6J8cAVpr6txdmWqt7mcLcUwlqaRrkmM86w&s"
          alt="play-store-logo"
        />
        <h2>Kalvium Books</h2>
      </div>

      <div>
        <input
          className="h-8"
          style={{
            border: "1px solid white ",
            boxShadow: "rgba(100, 100, 100, 0.15) 0px 5px 15px 0px",
            width: "350px",
          }}
          type="text"
          placeholder="Search Books"
          onChange={handleSearchChange}
        />
      </div>
      <div>
       <Link to='/register'>
       <button
          style={{
            color: "red",
            border: "1px solid black",
            backgroundColor: "white",
            height: "30px",
            fontSize: "15px",
            padding:"5px",
          }}
        >
          Register
        </button></Link> 
      </div>
      <Link to='/info'>
      <div>
        
        <img
          className="w-10 h-10"
          src="data:image/jpeg;base64,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"
          alt="info-logo"
        />
      </div>
      </Link>
    </nav>
  );
}

export default Navbar;
