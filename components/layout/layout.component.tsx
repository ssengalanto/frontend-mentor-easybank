import React from 'react';

export const Layout: React.FC = ({ children }) => (
  <div
    className="min-h-screen min-w-full flex flex-col items-center"
    style={{ overflowX: 'hidden' }}
  >
    {children}
  </div>
);
