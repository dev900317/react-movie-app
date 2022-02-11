import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../images/avatar.png';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h2 className="header__logo">Movie App</h2>
      </Link>
      <div className="header__user-img">
        <img src={avatar} alt="user" />
      </div>
    </div>
  );
};

export default Header;
