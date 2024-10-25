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
  const baseURL = 'https://izzyjhuang.com/laviniamusicstudio';

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
      studio_name: {
        English: "  Lavinia Lee Music Studio",
        中文: "  Lavinia Lee 音樂教室"
      },
      Home: {
        English: 'Lavinia Lee Music Studio',
        中文: 'Lavinia Lee 音樂教室',
      },
      About: {
        English: 'About Me',
        中文: '關於我',
      },
      Piano: {
        English: 'Piano',
        中文: '鋼琴',
      },
      Violin: {
        English: 'Violin/Viola',
        中文: '小提琴/中提琴',
      },
      Resources: {
        English: 'Current Students',
        中文: '學生專用',
      },
      Inquiries: {
        English: 'Contact',
        中文: '聯絡我',
      },
    };
    return translations[textKey][selectedLanguage];
  };

  return (
    <header className="header">
      <div className="header-name">
        {getText('studio_name')}
      </div>
      <div className="header-content">
        <div className="header-logo">
          <img src={`${baseURL}/images/home/lavinia-music-studio-logo.png`} alt="Lavinia Music Studio Logo" className="banner-image" />
        </div>
      <div className="header-dropdowns">
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
      </div>
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
      </div>
    </header>
  );
};

export default Header;