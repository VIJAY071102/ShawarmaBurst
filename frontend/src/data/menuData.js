const menuData = [
  {
    category: "Chicken Shawarma Rolls",
    items: [
      {
        name: "Arabian Chicken Shawarma",
        description:
          "Classic Middle Eastern style shawarma with juicy chicken, garlic mayo, and fresh veggies.",
        prices: { kuboos: 70, fullyLoaded: 90, rumali: 90 },
      },
      {
        name: "Mexican Chicken Shawarma",
        description:
          "Spicy Mexican-style chicken with tangy sauces and crunchy vegetables.",
        prices: { kuboos: 75, fullyLoaded: 95, rumali: 95 },
      },
      {
        name: "Peri-Peri Chicken Shawarma",
        description:
          "Hot and spicy peri-peri flavored chicken wrapped with creamy mayo.",
        prices: { kuboos: 85, fullyLoaded: 105, rumali: 105 },
      },
      {
        name: "New Spicy Chicken Shawarma",
        description:
          "A bold spicy version with special in-house masala and sauces.",
        prices: { kuboos: 85, fullyLoaded: 105, rumali: 105 },
      },
      {
        name: "Tandoori Chicken Shawarma",
        description:
          "Indian-style tandoori chicken with smoky flavor and creamy dressing.",
        prices: { kuboos: 85, fullyLoaded: 105, rumali: 105 },
      },
    ],
  },

  {
    category: "Special Fusion Shawarma",
    items: [
      {
        name: "Smoky Jumbo Chicken Shawarma",
        description:
          "Large shawarma loaded with smoky grilled chicken and rich sauces.",
        price: 110,
      },
      {
        name: "Jumbo Firangi Chicken Shawarma",
        description:
          "Fusion-style shawarma with international flavors and creamy fillings.",
        price: 129,
      },
      {
        name: "Fiery Chicken Shawarma",
        description:
          "Extra spicy shawarma for heat lovers with bold seasoning.",
        price: 129,
      },
      {
        name: "Mint Jumbo Grilled Chicken Shawarma",
        description: "Refreshing mint-flavored grilled chicken shawarma.",
        price: 129,
      },
      {
        name: "Mustard Fusion Shawarma",
        description:
          "Tangy mustard-based chicken shawarma with a unique twist.",
        price: 135,
      },
      {
        name: "Burrito Chicken Shawarma",
        description:
          "Shawarma wrapped like a burrito with extra fillings and sauces.",
        price: 120,
      },
    ],
  },

  {
    category: "Plate Shawarma",
    items: [
      {
        name: "Arabian Chicken Shawarma Plate",
        description:
          "Served with kuboos/rumali, chicken, fries, salad, and dips.",
        prices: { kuboos: 150, rumali: 180 },
      },
      {
        name: "Mexican Chicken Shawarma Plate",
        description: "Mexican-spiced chicken served with sides and sauces.",
        prices: { kuboos: 150, rumali: 180 },
      },
      {
        name: "Peri-Peri Chicken Shawarma Plate",
        description: "Spicy peri-peri chicken with full plate sides.",
        prices: { kuboos: 160, rumali: 190 },
      },
      {
        name: "New Spicy Chicken Shawarma Plate",
        description: "Extra spicy plate version with loaded flavors.",
        prices: { kuboos: 160, rumali: 190 },
      },
      {
        name: "Tandoori Chicken Shawarma Plate",
        description: "Smoky tandoori chicken served with bread and dips.",
        prices: { kuboos: 160, rumali: 190 },
      },
    ],
  },

  {
    category: "Burgers",
    items: [
      {
        name: "Veg Patty Classic Burger",
        description: "Crispy veg patty with fresh lettuce and mayo.",
        price: 69,
      },
      {
        name: "Paneer Patty Tandoori Burger",
        description: "Grilled paneer with tandoori spices and creamy sauces.",
        price: 130,
      },
      {
        name: "Chicken Classic Patty Burger",
        description: "Juicy chicken patty with classic burger fillings.",
        price: 79,
      },
      {
        name: "Chicken Peri-Peri Burger",
        description: "Spicy peri-peri chicken burger with bold flavor.",
        price: 99,
      },
    ],
  },

  {
    category: "Crispy Chicken",
    items: [
      {
        name: "Crispy Chicken (1 Pc)",
        description: "Golden fried crispy chicken piece.",
        price: 79,
      },
      {
        name: "Chicken Wings (4 Pcs)",
        description: "Crispy wings tossed in flavorful seasoning.",
        price: 99,
      },
      {
        name: "Chicken Nuggets (7 Pcs)",
        description: "Bite-sized crispy chicken nuggets.",
        price: 79,
      },
      {
        name: "Chicken Strips (4 Pcs)",
        description: "Juicy chicken strips coated and fried.",
        price: 89,
      },
    ],
  },

  {
    category: "Fries",
    items: [
      {
        name: "Classic Salted Fries",
        description: "Crispy golden fries served with ketchup.",
        price: 80,
      },
      {
        name: "Peri-Peri Fries",
        description: "Fries tossed in spicy peri-peri seasoning.",
        price: 90,
      },
      {
        name: "Chicken Loaded Fries",
        description: "Fries topped with chicken and creamy mayo.",
        price: 130,
      },
    ],
  },

  {
    category: "Mocktails",
    items: [
      {
        name: "Mint Mojito",
        description: "Refreshing mint drink with lime and soda.",
        price: 69,
      },
      {
        name: "Kiwi Mocktail",
        description: "Sweet and tangy kiwi flavored drink.",
        price: 69,
      },
      {
        name: "Blue Curacao Mocktail",
        description: "Cool blue citrus drink with refreshing taste.",
        price: 69,
      },
    ],
  },

  {
    category: "Momos",
    items: [
      {
        name: "Steam Momos",
        description: "Soft steamed dumplings served with chutney.",
        price: 69,
      },
      {
        name: "Fried Momos",
        description: "Crispy fried dumplings with spicy dip.",
        price: 75,
      },
      {
        name: "Tandoori Momos",
        description: "Chargrilled momos with smoky flavor.",
        price: 109,
      },
    ],
  },

  {
    category: "Pizzas",
    items: [
      {
        name: "Veg Margherita Pizza",
        description: "Classic pizza with cheese and tomato base.",
        price: 99,
      },
      {
        name: "Paneer Tandoori Pizza",
        description: "Paneer topped pizza with tandoori spices.",
        price: 129,
      },
      {
        name: "Non-Veg Tandoori Pizza",
        description: "Loaded chicken pizza with smoky tandoori flavor.",
        price: 139,
      },
    ],
  },

  {
    category: "Sandwich",
    items: [
      {
        name: "Veg Sandwich",
        description: "Fresh vegetable sandwich with chutney.",
        price: 59,
      },
      {
        name: "Paneer Sandwich",
        description: "Grilled paneer sandwich with spices.",
        price: 79,
      },
      {
        name: "Chicken Cheese Sandwich",
        description: "Chicken sandwich loaded with melted cheese.",
        price: 89,
      },
    ],
  },
];

export default menuData;
