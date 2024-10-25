// Home.js
import React from 'react';
import './home.css'; 


const Homepage = ({ selectedLanguage }) => {
  const textTranslations = {
    studio_name: {
      English: "  Lavinia Music Studio",
      中文: "  Lavinia 音樂教室"
    },
    description: {
      English: " Piano and Violin lessons for children and adults leading to a lifetime love of music",
      中文: " 為兒童和成人提供鋼琴和小提琴課程，引領他們終身熱愛音樂"
    },
    quote: {
      English: " \"Music should strike fire from the heart of man, and bring tears from the eyes of woman.\" - Ludwig van Beethoven",
      中文: " \"音樂應該擊中人的心靈，並從女人的眼中帶來淚水。\" - 路德維希·范·貝多芬"
    },
    learn_more: {
      English: " Learn More >>",
      中文: " 了解更多 >>"
    }
  };

  const text0 = textTranslations.studio_name[selectedLanguage] || textTranslations.studio_name['English'];
const text1 = textTranslations.description[selectedLanguage] || textTranslations.description['English'];
const text2 = textTranslations.quote[selectedLanguage] || textTranslations.quote['English'];
const text3 = textTranslations.learn_more[selectedLanguage] || textTranslations.learn_more['English'];
  
  return (
    <div>
      <div className="banner-container">
        <div className="banner-wallpaper">
        <img src="../images/home/home-banner.jpeg" alt="Home Banner" className="banner-image" />
        </div>
        
      {/* <div className="banner-header-text">
            <h0>{text0}</h0>
            <h1>{text1}</h1>
            <h2>{text2}</h2>
            <h3>{text3}</h3>
        </div>
        <div className="banner-image-overlay">
            <h1> We'll put a cover photo here</h1>
        </div> */}
      </div>

    </div>
  );
};

export default Homepage;