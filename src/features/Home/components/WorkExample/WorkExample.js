import classNames from 'classnames';
import React from 'react';
import ViewportClass from '../ViewportClass';
import styles from './WorkExample.module.scss';

function WorkExample({ img, title, subtitle, children }) {
  return (
    <div className='workExample py-6 py-lg-8 py-xl-10'>
      <ViewportClass
        className='row gx-5 gx-lg-7 gx-xl-9 align-items-center'
        inClass={styles.in}
      >
        <div
          className={classNames(
            styles.preview,
            'preview col-12 col-md-6 mb-5 mb-md-0'
          )}
        >
          <img src={img} className='w-100' alt='' />
        </div>
        <div className='example col flex justify-content-center'>
          <div className='readingWidth'>
            <h3 className={classNames(styles.title, 'mb-0')}>{title}</h3>
            <p className={classNames('mb-4', 'fw-light', styles.subtitle)}>
              {subtitle}
            </p>
            <p className={styles.description}>{children}</p>
          </div>
        </div>
      </ViewportClass>
    </div>
  );
}

export default WorkExample;
