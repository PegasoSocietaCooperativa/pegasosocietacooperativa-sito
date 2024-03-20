import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

// Componenti delle pagine
import Home from './pages/Home';
import Servizi from './pages/Servizi';
import Contatti from './pages/Contatti';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>

        <Route path="/" index Component={Home} />
        <Route path="/servizi" Component={Servizi} />
        <Route path="/contatti" Component={Contatti} />
      </Routes>

    </Router>
  );
}

export default App;
