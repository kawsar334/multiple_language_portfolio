import "./contact.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect, useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { LangContext } from "../../context/LanguageContext";
const Contact = () => {
  const { lang } = useContext(LangContext);

  const form = useRef();
  const [error, setError] = useState("");
  const [succes, setSucces] =useState(false)
    useEffect(() => {
        AOS.init();
    }, [])
    const handleSubmit =(e)=>{
      e.preventDefault();

      emailjs.sendForm('service_q09hw7p', 'template_nslj8rl', form.current, 'Zf8Rumadp2r9ihUqZ')
      .then((result) => {
        console.log(result.text);
        setSucces(true)
        setError(false)
      }, (error) => {
        console.log(error.text);
        setSucces(false)
        setError(true)
      });
  };

  return (
    <div className="contact" id="contact">
        <div className="contactwrapper">
              <div className="contacttop" data-aos="fade-left">
          <h1>{lang?.contactHeader}</h1>
          <p>{lang?.contactDesc}</p>
        </div>
        <form className="contactbottom" data-aos="fade-right" ref={form} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder={lang?.contacName} required />
          <input type="text" name="email" placeholder={lang?.contactEmail} required />
          <textarea name="message" placeholder={lang?.contactMessage} cols="30" rows="10" ></textarea>
          {succes&&<span className="welcommessage">your message hassbeen sent </span>}
          {succes && <span style={{color:"crimson"}}>Something went wrong </span>}
          <button type="submit">{lang?.sendBtn}</button>
        </form>

        </div>
    </div>
  )
}

export default Contact