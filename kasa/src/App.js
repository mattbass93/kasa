import { Route, Routes, HashRouter } from 'react-router-dom';
import './assets/styles/global.scss';
import Home from './pages/Home';
import About from './pages/About'
import Logement from './pages/Logement';
import NotFound from './pages/NotFound';



function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

