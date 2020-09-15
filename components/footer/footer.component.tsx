/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo } from 'react';
import Link from 'next/link';
import { Button } from '../button';

import styles from './footer.module.scss';

export const Footer: React.FC = () => (
  <footer className="bg-secondary w-screen h-full">
    <div className="container mx-auto p-10 md:flex md:justify-between md:items-center">
      <div>
        <div className="flex flex-col items-center mb-8">
          <img src="/images/logo-b.svg" alt="logo" />
        </div>
        <Social />
      </div>
      <MenuMobile />
      <MenuDesktop />
      <div>
        <div className="flex justify-center">
          <Button className="mb-8">Request Invite</Button>
        </div>
        <p className="text-sm text-gray-600 text-center">© Easybank. All Rights Reserved</p>
      </div>
    </div>
  </footer>
);

const Social: React.FC = () => (
  <div className={`${styles.social} flex justify-center mb-8`}>
    <img src="/images/icon-facebook.svg" alt="facebook" />
    <img src="/images/icon-youtube.svg" alt="youtube" />
    <img src="/images/icon-twitter.svg" alt="twitter" />
    <img src="/images/icon-pinterest.svg" alt="pinterest" />
    <img src="/images/icon-instagram.svg" alt="instagram" />
  </div>
);

const MenuMobile: React.FC = () => {
  const menu = useMemo(
    () => ['About Us', 'Contact', 'Blog', 'Careers', 'Support', 'Privacy Policy'],
    [],
  );
  return (
    <nav className="mb-6 md:hidden">
      {menu.map((path) => (
        <Link href="/" key={path}>
          <a className="mb-3 block text-center text-sm text-white">{path}</a>
        </Link>
      ))}
    </nav>
  );
};

const MenuDesktop: React.FC = () => {
  const menu = useMemo(
    () => ['About Us', 'Contact', 'Blog', 'Careers', 'Support', 'Privacy Policy'],
    [],
  );

  const menu1 = [...menu].splice(0, menu.length / 2);
  const menu2 = [...menu].splice(menu.length / 2);

  return (
    <div className="hidden md:flex w-64 mr-auto ml-24">
      <nav className="mb-6 w-full">
        {menu1.map((path) => (
          <Link href="/" key={path}>
            <a className="mb-3 block text-sm text-white">{path}</a>
          </Link>
        ))}
      </nav>

      <nav className="mb-6 w-full">
        {menu2.map((path) => (
          <Link href="/" key={path}>
            <a className="mb-3 block text-sm text-white">{path}</a>
          </Link>
        ))}
      </nav>
    </div>
  );
};
