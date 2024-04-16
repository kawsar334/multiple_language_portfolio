import "./skils.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from "react";
import { LangContext } from "../../context/LanguageContext";

const Skills = () => {
  const { lang } = useContext(LangContext);

  useEffect(() => {
    AOS.init();
  }, [])


  const data = [
    {
      id:1,
      title:"Html5",
      img:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
    },
    {
      id: 2,
      title: "css3",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
    },
    {
      id: 3,
      title: "javascript",
      img: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"
    },
    {
      id: 4,
      title: "React.js",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
    },
    {
      id: 5,
      title: "github",
      img: "https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png"
    },
    {
      id: 6,
      title: "Express",
      img: "https://icon2.cleanpng.com/20180425/xeq/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84de7b809.1939946215246930699491.jpg"
    },
    {
      id: 7,
      title: "mongodb",
      img: "https://www.pngitem.com/pimgs/m/385-3850359_icon-mongodb-logo-hd-png-download.png"
    },
    {
      id: 8,
      title: "Bootstrap",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
    },
  ]
  return (
    <div className="skills" id="skills" data-aos="fade-left">
      <div className="skillwrapper">
        <div className="skilltop">
          <h2>{lang?.ExperienceHeader}</h2>
          <p>{lang?.ExperienceDesc} </p>
        </div>
        <div className="skillbottom">
          {data.map((item)=>(
            <div className="skillitem" key={item.id}>
            <img src={item.img} alt="Loading..." />
            <span>{item.title}</span>
          </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Skills