import React from 'react';

import { Button } from '../button';

import styles from './banner.module.scss';

export const Banner: React.FC = () => (
  <>
    <div
      className={`${styles.bg} bg-right-top bg-no-repeat bg-cover md:bg-contain w-screen`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:order-2">
          <img className={styles.img} src="/images/image-mockups.png" alt="phones" />
        </div>
        <SloganDesktop />
      </div>
    </div>
    <SloganMobile />
  </>
);

const SloganMobile: React.FC = () => (
  <div className="p-5 flex flex-col md:hidden">
    <p className="font-semibold text-4xl text-secondary text-center">
      Next generation digital banking
    </p>
    <p className="block mt-4 text-center text-tertiary text-base font-secondary">
      Take your financial life online. Your Easybank account will be a one-stop-shop for spending,
      saving, budgeting, investing, and much more.
    </p>
    <div className="mt-5 flex justify-center">
      <Button>Request Invite</Button>
    </div>
  </div>
);

const SloganDesktop: React.FC = () => (
  <div className={`${styles.slogan} md:mt-24 p-5 hidden md:flex flex-col md:order-1`}>
    <div>
      <p className="font-semibold text-4xl md:text-5xl text-secondary text-center md:text-left">
        Next generation digital banking
      </p>
      <p className="block md:pr-2 xl:pr-24 mt-4 text-center md:text-left text-tertiary text-base font-secondary">
        Take your financial life online. Your Easybank account will be a one-stop-shop for spending,
        saving, budgeting, investing, and much more.
      </p>
      <div className="mt-5 flex justify-center md:justify-start">
        <Button>Request Invite</Button>
      </div>
    </div>
  </div>
);
