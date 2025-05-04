import React, { useEffect, useState } from "react";
import assets from "../../assets/assets";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [assets.img2, assets.img4, assets.img2];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="carousel-container">
      <div className="slides">
        {slides.map((src, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="dots-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
      <div className="solid-bar"></div>
      <div className="news-ticker-container">
        <div className="news-ticker">
          <span>
            Government announces a ₹2,000 crore scholarship scheme for backward
            class students to boost higher education opportunities
          </span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
