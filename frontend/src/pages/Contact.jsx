import React, { useState } from "react";

function Contact() {
  const phoneNumber = "917353323300"; 

  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello Shawarma Burst,%0AName: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <>
      <div className="bg-yellow-400 py-12 px-4 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-black">
          Looking For A Food Franchise Business?
        </h1>

        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            "Hello Shawarma Burst, I want to enquire about franchise",
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 hover:scale-105 transition shadow-lg"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="whatsapp"
            className="w-5 h-5"
          />
          Book Now
        </a>
      </div>

      <div className="py-12 px-4 md:px-10 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="w-full h-[400px] shadow-lg rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.239496404272!2d77.6302811102798!3d12.892315716559825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15cc4fbcc57d%3A0x62c12657fce3d0f4!2sshawarma%20burst!5e0!3m2!1sen!2sin!4v1777211466655!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              title="Shawarma Burst Location"
            ></iframe>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
