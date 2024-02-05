import React from "react"
import Opback from '../images/op_back.jpg';
import logo from '../images/logos.png';
const Op = (props) => {
    var x="veeru Arun";
  return (
    <>
    <div className="container-fluid" style={{backgroundColor:"lavender",width:"100% ",display:"flex"}}>
        
        <div className="col-md-2"><img src={logo} alt="logo" style={{width:"50%",height:"100%"}}></img></div>
        <div className="col-md-10" style={{display:"flex"}}>
        <h1 style={{marginLeft:"25%",marginTop:"2%"}}>MISSION DHRUVA</h1>
        <h2 style={{marginLeft:"10%",marginTop:"2.5%"}}>Contact</h2>
        <h2 style={{marginLeft:"10%",marginTop:"2.5%"}}>Logout</h2>
        </div>
    </div>
    <div className="col-md-12" style={{backgroundColor:"cornflowerblue ",display:"flex",width:"100%",height:"100%"}}>
    <div className="col-md-8">
          <img src={Opback} alt="logo" style={{display:"flex",width:"100%",height:"100%"}}/>
    </div>
    <div className="col-md-4">
        <h1 style={{marginLeft:"6%"}}>NOW CHECKING</h1>
        <div style={{backgroundColor:"lavender",width:"50%",height:"20%",marginLeft:"30%",boxShadow:"10px 10px 8px 5px"}}>
            <h1 style={{fontSize:"800%",backgroundColor:"",justifyContent:"center",paddingLeft:"35%"}}>1</h1>
        </div>
    <div><h4 style={{padding:"10%"}}><h4>Patient_Name:{x}</h4>
    <div>AVERAGE TIME: 10MIN</div>
    <marquee direction="up" style={{height:"50%"}}>Doctors are considered the most important and responsible people in society. They are the ones who support when someone is struggling with their health. Doctors are the ones to have a profound knowledge of all kinds of diseases, their symptoms, and their treatments.</marquee></h4></div>
      <ol type="1">
        <h1>Outpatient List</h1>
      <li>This is Teja</li>
      <li>Uppal balu</li>
      <li>Qatar Papa</li>
      <li></li>
    </ol>
    </div>
    <br></br>
    
    {/* <div className="col-md-9" style={{backgroundColor:"red"}}></div>   */}
    </div>
    </>
  )
};

export default Op;
