import React, { useMemo } from 'react';
import styles from './articles.module.scss';

interface Article {
  title: string;
  author: string;
  content: string;
  src: string;
}

export const Articles: React.FC = () => {
  const contents: Article[] = useMemo(
    () => [
      {
        title: 'Receive money in any currency with no fees',
        author: 'Claire Robinson',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        src: '/images/image-currency.jpg',
      },
      {
        title: 'Treat yourself without worrying about money',
        author: 'Hunter Husky',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        src: '/images/image-restaurant.jpg',
      },

      {
        title: 'Take your Easybank card wherever you go',
        author: 'Ssen Galanto',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        src: '/images/image-plane.jpg',
      },

      {
        title: 'Our invite-only Beta accounts are now live!',
        author: 'Marla Nagera',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        src: '/images/image-confetti.jpg',
      },
    ],
    [],
  );

  return (
    <div className="w-screen h-full">
      <div className="container mx-auto px-5 md:px-10 py-16 flex flex-col">
        <div>
          <h1 className="mb-10 text-4xl text-secondary block text-center md:text-left">
            Latest Articles
          </h1>
          <div className="flex flex-col items-center md:flex-row md:items-stretch">
            {contents.map((props) => (
              <Card {...props} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Card: React.FC<Article> = ({ author, content, src, title }) => (
  <div className={`${styles.card} rounded overflow-hidden shadow-md`}>
    <img className={`${styles.img} w-full`} src={src} alt={title} />
    <div className="p-6">
      <span className="text-xs text-tertiary">By {author}</span>
      <h2 className="text-secondary font-medium text-sm my-2">{title}</h2>
      <p className="text-tertiary font-secondary text-xs">{content}</p>
    </div>
  </div>
);
