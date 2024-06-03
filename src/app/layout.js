import React from 'react';

import Header from '../components/Header';

import './styles.css';

import MuteContextProvider from '../components/MuteContextProvider';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MuteContextProvider>
          <Header />
          {children}
        </MuteContextProvider>
        <footer>
          <img src="/ie-badge.gif" width={100} />
          <span>Thanks for visiting!</span>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
