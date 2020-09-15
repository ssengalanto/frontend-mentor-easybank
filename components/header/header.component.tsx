/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo } from 'react';
import Link from 'next/link';

import { Button } from '../button';

export const Header: React.FC = () => {
  const menu = useMemo(
    () => ['About Us', 'Contact', 'Blog', 'Careers', 'Support', 'Privacy Policy'],
    [],
  );
  return (
    <div className="w-screen shadow-md md:shadow-none bg-white z-50">
      <div className="container mx-auto p-5 md:py-3 flex justify-between items-center">
        <img src="/images/logo.svg" alt="Easybank" />
        <img className="h-full d md:hidden" src="/images/icon-hamburger.svg" alt="Burger Icon" />
        <nav className='hidden md:block'>
          {menu.map((path) => (
            <Link href="/" key={path}>
              <a className="text-sm font-normal text-tertiary mr-6">{path}</a>
            </Link>
          ))}
        </nav>
        <Button className="hidden md:block">Request Invite</Button>
      </div>
    </div>
  );
};
