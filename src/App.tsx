import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

// Componenti delle pagine
import Home from './pages/Home';
import Servizi from './pages/Servizi';
import Contatti from './pages/Contatti';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <Router>
      <NavBar />
      <SpeedInsights />
      <Routes>

        <Route path="/" index Component={Home} />
        <Route path="/servizi" Component={Servizi} />
        <Route path="/contatti" Component={Contatti} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
