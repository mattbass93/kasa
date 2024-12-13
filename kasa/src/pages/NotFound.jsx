import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import './NotFound.scss';

function NotFound() {
  return (
    <div className="body-div">
      <Header />
      <main className="notfound-container d-flex flex-column align-items-center text-center gap-5">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message ">Oups ! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="notfound-link">
          Retourner à la page d'accueil
        </Link>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;

  