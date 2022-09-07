import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextOutline.module.scss';

function TextOutline({ className, children, strokeWidth = '1rem' }) {
  return (
    <span className={classNames(className, styles.textOutline)}>
      <span className={styles.fill}>{children}</span>
      <span
        aria-hidden
        className={styles.outline}
        style={{ WebkitTextStrokeWidth: strokeWidth }}
      >
        {children}
      </span>
    </span>
  );
}

TextOutline.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  strokeWidth: PropTypes.string,
};

export default TextOutline;
