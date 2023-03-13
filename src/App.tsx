import React from 'react';
import AsideNav from './components/AsideNav';
import Main from './components/Main';
import Modal from './components/Modal';

function App() {
  return (
    <h1 className="h-screen grid grid-cols-[1fr_20fr] relative">
      <AsideNav />
      <Main />
      <Modal />
    </h1>
  );
}

export default App;
