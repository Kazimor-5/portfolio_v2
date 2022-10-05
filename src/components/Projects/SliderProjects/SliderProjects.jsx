// ! COMPONENTS
import SlideProjects from '../SlideProjects/SlideProjects';
// ! FILES
import React, { useEffect, useState } from 'react';
import styles from './SliderProjects.module.css';
import { projects } from '../data';

const SliderProjects = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index > projects.length - 1) {
      setIndex(0);
    }
    if (index < 0) {
      setIndex(projects.length - 1);
    }
  }, [index]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className={styles.section__sliderProjects}>
      <h2>Projets</h2>
      <article className={styles.article__sliderProjects}>
        {projects.map((project, i) => {
          let position = `next__slide`;

          if (i === index) {
            position = `active__slide`;
          }

          if (i === index - 1 || (index === 0 && i === project.length - 1)) {
            position = `prev__slide`;
          }

          return (
            <SlideProjects
              key={project.id}
              project={project}
              position={position}
            />
          );
        })}
      </article>
    </section>
  );
};

export default SliderProjects;
