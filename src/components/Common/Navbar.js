import React from "react";
import { HOME_URL, NEW_URL } from "../../services/UrlMapperService";

const Navbar = () => {
  return (
      <div className="ui fixed inverted menu">
        <div className="container">
          <div className="header item">
            <i className="code icon shopping cart"></i>PETs
          </div>
          <a href={HOME_URL} className="item">
            Home
          </a>
          <a href={NEW_URL} className="item">
            New
          </a>
        </div>
      </div>
  );
};

export default Navbar;
