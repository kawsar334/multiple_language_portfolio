import { useContext, useEffect, useState } from "react";
import { frontend, fullstack, mobilePortfolio } from "../../Data";
import ProjectList from "./ProjectList";
import "./projects.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Popup from "../popup/Popup";
import { LangContext } from "../../context/LanguageContext";


const Projects = () => {
    const { lang } = useContext(LangContext);

    const [data, setData] = useState([])
    const [selected, setSelected] = useState("frontend");
    const [open, setOpen] = useState(false);
    const [desc, setDesc] = useState({})
    const [currentPage, setCurrentPage] = useState(1);
    const recordPerPage = 6 ;
    const lastIndex = currentPage * recordPerPage ;
    const firstIndex = lastIndex - recordPerPage ;
    const records = data.slice(firstIndex, lastIndex)
    const nPage =Math.ceil(data.length / recordPerPage);
    const numbers= [...Array(nPage +1).keys()].slice(1);
    const [active, setActive] = useState(false);
    const [marked, setMarked] = useState(1);
    
    const type = lang?.projectlinks || [
        {type:"frontend"},
        {type:"Fullstack"},
        {type:"React Native"}
        
    ]


    const prevPage = ()=>{
        if(currentPage !== firstIndex){
            setCurrentPage(currentPage -1)
        }

    }
    const changeCurrentPage =(id)=>{
        setCurrentPage(id)
        setMarked(id)

    }
    const nextPage=()=>{
        if(currentPage !== lastIndex){
            setCurrentPage(currentPage +1) 
        }
    }
    
    useEffect(() => {
        AOS.init();
    }, [])

    useEffect(()=>{
        switch (selected) {
            case "frontend":
                setData(frontend);
                break;
            case "Fullstack":
                setData(fullstack);
                break;
            case "React Native":
                setData(mobilePortfolio);
                break;
            default:
                setData(frontend)
        }
    },[selected]);

    const handleDesc=(item)=>{
        setOpen(!open)
        setDesc(item)
        
    }
  return (
    <div className="projects" id="projects">
          <h1>{lang?.projectHeader}</h1>
        {open &&<div className="popup">
            <Popup  open={open} setOpen={setOpen} desc={desc} />
            </div>}
        <div className="projectTop">
              <ul data-aos="fade-left">
               {type.map((i)=>(
                   <ProjectList item={i} active={selected === i.type} setSelected={setSelected} key={i.type}/>
               ))}
            </ul>
        </div>
        <div className="projectbottom">
           {records.map((item)=>(

               <div className="pitem" data-aos="fade-right">

            <img src={item.img} alt="Loading..." />
            <div className="desc">
                <a href="#" className="title">{item.title}</a>
                <div className="links">
                    {item.demo && <a href={item.demo}>Demo</a>}
                     <a href={item.github}>Code</a>
                </div>
                <button onClick={()=>handleDesc(item)} className="detailsbtn" >see Details</button>
            </div>
         </div>
               )) }
        </div>

          <nav>
              <ul>
                 {/* { <li onClick={prevPage}><button className="prev">Prev</button></li>} */}
                  <li><button>see more projects...</button></li>

                  {
                      numbers.map((n, i) => (
                          <li className={marked ==n? "active" : ""} key={n} onClick={() => changeCurrentPage(n)}><button >{n}</button></li>
                      ))
                  }
                  {/* { <li onClick={nextPage}><button className="prev">next</button></li>} */}

              </ul>

          </nav>

    </div>
  )
}

export default Projects