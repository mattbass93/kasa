import KasaLogo from '../assets/logos/kasalogo.png'; // Chemin relatif
import KasaLogoBlackAndWhite from '../assets/logos/kasalogoblackandwhite.png';

import './Home.scss';
import logements from '../data/logements.json'; // Import des données JSON



function Home() {
    return (
      <div className='body-div'>
        <header className="container align-items-center">
          <h1 className="">
            <img className="img-fluid logo" src={KasaLogo} alt="Logo Kasa" />
          </h1>
          <nav className=" text-end">
            <ul className="d-flex justify-content-end align-items-center gap-3">
              <li><a href="/" className="nav-link">ACCUEIL</a></li>
              <li><a href="/about" className="nav-link">À PROPOS</a></li>
            </ul>
          </nav>
        </header>
      
        <main className="container">
          <div className="banner">
            <h2 className="fw-bold">Chez vous, partout et ailleurs</h2>
          </div>
          <section className="logements mt-4">
          {logements.map((logement) => (
            <a
              key={logement.id}
              href={`/logement/${logement.id}`} // Lien vers la page spécifique
              className="logement-card text-decoration-none" // Ajoute les classes nécessaires
            >
              <img
                className="logement-card-image"
                src={logement.cover}
                alt={logement.title}
              />
              <h3 className="fw-bold mt-2 ml-1">{logement.title}</h3>
            </a>
          ))}
        </section>

        </main>
      
        <footer className="text-white text-center mt-4 py-3 w-100">
            <img src={KasaLogoBlackAndWhite} alt="logo de Kasa en noir et blanc" className="footer-logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>

      </div>
          
      

        

    );
  }
  
  export default Home;
  