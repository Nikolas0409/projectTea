/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import NavBar from './Ui/NavBar';

export default function App({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
