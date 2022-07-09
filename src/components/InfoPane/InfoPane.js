import styles from './InfoPane.module.scss';
import InfoBlock from '../InfoBlock/InfoBlock';
import SVG from 'react-inlinesvg';
import illustration from '../../assets/illustration.svg';
import spillTop from '../../assets/spill-top.svg';
import spillBottom from '../../assets/spill-bottom.svg';
import contactIcon from '../../assets/icons/Location.svg';
import educationIcon from '../../assets/icons/Book.svg';
import skillsIcon from '../../assets/icons/Lightbulb.svg';
import referencesIcon from '../../assets/icons/Thumbs Up.svg';
import classNames from 'classnames';

function InfoPane() {
  return (
    <section
      className={classNames(styles.infoPane, 'ps-4', 'pe-6', 'pb-5', 'h-100')}
    >
      <SVG
        width='100%'
        height={undefined}
        className={classNames(styles.illustration, 'pb-5')}
        src={illustration}
      />
      <SVG
        width={undefined}
        height={undefined}
        className={styles.spillTop}
        src={spillTop}
      />
      <SVG
        width={undefined}
        height={undefined}
        className={styles.spillBottom}
        src={spillBottom}
      />
      <InfoBlock icon={contactIcon} title='Contact'>
        <address>
          <p>
            Columbus, OH
            <br />
            calpoog@gmail.com
            <br />
            ***REMOVED***
          </p>
        </address>
      </InfoBlock>
      <InfoBlock icon={educationIcon} title='Education'>
        <h4 className='fw-bold'>The Ohio State University</h4>
        <p>
          BS Computer Science and Engineering
          <br />
          3.905 GPA Summa Cum Laude
        </p>
      </InfoBlock>
      <InfoBlock icon={skillsIcon} title='Skills'>
        <h4 className='fw-bold'>Design</h4>
        <p className='mb-4'>
          Figma, Sketch, Adobe XD, Illustrator, Photoshop, Wireframes, Design
          Systems, Iconography, Hand Sketching
        </p>
        <h4 className='fw-bold'>Development</h4>
        <p>
          Flutter, React, Angular, HTML, CSS, JavaScript, Source Control, AWS,
          Agile
        </p>
      </InfoBlock>
      <InfoBlock icon={referencesIcon} title='References'>
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
    </section>
  );
}

export default InfoPane;
