import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import du composant Link
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Home.scss';
import Banner from "../components/Banner";
import { fetchLogements } from "../utils/api"; // Importez la fonction fetch
import HomeBannerImage from "../assets/images/homebanner.png";

function Home() {
    const [logements, setLogements] = useState([]); // État pour stocker les logements
    const [error, setError] = useState(null); // État pour gérer les erreurs

    useEffect(() => {
        // Chargez les données au montage du composant
        const fetchData = async () => {
            try {
                const data = await fetchLogements(); // Récupérez les logements via la fonction API
                setLogements(data); // Mettez à jour l'état avec les données récupérées
            } catch (err) {
                setError("Impossible de charger les logements");
                console.error(err);
            }
        };

        fetchData();
    }, []); // Exécutez uniquement au montage

    if (error) {
        return <p>{error}</p>; // Affichez un message d'erreur si nécessaire
    }

    return (
      <div className='body-div'>
        <Header />
        <main className="container">
          <Banner
            image={HomeBannerImage}
            title="Chez vous, partout et ailleurs"
          />
          <section className="logements-container">
            <div className="logements">
              {logements.map((logement) => (
                <Link
                  key={logement.id}
                  to={`/logement/${logement.id}`} // Utilisation de React Router
                  className="logement-card text-decoration-none"
                  style={{
                    backgroundImage: `url(${logement.cover})`,
                  }}
                >
                  <h3 className="fw-bold">{logement.title}</h3>
                </Link>
              ))}
            </div>
          </section>

        </main>
        <Footer />
      </div>
    );
}

export default Home;

