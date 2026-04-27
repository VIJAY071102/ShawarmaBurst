import React, { useState } from "react";
import menuData from "../data/menuData";
import menuBg from "../assets/menu-bg.png";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");

  // 🔥 Flatten data
  const allItems = menuData.flatMap((cat) =>
    cat.items.map((item, index) => ({
      id: cat.category + index,
      category: cat.category,
      name: item.name,
      description: item.description,
      price:
        item.price ||
        (item.prices ? `Starts from ₹${Object.values(item.prices)[0]}` : ""),
      image: "/images/default.jpg",
    })),
  );

  // 🔘 Categories
  const categories = ["all", ...menuData.map((cat) => cat.category)];

  // 🔍 Filter items
  const filteredItems =
    activeCategory === "all"
      ? allItems
      : allItems.filter((item) => item.category === activeCategory);

  return (
    <div
      className="min-h-screen py-10 px-6 bg-fixed bg-center bg-cover relative"
      style={{
        backgroundImage: `url(${menuBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay (darker so background is visible properly) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-white">
          Our Menu
        </h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full capitalize font-medium transition ${
                activeCategory === cat
                  ? "bg-yellow-400 text-black"
                  : "bg-white text-black border hover:bg-yellow-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/90 backdrop-blur-md rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold text-black">
                  {item.name}
                </h2>

                <p className="text-sm text-gray-600 mt-1">{item.description}</p>

                <p className="mt-3 font-bold text-yellow-500">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
