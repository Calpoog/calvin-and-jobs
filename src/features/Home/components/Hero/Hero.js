import classNames from 'classnames';
import React from 'react';
import styles from './Hero.module.scss';

import { ReactComponent as BigTree } from '../../../../assets/big-tree.svg';
import { SiGithub, SiLinkedin, SiNounproject } from 'react-icons/si';

function Hero() {
  return (
    <div className={classNames(styles.hero, 'px-md-6 px-lg-8')}>
      <div className={styles.heroContent}>
        <h1 className='fw-bold'>Calvin Goodman</h1>
        <h2 className={classNames(styles.slogan, 'mb-5')}>
          UX Design & Tech Leader
        </h2>
        <p className={styles.intro}>
          I work with smart people making smart new products, flexing between
          design and technology leadership. I am an evangelist for best
          practices in both design and development, as well as an advocate for
          the design process to developers and the development process to
          designers.
        </p>
      </div>
      <div className={styles.bigTree}>
        <BigTree />
      </div>
      <div className={styles.contact}>
        <a
          href='mailto:calpoog@gmail.com?subject=Hi Calvin! From calvinandjobs.net'
          className={classNames(styles.button, 'me-3')}
        >
          Hire me
        </a>
        <a
          className={classNames(styles.iconLink, 'me-1')}
          href='https://www.linkedin.com/in/calvin-goodman-25752067/'
        >
          <SiLinkedin />
        </a>
        <a
          className={classNames(styles.iconLink, 'me-1')}
          href='https://github.com/Calpoog'
        >
          <SiGithub />
        </a>
        <a
          className={styles.iconLink}
          href='https://thenounproject.com/calpoog/'
        >
          <SiNounproject />
        </a>
      </div>
    </div>
  );
}

export default Hero;
