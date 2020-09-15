import React from 'react';
import { Button } from '../button';

export const Header: React.FC = () => (
  <div className="w-screen shadow-md md:shadow-none bg-white z-50">
    <div className="container mx-auto p-5 md:py-3 flex justify-between items-center">
      <img src="/images/logo.svg" alt="Easybank" />
      <img className="h-full d md:hidden" src="/images/icon-hamburger.svg" alt="Burger Icon" />
      <Button className="hidden md:block">Request Invite</Button>
    </div>
  </div>
);
