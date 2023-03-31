import './App.css';
import { Alt_Navbar } from './alt_components/Alt_Navbar';
import { Login }  from './Pages/Login';
import { Players } from './Pages/Players';
import { Games } from './Pages/Games';
import { Teams } from './Pages/Teams';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Error } from './Pages/Error'; 
import  {Navbar}   from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



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
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </Router>

    </div>
  );
}

export default App;


/* 
This is default, later on import React libaries (Router), used to navigate through multi-page webapps
*/