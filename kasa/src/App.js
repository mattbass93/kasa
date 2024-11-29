import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './assets/styles/global.scss';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import NotFound from './pages/NotFound';

// Créer un routeur avec le Future Flag activé
const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/logement/:id", element: <Logement /> },
    { path: "*", element: <NotFound /> }, // Route pour les 404
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true, // Active le Future Flag pour React Router v7
    },
  }
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
