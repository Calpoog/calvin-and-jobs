import React from 'react';
import styles from './InfoBlock.module.scss';

function InfoBlock({ icon: Icon, title, children }) {
  return (
    <section className={`${styles.infoBlock} d-flex mb-3`}>
      <Icon className={`${styles.icon} flex-shrink-0`} />
      <div className='flex-fill ps-2' style={{ breakInside: 'avoid' }}>
        <h3 className={`${styles.title} fw-bold pb-2 mb-3`}>{title}</h3>
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
}

export default InfoBlock;
