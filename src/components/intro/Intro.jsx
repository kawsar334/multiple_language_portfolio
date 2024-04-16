import Social from "../soical/Social"
import "./intro.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from "react";
import Typed from "react-typed"
import { LangContext } from "../../context/LanguageContext";

const Intro = () => {
  const {lang} = useContext(LangContext);
  console.log(lang)
  const text3 = lang?.text3 || "React.js & Node js"
  const text4 = lang?.text4 || "Mongo db";
  const text5 = lang?.text5;



    useEffect(() => {
        AOS.init();
    }, [text3, text4, text5])
  return (
    <div className="intro" id="intro">
         
          <Social />
          <div className="intromain">
        <h1 data-aos="fade-left"> {lang?.text1}</h1>
              <h2 data-aos="fade-left">{lang.text2}</h2>
            <h3 className="type">
          <Typed
            strings={[
              text3 || "I'm a Full Stack web Developer",
            //  "I'm a Full Stack web Developer",
              // "React.js & Node js",
              // "Mongo db",
              text4 || "React.js & Node js",
              text5 || "Mongo db",

            ]}
            typeSpeed={150}
            backSpeed={100}
            loop
          />
               </h3>

       
        <p data-aos="fade-right">{lang?.desc}.</p>
        <a href="#projects" data-aos="fade-left">{lang?.vieworksLink} <i className="fa-solid fa-chevron-down"></i></a>
             
          </div>

    </div>
  )
}

export default Intro