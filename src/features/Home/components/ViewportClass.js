import classNames from 'classnames';
import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import PropTypes from 'prop-types';

function ViewportClass({ className, inClass, children }) {
  const myRef = useRef();
  const { inViewport, enterCount } = useInViewport(myRef, { threshold: 0.25 });

  console.log(enterCount);

  return (
    <div
      className={classNames(className, {
        [inClass]: inViewport || enterCount > 0,
      })}
      ref={myRef}
    >
      {children}
    </div>
  );
}

ViewportClass.propTypes = {
  className: PropTypes.string,
  inClass: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default ViewportClass;
