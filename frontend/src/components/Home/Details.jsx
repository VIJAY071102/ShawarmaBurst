import React from "react";

function Details() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full bg-zinc-900 p-8 md:p-12 rounded-2xl shadow-lg border border-zinc-800">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 text-center">
          Shawarma Burst
        </h1>

        {/* Subtitle */}
        <h3 className="text-lg md:text-xl text-gray-300 mt-3 text-center">
          A Flavor-First Fast Food Experience
        </h3>

        {/* Divider */}
        <div className="w-20 h-1 bg-yellow-500 mx-auto my-6 rounded-full"></div>

        {/* Content */}
        <p className="text-gray-300 leading-relaxed text-sm md:text-base text-justify">
          Shawarma Burst is a modern fast-food brand built around one simple
          idea — delivering bold flavors and satisfying meals that people come
          back for. With a focus on quality ingredients, rich taste, and quick
          service, Shawarma Burst brings a fresh take on street-style favorites
          in a clean and exciting way.
          <br />
          <br />
          At the heart of Shawarma Burst is our signature shawarma — crafted
          with perfectly seasoned meat, fresh vegetables, and flavorful sauces,
          all wrapped to deliver a true “flavor explosion” in every bite. Our
          menu is designed to go beyond just shawarma, offering burgers, crispy
          chicken, pizzas, rolls, and more.
          <br />
          <br />
          We believe great food should be both delicious and accessible. That’s
          why Shawarma Burst focuses on delivering consistent quality at
          affordable prices, whether you're ordering a quick bite or a full
          meal.
          <br />
          <br />
          Driven by passion and customer satisfaction, we aim to create not just
          meals, but memorable food experiences. Shawarma Burst —{" "}
          <span className="text-yellow-500 font-semibold">
            Flavor Explosion in Every Bite.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Details;
