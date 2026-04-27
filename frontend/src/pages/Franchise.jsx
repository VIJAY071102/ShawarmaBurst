import React from "react";

function Franchise() {
  return (
    <div className="bg-gray-100 text-black">
      <div className="bg-black text-white py-20 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          Build Your Future with Shawarma Burst 🚀
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Start your own food business with a proven concept and growing demand.
        </p>
      </div>

      <div className="max-w-6xl mx-auto py-10 grid md:grid-cols-2 gap-6 px-4">
  <img
    src="/photo1.webp"
    className="w-full h-64 object-cover rounded-lg shadow-md"
  />
  <img
    src="/photo8.jpeg"
    className="w-full h-64 object-cover rounded-lg shadow-md"
  />
</div>

  
      <div className="max-w-5xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-black">Our Journey</h2>
        <p className="text-gray-600 leading-relaxed">
          Shawarma Burst started with a single outlet and a strong passion for
          delivering quality food. With increasing demand and customer love, we
          are now expanding and inviting partners to grow with us.
        </p>
      </div>

      <div className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-black">
          Why Partner With Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "High Demand Food Concept",
            "Low Investment Setup",
            "Complete Training Support",
            "Strong Brand Identity",
            "Marketing Guidance",
            "Quick Returns",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:scale-105 transition"
            >
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white py-12 text-center px-4">
        <h2 className="text-2xl font-bold text-black mb-4">Our Vision</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We aim to expand Shawarma Burst across multiple locations while
          maintaining quality and consistency. We believe in growing together
          with our partners and building a strong brand presence.
        </p>
      </div>

      <div className="bg-yellow-400 py-12 text-center px-4">
        <h2 className="text-2xl font-bold text-black">Investment & Setup</h2>
        <p className="mt-3">Affordable startup model</p>
        <p className="mt-1 font-semibold">₹3 Lakhs – ₹6 Lakhs</p>
        <p className="mt-1">100–200 sq.ft space required</p>
      </div>

      <div className="py-12 text-center bg-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-black">
          Ready to Start Your Business?
        </h2>

        <a
          href="https://wa.me/919347045830?text=Hello Shawarma Burst, I want to enquire about franchise"
          target="_blank"
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition shadow-lg"
        >
          Enquire on WhatsApp 💬
        </a>
      </div>
    </div>
  );
}

export default Franchise;
