// ! FILES
import React, { useEffect, useRef } from 'react';
import styles from './Competence.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Competence = () => {
  const slideInLeft = (element, delay, duration) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom center',
        },
      }
    );
  };

  const slideInRight = (element, delay, duration) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom center',
        },
      }
    );
  };

  useEffect(() => {
    slideInLeft('#paragraph1');
  }, []);

  useEffect(() => {
    slideInRight('#paragraph2');
  }, []);

  useEffect(() => {
    slideInLeft('#paragraph3');
  }, []);

  return (
    <section className={styles.section__competenceContainer}>
      <article className={styles.article__competence}>
        <h2>Mes compétences</h2>
        <p id='paragraph1'>
          Ayant appris les principaux langages web durant ma formation, je
          maîtrise HTML/CSS et JavaScript.
        </p>
        <p id='paragraph2'>
          Mon environnement de travail se constitue de l&apos;éditeur de code
          Visual Studio Code, GitHub et la librairie Reactjs.
        </p>
        <p id='paragraph3'>
          Je suis en train d&apos;apprendre le framework JavaScript Nextjs.
        </p>
      </article>
    </section>
  );
};

export default Competence;
