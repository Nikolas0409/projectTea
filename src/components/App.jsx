/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import NavBar from './Ui/NavBar';

export default function App({ children, user }) {
  return (
    <>
      <NavBar user={user} />
      <div>{children}</div>
    </>
  );
}
