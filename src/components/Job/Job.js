import classNames from 'classnames';
import styles from './Job.module.scss';

function Job({ title, company, start, end, children }) {
  return (
    <section className={classNames(styles.job, 'ps-7', 'pb-6')}>
      <h2
        className={classNames(
          styles.title,
          'd-flex',
          'mb-2',
          'flex-wrap',
          'align-items-center'
        )}
      >
        <span className={classNames(styles.title, 'fw-bold')}>{title}</span>
        <span className='divider mx-3'></span>
        <span className={styles.company}>{company}</span>
      </h2>
      <div className={classNames(styles.tenure, 'pb-3')}>
        {start} &mdash; {end}
      </div>
      <div className={styles.description}>{children}</div>
    </section>
  );
}

export default Job;
