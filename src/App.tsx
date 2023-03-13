import React from 'react';
import logo from './logo.svg';
// import './App.css';
import AsideNav from './components/AsideNav';
import Main from './components/Main';

function App() {
  return (
    <h1 className="h-screen grid grid-cols-[1fr_20fr]">
      <AsideNav />
      <Main />
    </h1>
  );
}

export default App;
