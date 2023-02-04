import './App.css';
import React from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Views/Home"
import About from "./Views/About"
import Contact from "./Views/Contact"
import Navbar from "./Components/Navbar.js"
import Footer from "./Components/Footer.js"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
