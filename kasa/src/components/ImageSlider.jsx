import React, { useState } from "react";
import "./ImageSlider.scss";
import VectorLeft from "../assets/icons/vectorleft.png";
import VectorRight from "../assets/icons/vectorright.png";

function ImageSlider({ images, altText }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-slider">
      {/* Affichage de l'image actuelle */}
      <img
        src={images[currentImageIndex]}
        alt={`${altText} - ${currentImageIndex + 1}`}
        className="slider-image"
      />

      {/* Flèche gauche */}
      <img
        src={VectorLeft}
        alt="Précédente"
        className="slider-arrow left"
        onClick={handlePreviousImage}
      />

      {/* Flèche droite */}
      <img
        src={VectorRight}
        alt="Suivante"
        className="slider-arrow right"
        onClick={handleNextImage}
      />

      {/* Indicateur */}
      {images.length > 1 && (
        <div className="slider-indicator">
          {currentImageIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
}

export default ImageSlider;
