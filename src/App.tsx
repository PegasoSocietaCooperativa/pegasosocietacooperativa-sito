import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

// Componenti delle pagine
import Home from './pages/Home';
import Servizi from './pages/Servizi';
import Contatti from './pages/Contatti';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Giardinaggio from './pages/Services/Giardinaggio';

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>

        <Route path="/" index Component={Home} />
        <Route path="/servizi" Component={Servizi} />
        <Route path="/contatti" Component={Contatti} />
        <Route path="/servizi/giardinaggio" Component={Giardinaggio} />
        <Route path="/servizi/pulizie" Component={Servizi} />
        <Route path="/servizi/termoidraulica" Component={Servizi} />
        <Route path="/servizi/accessi" Component={Servizi} />
        <Route path="/servizi/tinterggiature" Component={Servizi} />
        <Route path="/servizi/edilizia" Component={Servizi} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
