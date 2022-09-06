import React from 'react';
import styles from './Home.module.scss';
import { ReactComponent as BigTree } from '../../assets/big-tree.svg';
import { ReactComponent as Desert } from '../../assets/desert.svg';
import { ReactComponent as AboutMe } from '../../assets/about-me.svg';
import { ReactComponent as MyWork } from '../../assets/my-work.svg';
import { ReactComponent as Quote1 } from '../../assets/quote1.svg';
import { ReactComponent as Quote2 } from '../../assets/quote2.svg';
import { ReactComponent as Quote3 } from '../../assets/quote3.svg';
import { ReactComponent as DescribeMe } from '../../assets/describe-me.svg';
import { ReactComponent as DescribeMeCalvin } from '../../assets/describe-me-calvin.svg';
import { ReactComponent as LeftArrow } from '../../assets/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../assets/right-arrow.svg';
import classNames from 'classnames';
import homespring from '../../assets/homespring.png';
import lasso from '../../assets/lasso.png';
import sudoku from '../../assets/sudoku.png';
import house from '../../assets/house.png';
import widget from '../../assets/widget.png';
import plants from '../../assets/plants.png';
import closet from '../../assets/closet.png';
import beans from '../../assets/beans.png';
import kirby from '../../assets/kirby.png';

import WorkExample from '../../components/WorkExample/WorkExample';
import Slider from 'react-slick';
import '../../assets/slick.css';
import { Link } from 'react-router-dom';

function Home() {
  const sliderConfig = {
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };

  return (
    <>
      <div className={styles.home}>
        <section className={classNames(styles.divider)}>
          <div className={classNames(styles.hero, 'px-md-6 px-lg-8')}>
            <div className={styles.heroContent}>
              <h1 className='fw-bold'>Calvin Goodman</h1>
              <h2 className={classNames(styles.slogan, 'mb-5')}>
                UX Design & Tech Leader
              </h2>
              <p className={styles.intro}>
                I work with smart people making smart new products, flexing
                between design and technology leadership. I am an evangelist for
                best practices in both design and development, as well as an
                advocate for the design process to developers and the
                development process to designers.
              </p>
            </div>
            <div className={styles.bigTree}>
              <BigTree />
            </div>
          </div>
        </section>

        <section className={classNames(styles.about, styles.divider)}>
          <div
            className={classNames(
              styles.contain,
              'px-4 px-md-6 px-lg-7 px-xl-8',
              'py-6 py-md-8 py-lg-10'
            )}
          >
            <div className='row gx-5 gx-lg-7 gx-xl-8 align-items-center'>
              <div className='col-12 col-lg-6 mb-5 mb-lg-0'>
                <AboutMe className={styles.me} />
              </div>
              <div className='col-12 col-lg-6 flex justify-content-center'>
                <div className={styles.readingWidth}>
                  <h2 className='mb-5'>About me</h2>
                  <p>
                    I’m Calvin–named after the greatest comic strip of all time,
                    Calvin & Hobbes. I like to believe that it’s not just
                    coincidence that I turned out inquisitive, skeptical, and
                    imaginative. Oh, and I also build some pretty great snow
                    sculptures.
                  </p>
                  <p>
                    I like to learn and do as much as I can. I spend most of my
                    free time creating in both the digital and physical spaces.
                    I’ve designed and built websites, apps, games, tools, chat
                    bots, doors, furniture, and entire closets.
                  </p>
                  <p>
                    In my work I believe that UX and technology are inextricably
                    linked. Curating a culture where professionals of each
                    discipline are heard and work cohesively is imperative to
                    delivering excellent experiences quickly and with quality.
                  </p>
                  <p>
                    Check out my full experience and education on my{' '}
                    <Link to='/resume'>resume</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={classNames(styles.desert, styles.divider, 'pt-8')}>
          <h2 className={classNames(styles.invert, 'px-4')}>
            A creative innovator at heart
          </h2>
          <Desert />
        </section>

        <section className={styles.work}>
          <div
            className={classNames(
              styles.workHeader,
              'pt-6',
              'mb-4 mb-sm-6 mb-lg-0'
            )}
          >
            <div className='row gx-0 justify-content-center'>
              <div className='col-12 col-sm-auto px-4 px-sm-0 justify-content-center d-flex align-items-center order-sm-2'>
                <h2 className='mb-0'>My work</h2>
              </div>
              <div className='col-auto order-sm-1'>
                <MyWork />
              </div>
            </div>
          </div>

          <div
            className={classNames(
              styles.work,
              styles.contain,
              'px-4 px-md-6 px-lg-7 px-xl-8',
              'pt-5 pb-7 pb-md-10'
            )}
          >
            <WorkExample
              img={homespring}
              title='HomeSpring'
              subtitle='Nationwide, UX Design Lead, 2022'
            >
              New homeowners are simultaneously faced with the biggest purchase
              of their lives and a massive increase in responsibility to
              maintain, and if they like, improve their home. With real, human
              virtual experts backing a hub of home ownership value, customers
              can reduce the anxiety of not knowing where to start–and how to
              keep momentum. Risk reduction for insurers and value as an add-on
              during the homebuying process make for an enticing SaaS
              opportunity for new business partners.
            </WorkExample>

            <WorkExample
              img={lasso}
              title='Project Lasso'
              subtitle='Nationwide, UX Design Lead, 2021'
            >
              When a member reaches a critical life-gate (nearing retirement,
              retirement, or switching jobs), they must make an important
              decision about what to do with their retirement dollars. Staying
              in plan may not always be an option, so rigorous education is
              necessary to guide them to a personalized solution. In addition, a
              Nationwide-first fully digital tool to roll money into a
              self-directed individual retirement account replaced a previously
              lengthy phone call. With a wealth of information, a goals
              assessment, and the rollover process, there was a significant
              increase in assets under management as well as an increase in
              contributions for those remaining in plan.
            </WorkExample>

            <WorkExample
              img={sudoku}
              title='Sudoku'
              subtitle='Personal, Flutter, 2022'
            >
              I got the itch to build a game using my favorite tools: Figma and
              Flutter. This was a personal exploration for me in visual
              minimalism and feature maximalism. A full human-technique (no
              brute force) solver generates genuinely tough puzzles, while a
              simple UI and clean animations provide a zen-like experience while
              the gears turn. Planned features include Sudoku game variants, a
              board-builder, and unique multiplayer modes.
            </WorkExample>
          </div>
        </section>

        <section className={styles.describe}>
          <div className={classNames(styles.work, 'pt-8')}>
            <h2
              className={classNames(
                styles.work,
                styles.contain,
                'px-4 px-md-6 px-lg-7 px-xl-8',
                'pt-8',
                'mb-8'
              )}
            >
              How others describe me
            </h2>

            <div className={styles.quotes}>
              <Slider className='mb-4' {...sliderConfig}>
                <blockquote>
                  <Quote1 />
                  <p>
                    The best part about working with Calvin is his ability to
                    speak to both sides of the design and implementation phases,
                    which allows him to bring a unique and invaluable
                    perspective on how the tech should support the designs - and
                    vice versa.
                  </p>
                </blockquote>
                <blockquote>
                  <Quote2 />
                  <p>
                    Both sides of the house will be happy with his expertise and
                    leadership in all aspects of user-facing software delivery.
                  </p>
                </blockquote>
                <blockquote>
                  <Quote3 />
                  <p>
                    Both sides of the house will be happy with his expertise and
                    leadership in all aspects of user-facing software delivery.
                  </p>
                </blockquote>
              </Slider>
            </div>
            <DescribeMe className={styles.people} />
          </div>
          <div className={styles.describeBottom}>
            <DescribeMeCalvin className={styles.calvin} />
          </div>
        </section>

        <section className={classNames(styles.care)}>
          <div
            className={classNames(
              styles.contain,
              'px-4 px-md-6 px-lg-7 px-xl-8',
              'py-8 py-lg-10'
            )}
          >
            <h2 className='mb-5'>Things I care about</h2>
            <p className='readingWidth mb-7 '>
              I bought a 1930 tudor-esque home in Columbus, Ohio. I wanted a
              home that had character and charm where expert tradesman gave
              effort crafting something specifically for a new homeowner. Many
              years and owners passed and various things changed or
              deteriorated. I’ve spent countless hours learning the history and
              skills needed to do repairs, crafting improvements, being a
              perfectionist, and making it mine–while retaining its
              authenticity. Maybe you see where this is going. These are the
              values and the blueprints for how I approach all of my work.
            </p>
            <div className={styles.things}>
              <div className={styles.thing}>
                <img
                  src={plants}
                  alt='Multiple plants on a mid-century credenza'
                />
                <p>Taking care of my plants</p>
              </div>
              <div className={classNames(styles.thing, styles.small)}>
                <img
                  src={widget}
                  alt='A brown, black, and white shepherd and labrador mix dog'
                />
                <p>My dog, Widget</p>
              </div>
              <div className={styles.thing}>
                <img src={house} alt='A tudor inspired Columbus home' />
                <p>Constantly improving</p>
              </div>
            </div>
            <div className={styles.things}>
              <div className={classNames(styles.thing, styles.small)}>
                <img
                  src={closet}
                  alt='A custom, floor to ceiling, built-in closet'
                />
                <p>Building things from scratch</p>
              </div>
              <div className={styles.thing}>
                <img
                  src={beans}
                  alt='A highly detailed pencil sketch of a black lab mix dog'
                />
                <p>Making art</p>
              </div>
              <div className={styles.thing}>
                <img
                  src={kirby}
                  alt='A 3D printer midway through constructing an orange Kirby figure'
                />
                <p>Creating</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
