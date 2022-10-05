// ! COMPONENTS
import HeroBanner from './components/HeroBanner/HeroBanner';
import About from './components/About/About';
import SliderProjects from './components/Projects/SliderProjects/SliderProjects';
// ! FILES
import React from 'react';

const App = () => {
  return (
    <>
      <main className='main__container'>
        <HeroBanner />
        <About />
        <SliderProjects />
      </main>
    </>
  );
};

export default App;
