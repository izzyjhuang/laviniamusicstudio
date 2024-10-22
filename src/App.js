// App.js

import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Homepage from './Home';

function App() { 
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  return (
    <Router>
      <div className="App">
        <Header selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
        
        <Routes>
          <Route path="/" element={<Home selectedLanguage={selectedLanguage} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

const Home = ({ selectedLanguage }) => (
  <div>
    <Homepage selectedLanguage={selectedLanguage} />
  </div>
);

export default App;
