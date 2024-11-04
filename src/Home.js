import React from 'react';
import './home.css'; 

const Homepage = ({ selectedLanguage }) => {
  const baseURL = 'https://izzyjhuang.com/laviniamusicstudio';

  const textTranslations = {
    studio_name: {
      English: "  Lavinia Lee Music Studio",
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
    },
    mission_statement: {
        English: " Mission Statement",
        中文: "教學宗旨"
    },
    v_lessons: {
      English: " Violin/Viola Lessons", 
      中文: "小提琴/中提琴課"
    },
    p_lessons: {
      English: " Piano Lessons", 
      中文: "鋼琴課"
    },
    home_descriptions: {
      English: " I offer private piano and violin lessons... once a week in a one-on-one setting...", 
      中文: "我提供私人鋼琴和小提琴課程... 每週一次，一對一授課..."
    },
    performance_opportunities: {
      English: "Performance Opportunities",
      中文: "表演機會",
    },
    locations: {
      English: "Serving ... areas",
      中文: "服務區域",
    },
  };

  const text0 = textTranslations.studio_name[selectedLanguage] || textTranslations.studio_name['English'];
  const text1 = textTranslations.description[selectedLanguage] || textTranslations.description['English'];
  const text2 = textTranslations.quote[selectedLanguage] || textTranslations.quote['English'];
  const text3 = textTranslations.learn_more[selectedLanguage] || textTranslations.learn_more['English'];
  const text4 = textTranslations.mission_statement[selectedLanguage] || textTranslations.quote['English'];
  const text5 = textTranslations.v_lessons[selectedLanguage] || textTranslations.quote['English'];
  const text6 = textTranslations.p_lessons[selectedLanguage] || textTranslations.quote['English'];
  const text7 = textTranslations.home_descriptions[selectedLanguage] || textTranslations.quote['English'];
  const text8 = textTranslations.performance_opportunities[selectedLanguage] || textTranslations.quote['English'];
  const text9 = textTranslations.locations[selectedLanguage] || textTranslations.quote['English'];

  return (
    <div>
      <div className="banner-container">
        <div className="banner-wallpaper">
          <img src={`${baseURL}/images/home/home-banner.jpeg`} alt="Lavinia Music Studio Logo" className="banner-background" />
          <div className="banner-image-container">
            <img src={`${baseURL}/images/home/playing-piano.jpeg`} alt="Cover-pic" className="banner-image"/>
          </div>

        </div>
        <div className="mission-section">
            <img src={`${baseURL}/images/home/teacher-pic.jpg`}/>
            <div className="mission-statement">
                <h1>{text4}</h1>
                <h2>~Lavinia </h2>
            </div>
        </div>
        <div className="lessons-container">
          <div className="lessons-section">
              <div className="mission-statement">
                  <h1>{text5}</h1>
              </div>
              <img src={`${baseURL}/images/home/teacher-pic.jpg`}/>
          </div>
          <div className="lessons-section">
              <div className="mission-statement">
                  <h1>{text6}</h1>
              </div>
              <img src={`${baseURL}/images/home/teacher-pic.jpg`}/>
          </div>
        </div>
        <duv className="offering-statement">
          <div className="mission-statement">
              <h1>{text7}</h1>
          </div>
        </duv>
        <div className="offering-statement">
          <div className="mission-statement">
          <h1 style={{ marginBottom: '2vw' }}>{text8}</h1>
          </div>
          <img style={{ width: '80%' }}src={`${baseURL}/images/home/playing-piano.jpeg`}/>
        </div>
        <div className="offering-statement">
          <div className="mission-statement">
          <h1 style={{ marginBottom: '2vw' }}>{text9}</h1>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Homepage;