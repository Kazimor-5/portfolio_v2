import React from 'react';
import styles from './SlideProjects.module.css';

const SlideProjects = ({ project, position }) => {
  const { name, id, text, img, link, gitlink } = project;

  return (
    <div key={id} className={`${styles.slide__Projects} ${position}`}>
      <h3>{name}</h3>
      <div className={styles.slideProject__imgContainer}>
        <img src={img} alt={name} className='img' />
      </div>
      <p>{text}</p>
      <div className={styles.slideProjects__btnContainer}>
        {gitlink ? <a href={gitlink}>Lien GitHub</a> : ''}
        {link ? <a href={link}>Lien du site</a> : ''}
      </div>
    </div>
  );
};

export default SlideProjects;
