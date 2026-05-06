const menuData = [
  {
    category: "Chicken Shawarma Rolls",
    items: [
      {
        name: "Arabian Chicken Shawarma",
        description:
          "Classic Middle Eastern style shawarma with juicy chicken, garlic mayo, and fresh veggies.",
        prices: { kuboos: 70, fullyLoaded: 90, rumali: 90 },
        image:"Arabian_Chicken_Shawarma.png"
      },
      {
        name: "Mexican Chicken Shawarma",
        description:
          "Spicy Mexican-style chicken with tangy sauces and crunchy vegetables.",
        prices: { kuboos: 75, fullyLoaded: 95, rumali: 95 },
        image:"Mexican_Chicken_Shawarma.png"
      },
      {
        name: "Peri-Peri Chicken Shawarma",
        description:
          "Hot and spicy peri-peri flavored chicken wrapped with creamy mayo.",
        prices: { kuboos: 85, fullyLoaded: 105, rumali: 105 },
        image:"Peri-Peri_Chicken_Shawarma.png"
      },
      {
        name: "New Spicy Chicken Shawarma",
        description:
          "A bold spicy version with special in-house masala and sauces.",
        prices: { kuboos: 85, fullyLoaded: 105, rumali: 105 },
        image:"New_Spicy_Chicken_Shawarma.png"
      },
      {
        name: "Tandoori Chicken Shawarma",
        description:
          "Indian-style tandoori chicken with smoky flavor and creamy dressing.",
        prices: { kuboos: 85, fullyLoaded: 105, rumali: 105 },
        image:"Tandoori_Chicken_Shawarma.png"
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
        image:"Smoky_Jumbo_Chicken_Shawarma.png"
      },
      {
        name: "Jumbo Firangi Chicken Shawarma",
        description:
          "Fusion-style shawarma with international flavors and creamy fillings.",
        price: 129,
        image:"Jumbo_Firangi_Chicken_Shawarma.png"
      },
      {
        name: "Fiery Chicken Shawarma",
        description:
          "Extra spicy shawarma for heat lovers with bold seasoning.",
        price: 129,
        image:"Fiery_Chicken_Shawarma.png"
      },
      {
        name: "Mint Jumbo Grilled Chicken Shawarma",
        description: "Refreshing mint-flavored grilled chicken shawarma.",
        price: 129,
        image:"Mint_Jumbo_Grilled_Chicken_Shawarma.png"
      },
      {
        name: "Mustard Fusion Shawarma",
        description:
          "Tangy mustard-based chicken shawarma with a unique twist.",
        price: 135,
        image:"Mustard_Fusion_Shawarma.png"
      },
      {
        name: "Burrito Chicken Shawarma",
        description:
          "Shawarma wrapped like a burrito with extra fillings and sauces.",
        price: 120,
        image:"Burrito_Chicken_Shawarma.png"
        
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
        image:"Arabian_Chicken_Shawarma_Plate.png"
        
      },
      {
        name: "Mexican Chicken Shawarma Plate",
        description: "Mexican-spiced chicken served with sides and sauces.",
        prices: { kuboos: 150, rumali: 180 },
        image:"Mexican_Chicken_Shawarma_Plate.png"
      },
      {
        name: "Peri-Peri Chicken Shawarma Plate",
        description: "Spicy peri-peri chicken with full plate sides.",
        prices: { kuboos: 160, rumali: 190 },
        image:"Peri-Peri_Chicken_Shawarma_Plate.png"
      },
      {
        name: "New Spicy Chicken Shawarma Plate",
        description: "Extra spicy plate version with loaded flavors.",
        prices: { kuboos: 160, rumali: 190 },
        image:"New_Spicy_Chicken_Shawarma_Plate.png"
      },
      {
        name: "Tandoori Chicken Shawarma Plate",
        description: "Smoky tandoori chicken served with bread and dips.",
        prices: { kuboos: 160, rumali: 190 },
        image:"New_Tandoori_Chicken_Shawarma_Plate.png"
        
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
        image:"Veg_Patty_Classic_Burger.png"
      },
      {
        name: "Paneer Patty Tandoori Burger",
        description: "Grilled paneer with tandoori spices and creamy sauces.",
        price: 130,
        image:"Paneer_Patty_Tandoori_Burger.png"
      },
      {
        name: "Chicken Classic Patty Burger",
        description: "Juicy chicken patty with classic burger fillings.",
        price: 79,
        image:"Chicken_Classic_Patty_Burger.png"
      },
      {
        name: "Chicken Peri-Peri Burger",
        description: "Spicy peri-peri chicken burger with bold flavor.",
        price: 99,
        image:"Chicken Peri-Peri Burger.png"
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
        image:"Crispy_Chicken.png"
      },
      {
        name: "Chicken Wings (4 Pcs)",
        description: "Crispy wings tossed in flavorful seasoning.",
        price: 99,
        image:"Chicken_Wings.png"
      },
      {
        name: "Chicken Nuggets (7 Pcs)",
        description: "Bite-sized crispy chicken nuggets.",
        price: 79,
        image:"Chicken_Nuggets.png"
      },
      {
        name: "Chicken Strips (4 Pcs)",
        description: "Juicy chicken strips coated and fried.",
        price: 89,
        image:"Chicken_Strips.png"
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
        image:"Classic_Salted_Fries.png"
      },
      {
        name: "Peri-Peri Fries",
        description: "Fries tossed in spicy peri-peri seasoning.",
        price: 90,
        image:"Peri_Peri_Fries.png"
      },
      {
        name: "Chicken Loaded Fries",
        description: "Fries topped with chicken and creamy mayo.",
        price: 130,
        image:"Chicken_Loaded_Fries.png"
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
        image:"Mint_Mojito.png"
      },
      {
        name: "Kiwi Mocktail",
        description: "Sweet and tangy kiwi flavored drink.",
        price: 69,
        image:"Kiwi_Mocktail.png"
      },
      {
        name: "Blue Curacao Mocktail",
        description: "Cool blue citrus drink with refreshing taste.",
        price: 69,
        image:"Blue_CuracaoM_ocktail.png"
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
        image:"steam_momos.png"
      },
      {
        name: "Fried Momos",
        description: "Crispy fried dumplings with spicy dip.",
        price: 75,
        image:"Fried_Momos.png"
      },
      {
        name: "Tandoori Momos",
        description: "Chargrilled momos with smoky flavor.",
        price: 109,
        image:"Tandoori_Momos.png"
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
        image:"Veg_Margherita_Pizza.png"
      },
      {
        name: "Paneer Tandoori Pizza",
        description: "Paneer topped pizza with tandoori spices.",
        price: 129,
        image:"Paneer_Tandoori_Pizza.png"
      },
      {
        name: "Non-Veg Tandoori Pizza",
        description: "Loaded chicken pizza with smoky tandoori flavor.",
        price: 139,
        image:"Non_Veg_Tandoori_Pizza.png"
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
        image:"Veg_Sandwich.png"
        
      },
      {
        name: "Paneer Sandwich",
        description: "Grilled paneer sandwich with spices.",
        price: 79,
        image:"Paneer_Sandwich.png"
      },
      {
        name: "Chicken Cheese Sandwich",
        description: "Chicken sandwich loaded with melted cheese.",
        price: 89,
        image:"Chicken_Cheese_Sandwich.png"
        
      },
    ],
  },
];

export default menuData;
