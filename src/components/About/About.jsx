// ! FILES
import React, { useEffect } from 'react';
import styles from './About.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const About = () => {
  const slideInTop = (element, delay, duration) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
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
        <h1>à propos</h1>
        <div className={styles.about__imgContainer} id='imgContainer'>
          <img
            src='./photo.jpg'
            alt='photo de Alexandre-Benoît Fontaine'
            className='img'
          />
        </div>
        <p>Développeur Front, JavaScript spécialisé React.</p>
      </article>
    </section>
  );
};

export default About;
