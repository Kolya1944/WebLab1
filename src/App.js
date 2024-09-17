import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <MainContent />
      <MyComponent />
      <Footer />
    </div>
  );
}

export default App;
