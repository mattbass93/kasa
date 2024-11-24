import React, { useState } from "react";
import "./Logement.scss";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logements from "../data/logements.json";
import Vector from "../assets/icons/vector.png";
import VectorLeft from "../assets/icons/vectorleft.png"
import VectorRight from "../assets/icons/vectorright.png"

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  // État pour suivre l'image actuelle
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fonctions pour naviguer dans la galerie
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  };

  // Gestion des dropdowns
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setEquipmentsOpen] = useState(false);

  // Vérification si le logement existe
  if (!logement) {
    return <p>Logement introuvable</p>;
  }

  return (
    <div className="body-div">
      <Header />
        <main className="container logement-container">
          {/* Bannière avec les flèches */}
          <div className="logement-banner" style={{ position: "relative" }}>
            <img
              src={logement.pictures[currentImageIndex]}
              alt={`${logement.title} - ${currentImageIndex + 1}`}
              className="banner-image"
            />

            {/* Flèche gauche */}
            <img
              src={VectorLeft}
              alt="précédente"
              className="banner-arrow left"
              onClick={handlePreviousImage}
            />

            {/* Flèche droite */}
            <img
              src={VectorRight}
              alt="suivante"
              className="banner-arrow right"
              onClick={handleNextImage}
            />

            {/* Indicateur d'image */}
            {logement.pictures.length > 1 && (
              <div className="banner-indicator">
                {currentImageIndex + 1}/{logement.pictures.length}
              </div>
            )}
          </div>


            {/* Informations sur le logement */}
          <div className="logement-infos d-md-flex align-items-center justify-content-between">
            {/* Logement Info à gauche */}
            <div className="logement-info w-md-50">
              <h3 className="logement-title">{logement.title}</h3>
              <p className="logement-location">{logement.location}</p>
              <div className="tags">
                {logement.tags.map((tag, index) => (
                  <span key={index} className="tag fw-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
              
            {/* Logement Details à droite */}
            <div className="logement-details w-md-50 d-flex align-items-center justify-content-between flex-md-column-reverse">
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={
                    index < logement.rating
                      ? require("../assets/icons/star-active.png")
                      : require("../assets/icons/star-inactive.png")
                  }
                  alt={index < logement.rating ? "Étoile active" : "Étoile inactive"}
                  className="star"
                />
              ))}
            </div>

              <div className="host d-flex align-items-center">
                <p>{logement.host.name}</p>
                <img
                  src={logement.host.picture}
                  alt={logement.host.name}
                  className="host-picture"
                />
              </div>
            </div>
          </div>


        {/* Dropdowns pour la description et les équipements */}
        <div className="dropdown-container row">
  <div className="col-md-6">
    {/* Dropdown Description */}
    <div className={`dropdown ${isDescriptionOpen ? "open" : ""}`}>
      <button
        className="dropdown-button"
        onClick={() => setDescriptionOpen(!isDescriptionOpen)}
      >
        Description
        <img
          src={Vector}
          alt="Afficher ou masquer la description"
          className="vector-icon"
        />
      </button>
      <div className={`dropdown-content ${isDescriptionOpen ? "open" : ""}`}>
        <p>{logement.description}</p>
      </div>
    </div>
  </div>

  <div className="col-md-6">
    {/* Dropdown Équipements */}
    <div className={`dropdown ${isEquipmentsOpen ? "open" : ""}`}>
      <button
        className="dropdown-button"
        onClick={() => setEquipmentsOpen(!isEquipmentsOpen)}
      >
        Équipements
        <img
          src={Vector}
          alt="Afficher ou masquer les équipements"
          className="vector-icon"
        />
      </button>
      <div className={`dropdown-content ${isEquipmentsOpen ? "open" : ""}`}>
        <ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>

      </main>
      <Footer />
    </div>
  );
}

export default Logement;


