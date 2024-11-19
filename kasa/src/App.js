import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/styles/global.scss';
import Home from './pages/Home'; // Assurez-vous que Home.jsx existe
import About from './pages/About'; // Assurez-vous que About.jsx existe
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        {/* Ajoutez d’autres routes si nécessaire */}
      </Routes>
    </Router>
  );
}

export default App;

