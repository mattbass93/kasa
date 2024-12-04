import React, { useState, useEffect } from "react";
import "./Logement.scss";
import { useParams, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown"; // Import du composant Dropdown
import { fetchLogements } from "../utils/api"; // Import de fetchLogements
import VectorLeft from "../assets/icons/vectorleft.png";
import VectorRight from "../assets/icons/vectorright.png";

function Logement() {
  const { id } = useParams(); // Récupère l'ID du logement depuis l'URL
  const [logement, setLogement] = useState(null); // État pour stocker les données du logement
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // État pour gérer l'index des images
  const [error, setError] = useState(null); // État pour gérer les erreurs

  // Récupération des données de logement
  useEffect(() => {
    const fetchData = async () => {
      try {
        const logements = await fetchLogements(); // Récupère tous les logements
        const logementData = logements.find((logement) => logement.id === id); // Filtre par ID
        if (!logementData) {
          throw new Error("Logement introuvable");
        }
        setLogement(logementData); // Met à jour les données du logement
      } catch (err) {
        setError(err.message); // Gère l'erreur
      }
    };

    fetchData();
  }, [id]);

  // Gestion des erreurs : redirection vers NotFound si le logement est introuvable
  if (error) {
    return <Navigate to="*" />;
  }

  // Affiche un état de chargement si le logement n'est pas encore chargé
  if (!logement) {
    return <p>Chargement...</p>;
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
