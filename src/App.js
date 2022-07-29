import InfoPane from './components/InfoPane/InfoPane';
import TimelinePane from './components/TimelinePane/TimelinePane';
import styles from './App.module.scss';
import { SiFigma, SiGithub } from 'react-icons/si';
import Button from './components/Button/Button';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>Calvin Goodman</title>
      </Helmet>
      <div className={styles.body}>
        <div className='row gx-0'>
          <div className='col-12 col-lg-auto order-last order-lg-first'>
            <InfoPane />
          </div>
          <div className='col-12 col-lg order-first order-lg-last pb-5'>
            <TimelinePane />
            <div className='row justify-content-center gy-3 gy-lg-0'>
              <div className='col-auto'>
                <Button
                  url='https://github.com/Calpoog/calvin-and-jobs'
                  text='See the code on'
                  icon={SiGithub}
                ></Button>
              </div>
              <div className='col-auto'>
                <Button
                  url='https://www.figma.com/file/BpfsFZFSRlDvjf3ULNYOCG/Resume?node-id=0%3A1'
                  text='See the design on'
                  icon={SiFigma}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
