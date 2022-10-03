import React from 'react';
import Typewriter from 'typewriter-effect';

const App = () => {
  return (
    <main className='main__container'>
      <section className='section__typewriter-container'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Moi c'est Alexandre-Benoît Fontaine.")
              .pauseFor(200)
              .typeString(` <strong>Développeur Front.</strong>`)
              .pauseFor(500)
              .deleteChars(6)
              .typeString('<strong>CSS.</strong>')
              .pauseFor(500)
              .deleteChars(4)
              .typeString('<strong>JavaScript.</strong>')
              .pauseFor(500)
              .deleteChars(11)
              .typeString('<strong>React.</strong>')
              .pauseFor(1000)
              .start();
          }}
          options={{ autoStart: true, loop: true }}
        />
      </section>
    </main>
  );
};

export default App;
