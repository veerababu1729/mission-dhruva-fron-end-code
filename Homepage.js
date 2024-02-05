// Homepage.js

import React from "react";
import logo from '../images/logos.png';
import "./homepage.css"; // Import your CSS file

const Homepage = (props) => {
  return (
    <div className="your-component container-fluid">
       <div className="container-fluid" style={{backgroundColor:"lavender",width:"100% ",display:"flex"}}>
        
        <div className="col-md-2"><img src={logo} alt="logo" style={{width:"50%",height:"100%"}}></img></div>
        <div className="col-md-10" style={{display:"flex"}}>
        <h1 style={{marginLeft:"25%",marginTop:"2%"}}>MISSION DHRUVA</h1>
        <h2 style={{marginLeft:"10%",marginTop:"2.5%"}}>Contact</h2>
        <h2 style={{marginLeft:"10%",marginTop:"2.5%"}}>Logout</h2>
        </div>
    </div>
      <div className="line"></div>
      <div className="search-bar">
        <input type="text" placeholder="Search..."/>
        <span className="search-icon">&#x1F50D;</span>
      </div>
      <div className="line"></div>
      <h1 style={{marginBottom:"30px",color:"olive"}}>Hospitals Near You</h1>
      
      <div className="container col-md-12" style={{display:"flex"}}>
            <div className="col-md-"><img style={{height:"60%",width:"70%"}} src={logo} alt='logo'/></div>
            <div className="col-md-6" style={{color:"white"}}><li>This is Teja</li>
            <li>This is Vlog</li></div>
      </div>
      <div className="container col-md-12" style={{display:"flex"}}>
            <div className="col-md-"><img style={{height:"60%",width:"70%"}} src={logo} alt='logo'/></div>
            <div className="col-md-6" style={{color:"white"}}><li>This is Teja</li>
                    <li>This is Vlog</li>
            </div>
      </div>
      <div className="container col-md-12" style={{display:"flex"}}>
            <div className="col-md-"><img style={{height:"60%",width:"70%"}} src={logo} alt='logo'/></div>
            <div className="col-md-6" style={{color:"white"}}><li>This is Teja</li>
            <li>This is Vlog</li></div>
      </div>
    </div>
  );
};

export default Homepage;
