import React from "react";
import { Link } from "react-router-dom"; // Utiliser des liens pour React Router
import KasaLogo from "../assets/logos/kasalogo.png";

function Header() {
    return (
        <header className="container align-items-center">
          <h1 className="">
            <img className="img-fluid logo" src={KasaLogo} alt="Logo Kasa" />
          </h1>
          <nav className=" text-end">
            <ul className="d-flex justify-content-end align-items-center gap-3 gap-md-5 ">
            <li>
            <Link to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about">
              À Propos
            </Link>
          </li>
            </ul>
          </nav>
        </header>
    );
}

export default Header