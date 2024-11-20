import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/styles/global.scss';
import Home from './pages/Home'; // Assurez-vous que Home.jsx existe
import Logement from './pages/Logement';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

