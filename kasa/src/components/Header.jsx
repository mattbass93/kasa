import React from "react";
import './Header.scss'
import { NavLink } from "react-router-dom";
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
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              A Propos
            </NavLink>
          </li>
            </ul>
          </nav>
        </header>
    );
}

export default Header