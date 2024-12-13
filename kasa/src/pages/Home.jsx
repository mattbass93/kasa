import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Home.scss';
import Banner from "../components/Banner";
import { fetchLogements } from "../utils/api"; 
import HomeBannerImage from "../assets/images/homebanner.png";

function Home() {
    const [logements, setLogements] = useState([]); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchLogements();
                setLogements(data); 
            } catch (err) {
                setError("Impossible de charger les logements");
                console.error(err);
            }
        };

        fetchData();
    }, []); 

    if (error) {
        return <p>{error}</p>;
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
                  to={`/logement/${logement.id}`}
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

