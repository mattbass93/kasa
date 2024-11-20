import Header from "../components/Header";
import Footer from "../components/Footer";
import './Home.scss';
import logements from '../data/logements.json'; // Import des données JSON



function Home() {
    return (
      <div className='body-div'>
        <Header />
      
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
        <Footer />
      </div>
    );
  }
  
  export default Home;
  