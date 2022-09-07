import React from 'react';
import styles from './InfoPane.module.scss';
import InfoBlock from '../InfoBlock/InfoBlock';
import { ReactComponent as ContactIcon } from '../../../../assets/icons/Location.svg';
import { ReactComponent as EducationIcon } from '../../../../assets/icons/Book.svg';
import { ReactComponent as ReferencesIcon } from '../../../../assets/icons/Thumbs Up.svg';
import { ReactComponent as SkillsIcon } from '../../../../assets/icons/Lightbulb.svg';
import { ReactComponent as SpillTop } from '../../../../assets/spill-top.svg';
import { ReactComponent as SpillBottom } from '../../../../assets/spill-bottom.svg';
import { SiGithub, SiNounproject, SiLinkedin } from 'react-icons/si';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import classNames from 'classnames';

function InfoPane() {
  return (
    <section
      className={`${styles.infoPane} h-100 pb-5 ps-3 pe-4 pt-6 ps-lg-4 pe-lg-6 d-flex flex-column`}
    >
      <div className={styles.spills}>
        <SpillTop className={styles.spillTop} />
        <SpillBottom className={styles.spillBottom} />
      </div>
      <div className='blocks row gx-6 gy-4'>
        <div className='col-12 col-sm-6 col-lg-12'>
          <InfoBlock icon={ContactIcon} title='Contact'>
            <address className='mb-2'>
              <p className='mb-0'>
                Columbus, OH
                <br />
                <a href='mailto: calpoog@gmail.com'>calpoog@gmail.com</a>
                <br />
                (•••) ••• - ••••
              </p>
            </address>
            <a
              className={classNames(styles.iconLink, 'me-2')}
              href='https://www.linkedin.com/in/calvin-goodman-25752067/'
            >
              <SiLinkedin />
            </a>
            <a
              className={classNames(styles.iconLink, 'me-2')}
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
          </InfoBlock>
        </div>
        <div className='col-12 col-sm-6 col-lg-12'>
          <InfoBlock icon={EducationIcon} title='Education'>
            <h4 className='fw-bold'>The Ohio State University</h4>
            <p>
              BS Computer Science and Engineering
              <br />
              3.905 GPA Summa Cum Laude
            </p>
          </InfoBlock>
        </div>
        <div className='col-12 col-sm-6 col-lg-12'>
          <InfoBlock icon={SkillsIcon} title='Skills'>
            <h4 className='fw-bold'>Design</h4>
            <p className='mb-4'>
              Figma, Sketch, Adobe XD, Illustrator, Photoshop, Wireframes,
              Design Systems, Iconography, Hand Sketching
            </p>
            <h4 className='fw-bold'>Development</h4>
            <p>
              Flutter, React, Angular, HTML, CSS, JavaScript, Source Control,
              AWS, Agile
            </p>
          </InfoBlock>
        </div>
        <div className='col-12 col-sm-6 col-lg-12'>
          <InfoBlock icon={ReferencesIcon} title='References'>
            <h4 className='fw-bold'>John Hoyt</h4>
            <p className='mb-4'>
              <i>Design Principal, Innovation</i>
              <br />
              hello@johnshermanhoyt.com
            </p>
            <h4 className='fw-bold'>Tom Quercia</h4>
            <p>
              <i>App Suite Tech Lead</i>
              <br />
              tomquercia@gmail.com
            </p>
          </InfoBlock>
        </div>
      </div>

      <ThemeSwitcher className='mt-4 mt-lg-auto' />
    </section>
  );
}

export default InfoPane;
