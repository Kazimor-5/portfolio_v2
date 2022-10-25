// ! FILES
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import styles from './About.module.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const About = () => {
  const slideInTop = (element, delay, duration) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        visibility: 'hidden',
        y: -200,
      },
      {
        opacity: 1,
        visibility: 'visible',
        y: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: element,
          start: 'top center',
          end: 'bottom center',
        },
      }
    );
  };

  useEffect(() => {
    slideInTop('#imgContainer');
  }, []);

  return (
    <section className={styles.section__aboutContainer}>
      <article className={styles.article__about}>
        <div className={styles.about__imgContainer} id='imgContainer'>
          <img
            src='./photo.jpg'
            alt='photo de Alexandre-Benoît Fontaine'
            className='img'
          />
        </div>
        <h1>Développeur Front, JavaScript spécialisé React.</h1>
      </article>
    </section>
  );
};

export default About;
