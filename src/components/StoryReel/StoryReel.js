import React from 'react';
import "./StoryReel.css";

// component
import  Story from "../Story/Story"; 

const StoryReel = () => {
  return (
    <div className='StoryReel'>

       <Story
      image="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
      profileSrc="https://resize.programme-television.ladmedia.fr/r/670,670/img/var/premiere/storage/images/tele-7-jours/news-tv/cristiano-ronaldo-libere-de-son-contrat-avec-le-manchester-united-il-reagit-4697489/101210205-1-fre-FR/Cristiano-Ronaldo-libere-de-son-contrat-avec-le-Manchester-United-il-reagit.jpg"
      title="Ronaldo"
      />
       <Story
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/221px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"

      profileSrc="https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2023-02/Lionel%20Messi%20PSG%20030922.jpg?itok=bwddpMZd"
      
      title="Messi"
      />
       <Story
      image="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
      profileSrc="https://i.insider.com/63c5ffadbcd21800196b8267?width=1136&format=jpeg"
      title="Rafael nadal"
      />
       <Story
      image="https://cdn.britannica.com/60/222860-050-4DC233F1/Indian-cricketer-Sachin-Tendulkar-2007.jpg"
      profileSrc="https://img.jagranjosh.com/imported/images/E/GK/sachin-records.png"
      title="Sachin"
      />
       <Story
      image="https://pbs.twimg.com/card_img/1625128344655200257/Dw55X450?format=jpg&name=small"
      profileSrc="https://e0.365dm.com/23/01/2048x1152/skysports-novak-djokovic-tennis_6036887.jpg"
      title="DjoKovic"
      />

    </div>
  )
}

export default StoryReel
