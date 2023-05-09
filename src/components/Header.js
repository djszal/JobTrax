import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className='header'>
        <div className='app-title'><Link to={"/"}>JobTrax</Link></div>

        <div className='nav-links'>
          <div className='links'><Link to={"/estimate"}>Estimate</Link></div>
          <div className='links'>Job Costing</div>
          <div className='links'>Project Management</div>
          <div className='links'>CRM</div>
          <div className='links'>Login/Register</div>
          
        </div>
      </div>
    )
}

export default Header;