import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
function FloatingButtons() {
  const phoneNumber = "917353323300"; 
  const message = "Hello I would like to inquire about your Franchise";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const phoneLink = `tel:+${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
      >
        <FaWhatsapp size={20} />
      </a>


      <a
        href={phoneLink}
        className="bg-yellow-400 hover:bg-yellow-500 text-black p-4 rounded-full shadow-lg transition transform hover:scale-110"
      >
        <FaPhoneAlt size={18} />
      </a>

    </div>
  );
}

export default FloatingButtons;