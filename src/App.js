import React, {Component} from 'react';
import Header from './Components/Header/Header.js';
import About from './Components/About/About.js';
import Skills from './Components/Skills/Skills.js';
import Projects from './Components/Projects/Projects.js';
import Contact from './Components/Contact/Contact.js';
import Footer from './Components/Footer/Footer.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

