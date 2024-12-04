import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown.jsx";
import "./About.scss";
import Banner from "../components/Banner.jsx";
import AboutBannerImage from "../assets/images/aboutbanner.png";
import aboutSections from "../data/AboutSections.js"; // Import des sections

function About() {
  return (
    <div className="body-div">
      <Header />
      <main className="about-container">
        <div>
          <Banner image={AboutBannerImage} />
        </div>
        <div className="container about-sections">
          {aboutSections.map((section, index) => (
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
