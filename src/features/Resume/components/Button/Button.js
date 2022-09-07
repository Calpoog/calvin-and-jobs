import React from 'react';
import styles from './Button.module.scss';

function Button({ icon: Icon, text, url }) {
  const content = (
    <>
      <span>{text}</span>
      {Icon ? <Icon className='flex-shrink-0 ms-2' /> : null}
    </>
  );

  return url ? (
    <a className={styles.button} href={url}>
      {content}
    </a>
  ) : (
    <button className={styles.button}>{content}</button>
  );
}

export default Button;
