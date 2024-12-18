import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
