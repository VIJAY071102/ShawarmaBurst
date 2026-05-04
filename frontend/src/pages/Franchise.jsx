import React from "react";

function Franchise() {
  return (
    <div className="bg-gray-100 text-black">

      {/* Hero */}
      <div className="bg-black text-white py-20 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          Build Your Future with Shawarma Burst 🚀
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Start your own food business with a proven concept and growing demand.
        </p>
      </div>

      {/* Images */}
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

      {/* WHY CHOOSE US (STRONG SECTION) */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why Choose Shawarma Burst?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            "🔥 High Demand Product",
            "💰 Low Investment",
            "⚡ Fast ROI",
            "📍 Easy Setup",
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow border">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* PROFIT POTENTIAL */}
      <div className="bg-white py-12 text-center px-4">
        <h2 className="text-2xl font-bold mb-4">Profit Potential</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          With high-demand menu items and efficient operations, our partners
          typically achieve strong daily sales and fast break-even timelines.
        </p>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-bold text-lg">₹8K–₹15K</p>
            <p className="text-sm text-gray-600">Daily Sales Potential</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-bold text-lg">3–6 Months</p>
            <p className="text-sm text-gray-600">Break-even Time</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-bold text-lg">High Margins</p>
            <p className="text-sm text-gray-600">On Core Items</p>
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "1. Enquire",
            "2. Discussion",
            "3. Setup",
            "4. Launch 🚀",
          ].map((step, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow border">
              {step}
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className="bg-white py-12 text-center px-4">
        <h2 className="text-2xl font-bold mb-4">Partner Success</h2>
        <p className="text-gray-600 max-w-2xl mx-auto italic">
          "Joining Shawarma Burst was the best decision. The support and brand
          value helped me reach profitability within 4 months."
        </p>
        <p className="mt-3 font-semibold">– Franchise Partner</p>
      </div>

      {/* INVESTMENT */}
      <div className="bg-gray-100 py-12 text-center px-4">
        <h2 className="text-2xl font-bold">Investment & Setup</h2>

        <div className="mt-6 inline-block bg-yellow-100 border border-yellow-300 px-6 py-6 rounded-xl shadow-sm">
          <p className="text-gray-700">Affordable startup model</p>
          <p className="mt-2 font-bold text-lg">₹3 Lakhs – ₹6 Lakhs</p>
          <p className="mt-1 text-gray-600">
            100–200 sq.ft space required
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">FAQs</h2>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-semibold">Do I need experience?</p>
            <p className="text-gray-600 text-sm">
              No, we provide complete training and support.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-semibold">How long to start?</p>
            <p className="text-gray-600 text-sm">
              Usually within 2–4 weeks after approval.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-12 text-center bg-gray-100">
        <h2 className="text-lg font-semibold mb-4">
          Ready to Start Your Business?
        </h2>

        <a
          href="https://wa.me/919347045830?text=Hello Shawarma Burst, I want to enquire about franchise"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition shadow-lg"
        >
          Enquire on WhatsApp 💬
        </a>
      </div>
    </div>
  );
}

export default Franchise;