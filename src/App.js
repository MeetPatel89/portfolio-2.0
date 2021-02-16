import React from 'react';
import Nav from './Nav/Nav';
import Intro from './Intro/Intro';
import TechStack from './TechStack/TechStack';
import About from './About/About';
import Projects from './Projects/Project';
import './App.css';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Intro />
        <TechStack />
        <About />
        <Projects />
      </main>
      <footer>
        <span>MEET PATEL &#169;2021</span>
      </footer>
    </>
  );
}
