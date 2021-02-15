import React from 'react';
import Nav from './Nav/Nav';
import Intro from './Intro/Intro';
import './App.css';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Intro />
      </main>
    </>
  );
}
