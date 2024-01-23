import React, { useEffect, useState } from "react";
import From1 from "./FromFirst";
import From2 from "./FromSecond";
import cros from "../image/Icon.png";
import "./MainFrom.css";

const Mainfrom = ({toggel,setToggel,setUserInfo}) => {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    name:"",
    email: "",
    phone: "",
    youtube: "",
    instagram: "",
  
  });

function handleSubmit(){
    setUserInfo(formData)
    const fromContainer = document.querySelector('.fromContainer')
    fromContainer.style.display = 'none'

}

  const pageDisplay = () => {
    if (page === 0) {
      return <From1 formData={formData} setFormData={setFormData}></From1>;
    } else {
      return <From2 formData={formData} setFormData={setFormData}></From2>;
    }
  };
 
  function add(){
    const fromContainer = document.querySelector('.fromContainer')
    // handleopen(fromContainer);
   
    toggel ?   fromContainer.style.display = 'block': fromContainer.style.display = 'none'
   

  }
  useEffect(()=>{
    add();

  },[toggel,setUserInfo,formData])  
  function handelClose(){
    const fromContainer = document.querySelector('.fromContainer')
    fromContainer.style.display = 'none'
    setToggel(false)
    // handleopen(fromContainer);

  }
  return (
    <div className="fromContainer">
      <div className="fromHead">
        <h3>Add New Profile</h3>
        <div onClick={handelClose}> 
        <img src={cros}></img>
             </div>
      </div>
      <div className="fromTitel">
        <h3 style={{borderBottomColor:`${page <1 ? '#3E84F8' : 'rgb(197, 197, 197)'}` }}>Basic</h3>
        <h3 style={{borderBottomColor:`${page >0 ? '#3E84F8' : 'rgb(197, 197, 197)'}` }}>Social</h3>
      </div>
      <div>{pageDisplay()}</div>
      <div className="fromBtn">
        {page < 1 ? (
          <button
            className="fromNextBtn"
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            Next
          </button>
        ) : (
          <div className="fromSubmition">
            <button
            className="BackBtn"
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Back
            </button>{" "}
            <button onClick={handleSubmit} className="SubmitBtn">Done</button>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Mainfrom;
