import React, { useRef, useState, useEffect } from "react";

const ImageModal = ({ images, currentIndex, closeModal, prevImage, nextImage }) => {
  const imgRef = useRef(null);
  const [btnPosition, setBtnPosition] = useState({ top: "10px", left: "10px", right: "10px" });

  useEffect(() => {
    const updateButtonPosition = () => {
      if (imgRef.current) {
        const { width, height } = imgRef.current.getBoundingClientRect();
        setBtnPosition({
          left: `${width * 0.05}px`,  // Left arrow at 5% of image width
          right: `${width * 0.05}px`, // Right arrow at 5% of image width
        });
      }
    };

    updateButtonPosition();
    window.addEventListener("resize", updateButtonPosition);
    return () => window.removeEventListener("resize", updateButtonPosition);
  }, [currentIndex]); // Update when image changes

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button (Positioned Exactly at the Corner of Image) */}
        <button className="close-btn" onClick={closeModal}>X</button>
  
        {/* Image Display */}
        <img ref={imgRef} src={images[currentIndex]} alt="Expanded event" className="modal-img" />
  
        {/* Navigation Buttons - Dynamically Positioned */}
        <button className="nav-btn left" onClick={prevImage} style={{ left: btnPosition.left }}>❮</button>
        <button className="nav-btn right" onClick={nextImage} style={{ right: btnPosition.right }}>❯</button>
        
      </div>
    </div>
  );
}

export default ImageModal;