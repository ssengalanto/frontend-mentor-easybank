import React from 'react';

export const Header: React.FC = () => (
  <div className="w-screen shadow-md md:shadow-none">
    <div className="container mx-auto p-5 flex justify-between items-center">
      <img src="/images/logo.svg" alt="Easybank" />
      <img className="h-full d md:hidden" src="/images/icon-hamburger.svg" alt="Burger Icon" />
    </div>
  </div>
);
