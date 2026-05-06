import React, { useState } from "react";
import menuData from "../data/menuData";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");

  const allItems = menuData.flatMap((cat) =>
    cat.items.map((item, index) => ({
      id: cat.category + index,
      category: cat.category,
      name: item.name,
      description: item.description,
      price:
        item.price ||
        (item.prices ? `Starts from ₹${Object.values(item.prices)[0]}` : ""),
      image: item.image,
    }))
  );

  const categories = ["all", ...menuData.map((cat) => cat.category)];

  const filteredItems =
    activeCategory === "all"
      ? allItems
      : allItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen py-8 px-3 sm:px-6 bg-gray-100">
      
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-black">
        Our Menu
      </h1>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-10 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm capitalize font-medium transition ${
              activeCategory === cat
                ? "bg-yellow-400 text-black shadow"
                : "bg-white text-black border hover:bg-yellow-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 sm:h-40 md:h-48 object-cover"
            />

            <div className="p-3 sm:p-4">
              <h2 className="text-sm sm:text-base font-semibold text-black">
                {item.name}
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">
                {item.description}
              </p>

              <p className="mt-2 sm:mt-3 font-bold text-yellow-500 text-sm sm:text-base">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;