import React, { useState } from "react";

import { Link, NavLink, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [click, setClick] = useState();

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div>
      <header>
        <nav>
          <h1>
            <Link to="/">LORD DANSCO</Link>
          </h1>
          <ul className={click ? "nav-content active" : "nav-content"}>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="About">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="Blog">BLOG</NavLink>
            </li>
            <li>
              <NavLink to="Instagrame">INSTAGRAM</NavLink>
            </li>
          </ul>
          <div className="harm" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NavBar;
