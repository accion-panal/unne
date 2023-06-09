import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Fab from '../SocialMediaFloating/Fab';

const Layout = ({ children }) => {
  return (
    <div className="relative mt-16 xl:mt-24 overflow-hidden w-100 bg-white">
      {/* HEADER PAGE */}
      <Header />

      {/* MAIN CONTENT */}
      {children}

      {/* FOOTER PAGE */}
      <Footer />

      {/* SOCIAL MEDIA FLOATER */}
      <Fab />
    </div>
  );
};

export default Layout;
