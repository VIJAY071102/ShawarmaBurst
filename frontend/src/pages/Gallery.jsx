import React, { useState } from "react";
import galleryData from "../data/galleryData";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
        Gallery
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryData.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt="gallery"
              className="w-full h-48 object-cover hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* 🔍 Image Preview (Lightbox) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="preview"
            className="max-w-[90%] max-h-[90%] rounded-lg"
          />
        </div>
      )}
    </div>
  );
}

export default Gallery;
