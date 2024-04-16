import "./about.scss";
import AOS from 'aos';
 import 'aos/dist/aos.css';
import { useContext, useEffect } from "react";
import { LangContext } from "../../context/LanguageContext";

const About = () => {
    const {lang} = useContext(LangContext);
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <div className="about" id="about">
        <div className="aboutwrapper">
        <div className="aboutleft">
                  <img src="/imgs/mee.png" alt="Loading..." data-aos="fade-right" />
        </div>
              <div className="aboutright" data-aos="fade-left">
            
                  <h1 className="aboutHeader">{lang?.aboutMeHeader1}</h1>
                  <p className="desc">
                      {lang?.aboutDesc1}
                  </p>
                  <hr />

                  <div className="items">
                      <div className="item">
                          <h3 className="itemheader">{lang?.aboutHeader2}</h3>
                          <p className="itemdesc">{lang?.aboutDesc2} </p>
                      </div>
                      <div className="item">
                          <h3 className="itemheader">{lang?.aboutHeader3}</h3>
                          <p className="itemdesc"> {lang?.aboutDesc3} </p>
                      </div>
                      <div className="item">
                          <h3 className="itemheader">{lang?.aboutHeader4}</h3>
                          <p className="itemdesc">{lang?.aboutDesc4} </p>
                      </div>
                  </div>
        </div>
        </div>
    </div>
  )
}

export default About