import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './About.scss';
import Vector from "../assets/icons/vector.png"; // Assure-toi que le chemin est correct
import Banner from "../components/Banner.jsx";
import AboutBannerImage from "../assets/images/aboutbanner.png";

function About() {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    { title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale." },
    { title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa." },
    { title: "Service", content: "Nos équipes restent à votre disposition pour assurer une expérience parfaite." },
    { title: "Sécurité", content: "La sécurité est notre priorité, tant pour nos hôtes que pour les voyageurs." },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index); // Ouvre ou ferme la section
  };

  return (
    <div className="body-div">
      <Header />
      <main className="about-container">
      <div>
      <Banner
        image={AboutBannerImage}
      />
      {/* Autres contenus de la page */}
    </div>
        <div className="about-sections">
          {sections.map((section, index) => (
            <div key={index} className="about-section">
              <button
                className="about-button"
                onClick={() => toggleSection(index)}
              >
                {section.title}
                <img
                  src={Vector}
                  alt="Icône pour dérouler ou replier"
                  className={`vector-icon ${openSection === index ? "rotate" : ""}`}
                />
              </button>
              <div className={`about-content ${openSection === index ? "open" : ""}`}>
                <p>{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;



  