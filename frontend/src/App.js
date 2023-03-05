import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/"/>
      </Routes>
    </Router>

    </div>
  );
}

export default App;


/* 
This is default, later on import React libaries (Router), used to navigate through multi-page webapps
*/