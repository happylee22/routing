import { Utensils } from "lucide-react";
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
    <div className="bg-black flex justify-between text-white w-full px-10 p-3">
      <div className="flex gap-4">
        <Utensils color="red" size={20} />
        <p>TastyBites</p>
      </div>
      <div className="flex gap-4 ">
        {navigationScreens.map((item, index) => (
          <a
            className="hover:text-orange-400  hover:border-b-2 hover:border-amber-500"
            key={item.id}
            href={item.path}
          >
            {item.name}
          </a>
        ))}
      </div>
      <button className="bg-orange-500 text-white rounded-4xl active:bg-amber-300 p-1 text-sm">
        Book Table
      </button>
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
