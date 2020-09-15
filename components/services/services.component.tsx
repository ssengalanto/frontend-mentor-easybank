import React, { useMemo } from 'react';
import styles from './services.module.scss';

export const Services: React.FC = () => {
  const contents: Array<{ title: string; content: string; src: string }> = useMemo(
    () => [
      {
        title: 'Online Banking',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        src: '/images/icon-online.svg',
      },
      {
        title: 'Simple Budgeting',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        src: '/images/icon-online.svg',
      },

      {
        title: 'Fast Onboarding',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        src: '/images/icon-online.svg',
      },

      {
        title: 'Open API',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        src: '/images/icon-online.svg',
      },
    ],
    [],
  );

  return (
    <div className="bg-gray-100 w-screen h-full">
      <div className="container mx-auto px-10 py-16 flex flex-col">
        <div className="mb-12">
          <h2 className="text-4xl text-secondary block mb-4 text-center md:text-left">
            Why choose Easybank?
          </h2>
          <p className="text-tertiary leading-8 text-center md:text-left">
            We leverage Open Banking to turn your bank account into your financial hub. <br />
            Control your finances like never before.
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          {contents.map(({ title, content, src }) => (
            <div className={`${styles.services}`}>
              <div className="flex justify-center md:justify-start">
                <img src={src} alt={title} />
              </div>
              <p className="text-xl text-secondary capitalize font-medium my-5 text-center md:text-left">
                {title}
              </p>
              <p className="text-sm text-tertiary   text-center md:text-left">
                {content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
