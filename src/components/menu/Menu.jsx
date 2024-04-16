import { useContext } from "react";
import "./menu.scss"
import { LangContext } from "../../context/LanguageContext";

const Menu = ({ open, setOpen }) => {
  const { lang } = useContext(LangContext);

  return (
    <>
      {
        <div className={open ? "menu activemenu" : "menu"}>
          <i className="fa-solid fa-xmark " onClick={() => setOpen(!open)}></i>
          <img src="/imgs/mee.png" alt="" />
          <ul>
            {lang?.navlinks?.map((item) => {
              return (
                <li>
                  <a href={item?.id} onClick={() => setOpen(!open)}>{item?.name}</a>
                </li>
              )
            })}
          </ul>
        </div>}
    </>
  )
}

export default Menu