import "./popup.scss";

const Popup = ({ open, setOpen, desc}) => {
  return (
    <div className="popupwrapper">
          <button className="closebtn" onClick={() => setOpen(!open)}>
          <i className="fa-solid fa-xmark" ></i>
          {/* close */}
        </button>
            <img src={desc.img2} alt="" />
        <div className="desContainer">
            <h2>{desc.title}</h2>
            <p>{desc.desc}</p>
            <div className="linkd">
                <a href={desc?.demo}>Demo</a>
                <a href={desc?.github}>Code </a>
            </div>

        </div>

    </div>
  )
}

export default Popup