// ! FILES
import React, { useEffect, useRef } from 'react';
import styles from './SocialLinks.module.css';
import { FaGithub, FaLinkedin, FaPaperclip } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const SocialLinks = () => {
  const linkRef = useRef();

  const onLoad = () => {
    gsap.timeline().fromTo(
      '.links',
      {
        x: -100,
        opacity: 0,
        visibility: 'hidden',
      },
      {
        x: 0,
        opacity: 1,
        visibility: 'visible',
        stagger: 0.7,
        delay: 0.5,
      }
    );
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <article className={styles.article__socialLinks}>
      <ul className={styles.list__socialLinks_container} ref={linkRef}>
        <li className='links'>
          <a
            href='https://github.com/Kazimor-5'
            className={styles.anchor__socialLinks_btn}
          >
            <FaGithub className={styles.anchor__socialLinks_icons} />{' '}
            <span className={styles.anchor__socialLinks_span}>GitHub</span>
          </a>
        </li>
        <li className='links'>
          <a
            href='https://www.linkedin.com/in/alexandrebenoîtfontaine/'
            className={styles.anchor__socialLinks_btn}
          >
            <FaLinkedin className={styles.anchor__socialLinks_icons} />{' '}
            <span className={styles.anchor__socialLinks_span}>LinkedIn</span>
          </a>
        </li>
        <li className='links'>
          <a
            href='./documents/cv_alexandre_benoît_fontaine.pdf'
            download
            className={styles.anchor__socialLinks_btn}
          >
            <FaPaperclip className={styles.anchor__socialLinks_icons} />
            <span className={styles.anchor__socialLinks_span}>CV</span>
          </a>
        </li>
      </ul>
    </article>
  );
};

export default SocialLinks;
