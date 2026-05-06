import React from "react";

function Franchise() {
  return (
    <div className="bg-gray-50 text-black">

      {/* HERO (keep black for contrast) */}
      <div className="bg-black text-white py-20 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          Start Your Own Profitable Shawarma Business 🚀
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Low investment. High demand. Fast returns. Build your future with a growing brand.
        </p>
      </div>

      {/* IMAGES */}
      <div className="max-w-6xl mx-auto py-10 grid md:grid-cols-2 gap-6 px-4">
        <img
          src="/photo1.webp"
          className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
        />
        <img
          src="/photo8.jpeg"
          className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* WHY CHOOSE US */}
      <div className="max-w-6xl mx-auto py-12 px-4 bg-white rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Why Choose Shawarma Burst?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            "🔥 High Demand Product",
            "💰 Low Investment",
            "⚡ Fast ROI",
            "📍 Easy Setup",
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-5 rounded-xl shadow border">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* WHY SHAWARMA BURST */}
      <div className="bg-gradient-to-r from-red-50 to-white py-16 px-4 mt-10">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Why Shawarma Burst Over Others?
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-gray-700">
          <div className="space-y-5">
            <p>🚀 Faster break-even compared to other franchises</p>
            <p>💰 Start with just ₹3–6 Lakhs (others need ₹10L+)</p>
            <p>🔥 High-demand food with consistent daily sales</p>
          </div>

          <div className="space-y-5">
            <p>🤝 Full support from setup to operations</p>
            <p>📦 Complete ready-to-run setup provided</p>
            <p>📈 Growing brand with increasing trust</p>
          </div>
        </div>

        <p className="text-center mt-8 text-gray-600 max-w-xl mx-auto">
          This is not just a food outlet — it’s a scalable business opportunity.
        </p>
      </div>

      {/* INVESTMENT */}
      <div className="bg-gray-50 py-12 text-center px-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Investment Models
        </h2>

        <div className="mt-6 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="text-xl font-bold text-red-500">Kiosk Model</h3>
            <p className="text-2xl font-bold mt-2">₹3 – ₹4 Lakhs</p>
            <p className="text-gray-600 mt-2 text-sm">
              Best for small spaces & high footfall areas
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="text-xl font-bold text-red-500">Cafe Model</h3>
            <p className="text-2xl font-bold mt-2">₹6 Lakhs</p>
            <p className="text-gray-600 mt-2 text-sm">
              Ideal for dine-in & premium locations
            </p>
          </div>
        </div>
      </div>

      {/* WHAT WE PROVIDE */}
      <div className="bg-white py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          What We Provide
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
          {[
            "🤝 Full Support",
            "👨‍🍳 Trained Staff",
            "📦 Operating Materials",
            "🏗️ Total Setup",
            "🎯 Branding",
            "🌐 Online Setup",
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-5 rounded-xl shadow border">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* PROFIT POTENTIAL */}
      <div className="bg-red-50 py-12 text-center px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Profit Potential
        </h2>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-bold text-lg">₹8K–₹15K</p>
            <p className="text-sm text-gray-600">Daily Sales</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-bold text-lg">3–6 Months</p>
            <p className="text-sm text-gray-600">Break-even</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-bold text-lg">High Margins</p>
            <p className="text-sm text-gray-600">Core Items</p>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="bg-gray-50 py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Partner Success Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              text: "Started with kiosk, now running 2 outlets.",
              name: "Ravi Kumar",
            },
            {
              text: "Low investment and quick returns.",
              name: "Arun",
            },
            {
              text: "Online orders boosted my sales quickly.",
              name: "Suresh",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow border">
              <p className="italic text-gray-600">"{item.text}"</p>
              <p className="mt-3 font-semibold">– {item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-16 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          This Opportunity Won’t Wait Forever
        </h2>

        <p className="mt-4 text-red-100 max-w-xl mx-auto">
          Every day you delay, someone else takes your location. Start now and build your income stream.
        </p>

        <a
          href="https://wa.me/919353522108?text=Hello Shawarma Burst, I want franchise details"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-white text-red-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition shadow-lg"
        >
          Enquire Now 💬
        </a>
      </div>

    </div>
  );
}

export default Franchise;