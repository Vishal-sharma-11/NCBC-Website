import React, { useState, useEffect } from "react";

const Gallery = () => {
  const images = [
    "src/assets/img/Gallery img.jpg",
    "src/assets/img/Gallery img.jpg",
    "src/assets/img/Gallery img.jpg",
    "src/assets/img/Gallery img.jpg",
  ]; 
  const [index, setIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-scroll effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="Gallery">
      <div className="gallery-header">Gallery</div>

      {/* Main Image */}
      <div className="big-image-container">
        <div className="gallery-image">
          <img src={images[index]} alt="Main Event" />
        </div>
      </div>

      {/* Carousel Section */}
      <div className="gallery-carousel">
        <button className="gallery-carousel-btn left" onClick={prevSlide}>
          &#10094;
        </button>

        <div
          className="gallery-carousel-container"
          style={{ transform: `translateX(-${index * 250}px)` }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx}`}
              className={idx === index ? "active" : ""}
            />
          ))}
        </div>

        <button className="gallery-carousel-btn right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Gallery;
