import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Animation.css'; // Create a separate CSS file for the animation styles

const Animation = ({ children, in: inProp, timeout = 300 }) => {
  return (
    <CSSTransition
      in={inProp}
      timeout={timeout}
      classNames="fade" // You can change this to any class name you prefer
      unmountOnExit
    >
      <div>{children}</div>
    </CSSTransition>
  );
};

export default Animation;
