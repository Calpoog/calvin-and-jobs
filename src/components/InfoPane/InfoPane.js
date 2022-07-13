import SVG from 'react-inlinesvg';
import styles from './InfoPane.module.scss';
import contactIcon from '../../assets/icons/Location.svg';
import educationIcon from '../../assets/icons/Book.svg';
import InfoBlock from '../InfoBlock/InfoBlock';
import referencesIcon from '../../assets/icons/Thumbs Up.svg';
import skillsIcon from '../../assets/icons/Lightbulb.svg';
import spillTop from '../../assets/spill-top.svg';
import spillBottom from '../../assets/spill-bottom.svg';
import { SocialIcon } from 'react-social-icons';

function InfoPane() {
  return (
    <section
      className={`${styles.infoPane} pt-6 ps-lg-4 pe-lg-6 pb-5 h-100 px-3 mx-n3 mx-lg-0`}
    >
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
      <div className='row gx-6 gy-4'>
        <div className='col-12 col-sm-6 col-lg-12'>
          <InfoBlock icon={contactIcon} title='Contact'>
            <address className='mb-1'>
              <p className='mb-0'>
                Columbus, OH
                <br />
                calpoog@gmail.com
                <br />
                (•••) ••• - ••••
              </p>
            </address>
            <SocialIcon
              className='me-2'
              url='https://www.linkedin.com/in/calvin-goodman-25752067/'
            />
            <SocialIcon url='https://github.com/Calpoog' />
          </InfoBlock>
        </div>
        <div className='col-12 col-sm-6 col-lg-12'>
          <InfoBlock icon={educationIcon} title='Education'>
            <h4 className='fw-bold'>The Ohio State University</h4>
            <p>
              BS Computer Science and Engineering
              <br />
              3.905 GPA Summa Cum Laude
            </p>
          </InfoBlock>
        </div>
        <div className='col-12 col-sm-6 col-lg-12'>
          <InfoBlock icon={skillsIcon} title='Skills'>
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
        </div>
      </div>
    </section>
  );
}

export default InfoPane;
