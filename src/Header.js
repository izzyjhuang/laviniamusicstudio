import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ selectedLanguage, setSelectedLanguage }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isAboutDropdownVisible, setAboutDropdownVisible] = useState(false);
  const [isPianoDropdownVisible, setPianoDropdownVisible] = useState(false);
  const [isViolinDropdownVisible, setViolinDropdownVisible] = useState(false);
  const [isResourcesDropdownVisible, setResourcesDropdownVisible] = useState(false);
  const [isInquiriesDropdownVisible, setInquiriesDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setDropdownVisible(false);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownVisible(!isAboutDropdownVisible);
  };

  const togglePianoDropdown = () => {
    setPianoDropdownVisible(!isPianoDropdownVisible);
  };

  const toggleViolinDropdown = () => {
    setViolinDropdownVisible(!isViolinDropdownVisible);
  };

  const toggleResourcesDropdown = () => {
    setResourcesDropdownVisible(!isResourcesDropdownVisible);
  };

  const toggleInquiriesDropdown = () => {
    setInquiriesDropdownVisible(!isInquiriesDropdownVisible);
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
      },
    };
    return translations[textKey][selectedLanguage];
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <h1>Studio Logo</h1>
        </Link>
      </div>
      <nav className="nav-links">
      <div className="nav-link piano-dropdown" onClick={toggleAboutDropdown}>
          {getText('About')}
          {isAboutDropdownVisible && (
            <ul className="dropdown-menu">
              <li><Link to="/about/lavinia">Lavinia</Link></li>
              <li><Link to="/about/performance">Performance</Link></li>
              <li><Link to="/about/teaching">Teaching</Link></li>
            </ul>
          )}
        </div>

        <div className="nav-link piano-dropdown" onClick={togglePianoDropdown}>
          {getText('Piano')}
          {isPianoDropdownVisible && (
            <ul className="dropdown-menu">
              <li><Link to="/piano/studio">Studio</Link></li>
              <li><Link to="/piano/testimonies">Testimonies</Link></li>
              <li><Link to="/piano/recitals">Recitals</Link></li>
            </ul>
          )}
        </div>

        <div className="nav-link piano-dropdown" onClick={toggleViolinDropdown}>
          {getText('Violin')}
          {isViolinDropdownVisible && (
            <ul className="dropdown-menu">
              <li><Link to="/violin/studio">Studio</Link></li>
              <li><Link to="/violin/testimonies">Testimonies</Link></li>
              <li><Link to="/violin/recitals">Recitals</Link></li>
            </ul>
          )}
        </div>

        <div className="nav-link piano-dropdown" onClick={toggleResourcesDropdown}>
          {getText('Resources')}
          {isResourcesDropdownVisible && (
            <ul className="dropdown-menu">
              <li><Link to="/resources/piano">Piano</Link></li>
              <li><Link to="/resources/violin">Violin</Link></li>
              <li><Link to="/resources/ensemble">Ensemble</Link></li>
              <li><Link to="/resources/rehersal-skills">Rehersal Skills</Link></li>
              <li><Link to="/resources/orchestra-example">Orchestra Example</Link></li>
            </ul>
          )}
        </div>

        <div className="nav-link piano-dropdown" onClick={toggleInquiriesDropdown}>
          {getText('Inquiries')}
          {isInquiriesDropdownVisible && (
            <ul className="dropdown-menu">
              <li><Link to="/inquiries/consultation">Consultation</Link></li>
              <li><Link to="/inquiries/trial-lesson">Trial Lesson</Link></li>
            </ul>
          )}
        </div>
              
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