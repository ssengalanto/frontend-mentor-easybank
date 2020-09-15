/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo } from 'react';
import Link from 'next/link';
import { Button } from '../button';

import styles from './footer.module.scss';

export const Footer: React.FC = () => (
  <footer className="bg-secondary w-screen h-full">
    <div className="container mx-auto p-10">
      <div className="flex flex-col align-middle mb-8">
        <img src="/images/logo-b.svg" alt="logo" />
      </div>
      <Social />
      <Menu />
      <div className="flex justify-center">
        <Button className="mb-8">Request Invite</Button>
      </div>
      <p className="text-sm text-gray-600 text-center">© Easybank. All Rights Reserved</p>
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

const Menu: React.FC = () => {
  const menu = useMemo(
    () => ['About Us', 'Contact', 'Blog', 'Careers', 'Support', 'Privacy Policy'],
    [],
  );
  return (
    <nav className="mb-8">
      {menu.map((path) => (
        <Link href="/" key={path}>
          <a className="block text-center text-white">{path}</a>
        </Link>
      ))}
    </nav>
  );
};
