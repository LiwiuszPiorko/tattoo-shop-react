import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';


function App() {
  return (
    <Router>
    <div className="App">
      <navigation>
        {<Navigation />}
      </navigation>
      <header>
        {<Header />}
      </header>
      <footer>
        {<Footer />}
      </footer>
    </div>
    </Router>
  );
}

export default App;
