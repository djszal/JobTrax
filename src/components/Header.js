import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

const Header = () => {
    return(
        <div className='header'>
        <div className='app-title'><Link to={"/"} className="header-links">JobTrax</Link></div>

        <div className='nav-links'>
          <div className='links'><Link to={"/estimate"} className="header-links">Estimate</Link></div>
          <div className='links'><Link to={"/"} className="header-links">Job Costing</Link></div>
          <div className='links'><Link to={"/"} className="header-links">Project Management</Link></div>
          <div className='links'><Link to={"/"} className="header-links">CRM</Link></div>
          <div className='links'><Link to={"/"} className="header-links">Login</Link></div>
          
        </div>
      </div>
    )
}

export default Header;