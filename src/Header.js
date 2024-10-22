// Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ selectedLanguage, setSelectedLanguage }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setDropdownVisible(false);
  };

  const getText = (textKey) => {
    const translations = {
      Home: {
        English: 'Lavinia Music Studio',
        中文: 'Lavinia 音樂教室',
      },
      About: {
        English: 'About',
        中文: '關於我',
      },
      Piano: {
        English: 'Piano',
        中文: '鋼琴',
      },
      Violin: {
        English: 'Violin',
        中文: '小提琴',
      },
      Resources: {
        English: 'Resources',
        中文: '資源',
      },
      Inquiries: {
        English: 'Inquiries',
        中文: '試課',
      }
    };
    return translations[textKey][selectedLanguage];
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <div className="image-overlay">
            {/* <img className="logo" src="../images/home/izzy-pirate.png" loading="lazy" alt="Izzy Logo" /> */}
            <img className="overlay-logo" src="../images/home/lavinia-music-studio.png" loading="lazy" alt="Overlay Logo" />
          </div>
          {/* <h1 className="header-text">{getText('Home')}</h1> */}
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/about-me" className="nav-link">{getText('About')}</Link>
        <Link to="/piano" className="nav-link">{getText('Piano')}</Link>
        <Link to="/violin" className="nav-link">{getText('Violin')}</Link>
        <Link to="/resources" className="nav-link">{getText('Resources')}</Link>
        <Link to="/inquiries" className="nav-link">{getText('Inquiries')}</Link>
      </nav>
      <div className="language-selector" onClick={toggleDropdown}>
        <span>{selectedLanguage}</span>
        <i className="arrow-down">▾</i>
        {isDropdownVisible && (
          <ul className="language-dropdown">
            <li onClick={() => handleLanguageSelect('English')}>English</li>
            <li onClick={() => handleLanguageSelect('中文')}>中文</li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;