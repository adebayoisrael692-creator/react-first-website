import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
const SIZES = ['btn--medium', 'btn--large'];

export function Button({
  children,
  onClick,
  buttonStyle = 'btn--primary',
  buttonSize = 'btn--medium',
  to = '/sign-up',
  className = '',
}) {
  const safeStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const safeSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link
      to={to}
      className={`btn btn-mobile ${safeStyle} ${safeSize} ${className}`.trim()}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
