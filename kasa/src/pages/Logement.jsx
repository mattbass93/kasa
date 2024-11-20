import React, {useState} from "react";
import './Logement.scss'
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logements from "../data/logements.json";
import Vector from "../assets/icons/vector.png";

function Logement() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);
  
    // Gestion de l'affichage des dropdowns
    const [isDescriptionOpen, setDescriptionOpen] = useState(false);
    const [isEquipmentsOpen, setEquipmentsOpen] = useState(false);
  
    if (!logement) {
      return <p>Logement introuvable</p>;
    }
  
    return (
      <div className="body-div">
        <Header />
        <main className="container logement-container">

          <img
            className="logement-banner"
            src={logement.cover}
            alt={logement.title}
          />
  

  <div className="logement-info">
  <div>
    <h1 className="logement-title">{logement.title}</h1>
    <p className="logement-location">{logement.location}</p>
  </div>
</div>

    {/* Conteneur commun pour aligner tags et logement-meta */}
    <div className="logement-details d-md-flex justify-content-between align-items-center">
      {/* Tags à gauche */}
      <div className="tags">
        {logement.tags.map((tag, index) => (
          <span key={index} className="tag fw-bold">
            {tag}
          </span>
        ))}
      </div>

      {/* Logement Meta à droite */}
      <div className="logement-meta d-flex justify-content-between align-items-center flex-md-column">
        <div className="rating order-md-2">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={index < logement.rating ? "star filled" : "star"}
            >
              ★
            </span>
          ))}
        </div>
        <div className="host d-flex align-items-center mt-md-0">
          <p>{logement.host.name}</p>
          <img
            src={logement.host.picture}
            alt={logement.host.name}
            className="host-picture"
          />
        </div>
      </div>
    </div>




    <div className="row dropdown-container">
  <div className="col-md-6">
    {/* Dropdown Description */}
    <div className={`dropdown ${isDescriptionOpen ? "open" : ""}`}>
      <button
        className="dropdown-button"
        onClick={() => setDescriptionOpen(!isDescriptionOpen)}
      >
        Description
        <img src={Vector} alt="Afficher ou masquer la description" />
      </button>
      <div className="dropdown-content">
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
        <img src={Vector} alt="Afficher ou masquer les équipements" />
      </button>
      <div className="dropdown-content">
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

