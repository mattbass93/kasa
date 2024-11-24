import Header from "../components/Header";
import Footer from "../components/Footer";
import './Home.scss';
import Banner from "../components/Banner";
import HomeBannerImage from "../assets/images/homebanner.png";
import logements from '../data/logements.json'; // Import des données JSON



function Home() {
    return (
      <div className='body-div'>
        <Header />
        <main className="container">
          <Banner
            image={HomeBannerImage}
            title="Chez vous, partout et ailleurs"
          />   
          <section className="logements mt-4">
            {logements.map((logement) => (
              <a
                key={logement.id}
                href={`/logement/${logement.id}`} // Lien vers la page spécifique
                className="logement-card text-decoration-none"
                style={{
                  backgroundImage: `url(${logement.cover})`,
                }}
              >
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
  