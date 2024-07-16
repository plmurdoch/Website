import React from 'react';
import Navbar from './components/NavBar/navbar'
import Intro from './components/intro/intro'
import Skills from './components/skills/skills'
import Work from './components/experience/experience'
import School from './components/education/education'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Work/>
      <School/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
