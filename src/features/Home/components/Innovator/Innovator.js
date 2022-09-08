import classNames from 'classnames';
import React from 'react';
import { ReactComponent as Desert } from '../../../../assets/desert.svg';
import styles from './Innovator.module.scss';

function Innovator() {
  return (
    <div className={classNames(styles.desert, styles.divider, 'pt-8')}>
      <h2 className='px-4'>A creative innovator at heart</h2>
      <Desert />
    </div>
  );
}

export default Innovator;
