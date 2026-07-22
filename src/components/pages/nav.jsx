import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navigationScreens = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/menu", name: "Menu" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/aboutus", name: "About Us" },
  ];

  return (
    <div>
      {navigationScreens.map((item, index) => (
        <a key={item.id} href={item.path}>
          {item.name}
        </a>
      ))}
    </div>
    // <nav>
    //   <Link to={"/"}> Home</Link>
    //   <Link to={"/contact"}> Contact</Link>
    //   <Link to={"/aboutus"}> About us</Link>
    //   <Link to={"/menu"}> Menu</Link>
    // </nav>
  );
}

export default Nav;
