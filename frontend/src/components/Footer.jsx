import React from "react";

function Footer() {
  return (
    <footer className="bg-yellow-400 text-black pt-10 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* 🔥 Left Section */}
        <div>
          {/* Logo + Name */}
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="logo" className="h-12" />
            <h2 className="text-xl font-bold">Shawarma Burst</h2>
          </div>

          {/* Address */}
          <p className="text-sm leading-relaxed">
            Office : 14,K.NO 56/1,W.NO.190, Mico layout, Garvebhavi Palya,
            Bommanahalli, Bengaluru, Karnataka 560068
          </p>

          {/* Contact */}
          <div className="mt-4 text-sm space-y-1">
            <p>📞 +91 9347045830</p>
            <p>✉️ shawarmaburst@gmail.com</p>
          </div>
        </div>

        {/* 📚 Middle Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Gallery</li>
            <li className="hover:underline cursor-pointer">Menu</li>
          </ul>
        </div>

        {/* 🚀 Right Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">Franchise Model</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Unit Franchise</li>
            <li className="hover:underline cursor-pointer">Master Franchise</li>
          </ul>

          <h3 className="font-bold text-lg mt-6 mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>
      </div>

      {/* 🔻 Bottom Section */}
      <div className="border-t border-black mt-8 pt-4 text-center text-sm">
        <p>
          Design & Developed By <span className="font-semibold">Vijay JS</span>
        </p>
        <p className="mt-1">
          © 2026-2030 | Shawarma Burst. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
