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
            UX Design &amp; Tech Leader
          </h2>
        </header>
        <div className={styles.introBody}>
          <p>
            I enjoy blurring the line between technology and design. My deep
            knowledge of both disciplines leads to up-front reduction in
            requirements gathering and strategy. In addition, it provides a
            smoother communication channel and a breakdown of any “language
            barrier” between designer and developer. Pair that with expertise
            which drills into low level design and development implementation
            and there are more efficiencies to be gained. I am an evangelist for
            best practices in both design and development, as well as an
            advocate for the design process to developers and the development
            process to designers.
          </p>
          <p>
            Understanding the problem, creative solutions, design and design
            systems, UX, architecture, development, upskilling, micro
            interactions, analytics, and more—I like to solve challenges.
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
            As the UX and technology lead, I support innovation pods on product
            design and in-market testing. I work with third parties, create
            designs, architect backends, and implement challenging solutions. I
            coach and upskill a team of 6+ developers. I also provide
            consultation across the entire innovation organization, supporting
            over 5 pods (and 7 products) to date.
          </p>
          <p>
            In addition to the innovation organization, I support design
            implementation of the Mobile Flagship application, with 5 years of
            subject matter expertise support. Currently I facilitate both the UX
            design process creating a new mobile design system as well as coach
            a rotating team of mobile engineers. With these two capacities, I
            aid in communication between these groups and spearhead the creation
            of a design system documentation application containing resources
            for all discliplines.
          </p>
          <p>
            I am an important voice in the recent organizational switch of
            multiple design programs to Figma. I coach a group of 10+ early
            adopters on Figma techniques and best practices from both the UX
            design and content strategy disciplines. I champion the use of good
            Figma development hand off methods and work with developers to
            consume designs.
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
