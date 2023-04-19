import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './Pages/Login';
import { Games } from './Pages/Games';
import { Teams } from './Pages/Teams';
import { Players } from './Pages/Players';
import { Error } from './Pages/Error';
import { Navbar } from './components/Navbar';
import { Team } from './Pages/Team';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // track login status

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {loggedIn ? (
            <>
              <Route path="/" element={<Games />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/teams/:teamName" element={<Team />} />
              <Route path="/players" element={<Players />} />
            </>
          ) : (
            <Route
              path="/*"
              element={<Login onLogin={handleLogin} onLogout={handleLogout} />}
            />
          )}
          <Route path="/login" element={<Login onLogin={handleLogin} onLogout={handleLogout} />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



/* 
This is default, later on import React libaries (Router), used to navigate through multi-page webapps
*/