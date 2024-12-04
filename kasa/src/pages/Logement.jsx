import React, { useState, useEffect } from "react";
import "./Logement.scss";
import { useParams, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import ImageSlider from "../components/ImageSlider"; // Import du nouveau composant
import { fetchLogements } from "../utils/api";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const logements = await fetchLogements();
        const logementData = logements.find((logement) => logement.id === id);
        if (!logementData) {
          throw new Error("Logement introuvable");
        }
        setLogement(logementData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <Navigate to="*" />;
  }

  if (!logement) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="body-div">
      <Header />
      <main className="container logement-container">
        <ImageSlider images={logement.pictures} altText={logement.title} />
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
