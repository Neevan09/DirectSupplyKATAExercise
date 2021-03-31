import React from "react";

const Navbar = () => {
  return (
    <div class="ui fixed inverted menu">
      <div class="container">
        <div class="header item">
          <i class="code icon shopping cart"></i>PETs
        </div>
        <a href="/" class="item">
          Home
        </a>
        <a href="/pets/new" class="item">
          New
        </a>
      </div>
    </div>
  );
}

export default Navbar;
