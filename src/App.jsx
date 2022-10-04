// ! COMPONENTS
import HeroBanner from './components/HeroBanner/HeroBanner';
import About from './components/About/About';
import Competence from './components/Competence/Competence';
import Projects from './components/Projects/Projects';
// ! FILES
import React from 'react';

const App = () => {
  return (
    <main className='main__container'>
      <HeroBanner />
      <About />
      <Competence />
      <Projects />
    </main>
  );
};

export default App;
