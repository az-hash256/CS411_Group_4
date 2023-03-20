import './App.css';
import { Navbar } from './components/Navbar';
import { Login }  from './Pages/Login';
import { Players } from './Pages/Players';
import { Games } from './Pages/Games';
import { Teams } from './Pages/Teams';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Games/>}/>
        <Route path="/teams" element={<Teams/>}/>
        <Route path="/players" element={<Players/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>

    </div>
  );
}

export default App;


/* 
This is default, later on import React libaries (Router), used to navigate through multi-page webapps
*/