import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/styles/global.scss';
import Home from './pages/Home';
import About from './pages/About'
import Logement from './pages/Logement';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

