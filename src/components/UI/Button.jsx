import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({ children, to, onClick, variant = 'primary', type = 'button' }) => {
  const className = `mv-btn mv-btn--${variant}`;
  if (to) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;