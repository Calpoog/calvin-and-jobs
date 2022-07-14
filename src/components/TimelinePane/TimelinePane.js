import Job from '../Job/Job';
import styles from './TimelinePane.module.scss';
import { ReactComponent as Illustration } from '../../assets/illustration.svg';

function TimelinePane() {
  return (
    <main className={`${styles.timelinePane} pt-5 px-4 ps-lg-0`}>
      <Illustration className={`${styles.illustration} ms-sm-7 pb-5 me-lg-6`} />
      <section className={`${styles.intro} ps-4 ps-sm-7 pb-4`}>
        <header>
          <h1 className={`${styles.name} fw-bold mb-3`}>Calvin Goodman</h1>
          <h2
            className={`${styles.tagline} d-flex flex-wrap align-items-center mb-5`}
          >
            <span>UX Designer</span>
            <span className='divider mx-3'></span>
            <span>Tech Leader</span>
          </h2>
        </header>
        <div className={styles.introBody}>
          <p>
            I enjoy blurring the lines between technology and design. Deep
            knowledge of both disciplines leads to up-front reduction in time
            spent by navigating and parallelizing circular dependencies in
            requirements gathering and strategy. Tactical communication and
            translation skill eliminates often-hazardous channels between the
            design and development process. Pair that with expertise which
            drills into low level design and development implementation and
            there are more efficiencies to be gained.
          </p>
          <p>
            Understanding the problem, creative solutions, design, UX,
            architecture, development, upskilling, micro interactions,
            analytics, and more—I like to solve challenges.
          </p>
        </div>
      </section>

      <div className='jobs'>
        <Job
          title='UX Design Lead, Creative Technologist'
          company='Nationwide'
          start='Apr 2015'
          end='Present'
        >
          <p>
            UX lead and technology lead on multiple Innovation pods gathering
            requirements, working with 3rd parties, creating designs,
            architecting backends, implementing challenging solutions, managing
            and upskilling new teams of developers. Consultation provided across
            additional Innovation pods.
          </p>
          <p>
            Subject matter expert and design library implementer on both the
            hybrid Mobile Flagship application and Flutter rewrite. Later, led
            the creation, implementation, and documentation of a new mobile
            design system.
          </p>
          <p>
            Worked in various design and technology capacities across many
            enterprise spaces such as Nationwide.com, strategy/experience
            principles, IT Strategy, Innovation, and Mobile.
          </p>
        </Job>
        <Job
          title='User Experience Designer'
          company='Abercrombie & Fitch'
          start='Dec 2013'
          end='Apr 2015'
        >
          <p>
            Developed ideas, concepts, wireframes and prototypes for a wide
            range of deliverables including functional experiential product
            pages, site navigation, checkout user flows, internal tools, A/B
            tests and e-commerce feature sets.
          </p>
          <p>
            Pioneered the creative technologist role and worked to upskill
            front-end engineers.
          </p>
        </Job>
        <Job
          title='Front End Developer'
          company='Codapt LLC'
          start='Feb 2013'
          end='Sep 2013'
        ></Job>
        <Job
          title='Software Developer (Co-op)'
          company='Chemical Abstracts Services'
          start='Feb 2012'
          end='March 2013'
        ></Job>
      </div>
    </main>
  );
}

export default TimelinePane;
