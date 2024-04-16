import { useContext, useEffect, useState } from "react";
import "./navbar.scss";
import { ButtonText } from "../../data/data";
import { LangContext } from "../../context/LanguageContext";


const Navbar = ({ open, setOpen }) => {
    const [active, setActive] = useState(false);
    const { language, lang, dispatch } = useContext(LangContext)
    const [activeLang, setActiveLang] = useState(false)

    const isScroll = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    useEffect(() => {
        window.addEventListener("scroll", isScroll);

        return () => {
            window.removeEventListener('scroll', isScroll)
        }
    }, [])

    const handlelanguage = (item) => {
        dispatch({ type: item, payload: item });
        setActiveLang(false)
    }
    return (
        <div className={active ? "active navbar" : "navbar"}>
            <div className="navWrapper">
                <a href="/" className="logo">{lang?.logoText}</a>
                <div className="navmiddle">
                    <div className="language_header" onClick={()=>setActiveLang(!activeLang)}>{language} <i className="fa-solid fa-globe"></i>  </div>
                   { activeLang && <ul className="lang_ul">
                        {ButtonText?.map((item) => {
                            return (
                                <li className={language === item.name ? "active_header" : ""} key={item.id} onClick={() => handlelanguage(item.name)}>{item.text}  </li>
                            )
                        })}
                    </ul>}
                </div>
                <div className="navright">
                    <a href="#">{lang.resume}</a>
                    {!open && <i class="fa-solid fa-bars" onClick={() => setOpen(!open)}></i>}

                </div>
            </div>
        </div>
    )
}

export default Navbar



//     < select name = "" id = "" >
//         { ButtonText?.map((item) => {

//     return (
//         <option key={item.id} onClick={() => handlelanguage(item.name)}>{item.text} </option>
//     )
// })}
//                     </select >