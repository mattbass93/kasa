import React, { useState } from "react";
import "./Logement.scss";
import { useParams, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown"; // Import du composant Dropdown
import logements from "../data/logements.json";
import VectorLeft from "../assets/icons/vectorleft.png";
import VectorRight from "../assets/icons/vectorright.png";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!logement) {
    return <Navigate to="*" />;
  }

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

  return (
    <div className="body-div">
      <Header />
      <main className="container logement-container">
        <div className="logement-banner">
          <img
            src={logement.pictures[currentImageIndex]}
            alt={`${logement.title} - ${currentImageIndex + 1}`}
            className="banner-image"
          />
          <img
            src={VectorLeft}
            alt="précédente"
            className="banner-arrow left"
            onClick={handlePreviousImage}
          />
          <img
            src={VectorRight}
            alt="suivante"
            className="banner-arrow right"
            onClick={handleNextImage}
          />
          {logement.pictures.length > 1 && (
            <div className="banner-indicator">
              {currentImageIndex + 1}/{logement.pictures.length}
            </div>
          )}
        </div>

        <div className="logement-infos d-md-flex align-items-center justify-content-between">
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

        <div className="dropdown-container row">
          <div className="col-md-6">
            <Dropdown title="Description" content={logement.description} isList={false} />
          </div>
          <div className="col-md-6">
            <Dropdown title="Équipements" content={logement.equipments} isList={true} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Logement;
