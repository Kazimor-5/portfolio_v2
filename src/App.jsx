// ! COMPONENTS
import About from './components/About/About';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <>
      <main className='main__container'>
        <HeroBanner />
        <About />
        <Projects />
      </main>
    </>
  );
};

export default App;
