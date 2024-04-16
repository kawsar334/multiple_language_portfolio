import Social from "../soical/Social"
import "./footer.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from "react";
import { LangContext } from "../../context/LanguageContext";

const Foote = () => {
  const { lang } = useContext(LangContext);

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="footer">
      <div className="footerwrapper">
        <div className="footertop" >
          <a href="tel:+966509325731" target="_blank">+966509325731</a>
          <a href='https://www.linkedin.com/in/kawsar-firoz-a140b9237/' target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href='https://www.facebook.com/profile.php?id=100076935281732' target="_blank">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href='https://github.com/kawsar334'>
            <i class="fa-brands fa-github"></i>
          </a>

          <a href='mailto: kawsarfiroz11@gmail.com' target="_blank">kawsarfiroz11@gmai.com</a>

        </div>
        <div className="footerbottom" >

          {lang?.footerLinks?.map((item)=>{
            return(

              <a href={item?.link} key={item?.id}>{item?.name}</a>
            )
          })}
          
        </div>
      </div>

    </div>
  )
}

export default Foote