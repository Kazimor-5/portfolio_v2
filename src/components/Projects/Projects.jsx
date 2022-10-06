// ! FILES
import React, { useEffect, useRef } from 'react';
import styles from './Projects.module.css';
import { projects } from './data';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Projects = () => {
  const gridRef = useRef();

  const onLoad = () => {
    gsap.timeline().fromTo(
      '.project',
      {
        y: -100,
        opacity: 0,
        visibility: 'hidden',
      },
      {
        y: 0,
        opacity: 1,
        visibility: 'visible',
        stagger: 1,
        delay: 0.5,
      }
    );
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <section className={styles.section__projectsContainer} ref={gridRef}>
      <h2>Projets</h2>
      {projects.map((project) => {
        const { id, name, text, img, link, gitlink } = project;
        return (
          <article key={id} className={`${styles.article__project} project`}>
            <h3>{name}</h3>
            <div className={styles.project__imgContainer}>
              <img src={img} alt={name} className='img' />
            </div>
            <p className={styles.project__paragraph}>{text}</p>
            <div className={styles.project__btnContainer}>
              {gitlink ? (
                <a href={gitlink} className={styles.project__btn}>
                  GitHub
                </a>
              ) : (
                ''
              )}
              {link ? (
                <a href={link} className={styles.project__btn}>
                  Site
                </a>
              ) : (
                ''
              )}
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Projects;
