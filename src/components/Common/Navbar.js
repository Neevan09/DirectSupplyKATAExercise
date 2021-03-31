import React from "react";

const Navbar = () => {
  return (
      <div className="ui fixed inverted menu">
        <div className="container">
          <div className="header item">
            <i className="code icon shopping cart"></i>PETs
          </div>
          <a href="/" className="item">
            Home
          </a>
          <a href="/pets/new" className="item">
            New
          </a>
        </div>
      </div>
  );
};

export default Navbar;
