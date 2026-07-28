import React, { useState } from "react";
import { categories, menuItems } from "../card/data";

function Home() {
  const [active, setActive] = useState(categories[0]);
  console.log(active);
  const filteredItem =
    active === categories[0]
      ? menuItems
      : menuItems.filter((item, index) => item.category === active);

  return (
    <div className="display flex flex-col">
      <h3 className="text-center font-bold text-2xl">Our Menu</h3>
      <div className="flex gap-4 items-center justify-center">
        {categories.map((item, index) => (
          <button
            onClick={() => setActive(item)}
            className={`${active === item ? "bg-amber-600 px-1 rounded-full w-20 text-white" : "bg-white px-1 rounded-full w-20 text-black border border-gray-300"}`}
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
      {/* second rendering list */}
      <div
        className={`${filteredItem.length > 2 ? "grid grid-cols-4 gap-2 mx-6 my-6" : "grid grid-cols-2 gap-2 mx-6 my-6"}`}
      >
        {filteredItem.map((item) => (
          <div
            key={item.id}
            className={`${filteredItem.length > 2 ? " h-60 shadow-md shadow-gray-400 rounded overflow-hidden" : " h-80 shadow-md shadow-gray-400 rounded overflow-hidden"}`}
          >
            <img
              className={`${filteredItem.length > 2 ? "w-full h-30 " : "w-full h-50 object-fit"}`}
              src={item.image}
              alt={item.name}
            />
            <div className="p-4 text-sm flex justify-between">
              <h4> {item.name}</h4>
              <p
                className={`${item.price < 5 ? "text-red-500" : item.price > 7 ? "text-green-500" : "text-black"}`}
              >{`$${item.price}`}</p>
            </div>
            <p className="text-sm p-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
