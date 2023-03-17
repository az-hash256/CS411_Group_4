import './App.css';
import { Navbar } from './components/Navbar';
import { Login }  from './Pages/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/"/>
        <Route path="/teams"/>
        <Route path="/players"/>
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