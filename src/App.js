import { useEffect } from 'react';
import InfoPane from './components/InfoPane/InfoPane';
import TimelinePane from './components/TimelinePane/TimelinePane';
import { SocialIcon } from 'react-social-icons';
import styles from './App.module.scss';

const themes = {
  wireframe: {
    'info-icon': 'black',
    'info-title': 'black',
    timeline: 'black',
    'timeline-bg': 'white',
    'info-pane': '#F6F6F6',
    'info-title-underline': '#E5E5E5',
    'illustration-bg': 'white',
    'illustration-outline': 'black',
    divider: '#D9D9D9',
  },
  peachBerry: {
    h1: '#3D0834',
    role: '#3D0834',
    'illustration-bg': 'white',
    'illustration-outline': '#3D0834',
    'info-pane': '#FFD9CD',
    'info-icon': '#3D0834',
    'info-title': '#3D0834',
    'info-title-underline': '#D79581',
    'info-subtitle': '#3D0834',
    'info-p': '#3D0834',
    timeline: '#3D0834',
    'timeline-p': 'black',
    'timeline-bg': '#FFFBFA',
    'job-title': '#990A60',
    tenure: '#6D6D6D',
    company: 'black',
    divider: '#FFD9CD',
  },
};

function App() {
  useEffect(() => onThemeChange('peachBerry'), []);

  function onThemeChange(t) {
    for (let color in themes[t]) {
      document.documentElement.style.setProperty(
        `--${color}-color`,
        themes[t][color]
      );
    }
  }

  return (
    <div className={styles.body}>
      {/* <button onClick={() => onThemeChange('blueSteel')}>Change</button> */}
      <div className='row gx-0'>
        <div className='col-12 col-lg-auto order-last order-lg-first'>
          <InfoPane />
        </div>
        <div className='col-12 col-lg order-first order-lg-last pb-5'>
          <TimelinePane />
          <div className='d-flex'>
            <div className={`${styles.seeCode} mx-auto`}>
              See the code on
              <SocialIcon
                className={`${styles.social} ms-1`}
                url='https://github.com/Calpoog/calvin-and-jobs'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
