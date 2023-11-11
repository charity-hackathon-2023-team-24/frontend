import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../ui/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
