import React from 'react';
import Nav from './Nav/Nav';
import Intro from './Intro/Intro';
import TechStack from './TechStack/TechStack';
import './App.css';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Intro />
        <TechStack />
      </main>
    </>
  );
}
