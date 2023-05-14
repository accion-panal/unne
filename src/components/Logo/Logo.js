import React from 'react';
import { Link } from 'react-router-dom';
import UnneLogo from '../../assets/img/logo/unne-logo.png';

const Logo = () => {
  return (
    <Link to="/">
      {UnneLogo && (
        <img src={UnneLogo} alt="unne-logo" width={115} height={80} />
      )}
    </Link>
  );
};

export default Logo;
