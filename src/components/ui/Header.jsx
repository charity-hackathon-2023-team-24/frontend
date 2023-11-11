import React from 'react';
import { useNavigate } from 'react-router-dom';

import routes from '../../routes';

const Header = () => {
  const nav = useNavigate();

  const handleClick = () => {
    nav(routes.rootPage);
  };

  return (
    <header>
      <a onClick={handleClick} href={routes.rootPage}>
        {/* <img src={logo} alt='logo' width={230} height={60} /> */}
      </a>
    </header>
  );
};

export default Header;
