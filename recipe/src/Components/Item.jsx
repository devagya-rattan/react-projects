import React, { useState } from "react";
import Items from "./Items";
import foodItems from "./FoodItems";
const Item = () => {
  const [search, setSearch] = useState("");
  const [filteritem, setFilteritem] = useState(foodItems);
  const handleInput = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    const filteredItems = foodItems.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteritem(filteredItems);
  };
  return (
    <>
      <div className="search-bar">
        <input
          className="search"
          type="text"
          placeholder="Type to search"
          onChange={handleInput}
          value={search}
        />
        <button className="btn">Search</button>
      </div>
      <div className="items">
        {filteritem.map((item, index) => {
          return (
            <Items
              key={index}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default Item;
