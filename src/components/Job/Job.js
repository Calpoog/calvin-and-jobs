import styles from './Job.module.scss';

function Job({ title, company, start, end, children }) {
  return (
    <section className={`${styles.job} ps-4 ps-sm-7 pb-6`}>
      <h2
        className={`${styles.header} d-lg-flex mb-2 flex-wrap align-items-center`}
      >
        <div className={`${styles.title} fw-bold me-3`}>{title}</div>
        <div className='divider me-3 d-none d-lg-inline-block'></div>
        <div className={styles.company}>{company}</div>
      </h2>
      <div className={`${styles.tenure} pb-3 mt-3`}>
        {start} &mdash; {end}
      </div>
      <div className={styles.description}>{children}</div>
    </section>
  );
}

export default Job;
