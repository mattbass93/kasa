import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown.jsx";
import './About.scss';
import Banner from "../components/Banner.jsx";
import AboutBannerImage from "../assets/images/aboutbanner.png";

function About() {
  const sections = [
    {
      title: "Fiabilité",
      content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content: "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
    },
    {
      title: "Sécurité",
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div className="body-div">
      <Header />
      <main className="about-container">
        <div>
          <Banner image={AboutBannerImage} />
        </div>
        <div className="container about-sections">
          {sections.map((section, index) => (
            <Dropdown
              key={index}
              title={section.title}
              content={section.content}
              isList={false} // Les sections ne contiennent pas de liste
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
