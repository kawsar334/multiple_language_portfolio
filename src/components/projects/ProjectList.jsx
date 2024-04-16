import "./projects.scss"

const ProjectList = ({ item, active, setSelected }) => {
  return (
    <>
          <li className={active?"active list" :"list"} onClick={()=>setSelected(item.type)}>{item.type}</li>
    </>
  )
}

export default ProjectList