import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as AboutMe } from '../../../../assets/about-me.svg';
import ViewportClass from '../ViewportClass';
import styles from './About.module.scss';

function About() {
  return (
    <div
      className={classNames(
        styles.about,
        'contain',
        'px-4 px-md-6 px-lg-7 px-xl-8',
        'py-6 py-md-8 py-lg-10'
      )}
    >
      <ViewportClass
        className='row gx-5 gx-lg-7 gx-xl-8 align-items-center'
        inClass={styles.in}
      >
        <div className='col-12 col-lg-6 mb-5 mb-lg-0'>
          <AboutMe className={styles.me} />
        </div>
        <div className='col-12 col-lg-6 flex justify-content-center'>
          <div className={styles.readingWidth}>
            <h2 className={classNames(styles.title, 'mb-5')}>About me</h2>
            <p>
              I’m Calvin–named after the greatest comic strip of all time,
              Calvin & Hobbes. I like to believe that it’s not just coincidence
              that I turned out inquisitive, skeptical, and imaginative. Oh, and
              I also build some pretty great snow sculptures.
            </p>
            <p>
              I like to learn and do as much as I can. I spend most of my free
              time creating in both the digital and physical spaces. I’ve
              designed and built websites, apps, games, tools, chat bots, doors,
              furniture, and entire closets.
            </p>
            <p>
              In my work I believe that UX and technology are inextricably
              linked. Curating a culture where professionals of each discipline
              are heard and work cohesively is imperative to delivering
              excellent experiences quickly and with quality.
            </p>
            <p>
              Check out my full experience and education on my{' '}
              <Link to='/resume'>resume</Link>.
            </p>
          </div>
        </div>
      </ViewportClass>
    </div>
  );
}

export default About;
