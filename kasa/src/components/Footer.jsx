import React from "react";
import KasaLogoBlackAndWhite from "../assets/logos/kasalogoblackandwhite.png";
import "./Footer.scss"

function Footer() {
    return (
      <footer className="text-white text-center mt-4 py-3 w-100">
        <img
          src={KasaLogoBlackAndWhite}
          alt="logo de Kasa en noir et blanc"
          className="footer-logo"
        />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }

export default Footer