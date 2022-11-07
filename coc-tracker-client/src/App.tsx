import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/header/Header';
import MainLayout from './components/MainLayout';

function App() {
  const state = useSelector(state => state)
  console.log(state)
  return (
    <div className="bg-red-300">
      <Header />
      <MainLayout />
    </div>
  );
}

export default App;
