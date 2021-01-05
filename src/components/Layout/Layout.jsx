import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/navbar';

export const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};
