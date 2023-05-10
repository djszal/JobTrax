import React from "react";

const EstimateRow = () => {
    return(
        <form className='estimate-row'>
        <div className='category'>
          <label className='estimate-column-labels'></label>
          <select name='category' className='category'>
            <option value="Building Permit">General Conditions</option>
            <option value="Site Work">Site Work</option>
            <option value="General Conditions">Concrete</option>
            <option value="Carpentry">Carpentry</option>
          </select>
          </div> 
        <div className='subcategory'>
          <label className='estimate-column-labels'></label>
          <select name='subcategory' className='subcategory'>
            <option value="Building Permit"></option>
            <option value="Building Permit">Building Permit</option>
            <option value="Site Work">Site Work</option>
            <option value="General Conditions">General Conditions</option>
            <option value="Carpentry">Carpentry</option>
          </select>
          </div> 
        <div className='Item Name'>
          <label className='estimate-column-labels'> </label>
          <input></input>
          </div> 
        <div className='category'>
          <label className='estimate-column-labels'></label>
          <input></input>
          </div> 
        <div className='category'>
          <label className='estimate-column-labels'></label>
          <select name='category' className='category'>
            <option value="Building Permit"></option>
            <option value="Building Permit">EA</option>
            <option value="Site Work">LF</option>
            <option value="General Conditions">SF</option>
            <option value="Carpentry">LS</option>
            <option value="Carpentry">Allow</option>
          </select>
          </div> 
        <div className='category'>
          <label className='estimate-column-labels'></label>
          <input></input>
          </div> 
        <div className='category'>
          <label className='estimate-column-labels'></label>
          <input></input>
          </div> 
        <div className='category'>
          <label className='estimate-column-labels'></label>
          <input></input>
          </div> 
        <div className='category'>
          <label className='estimate-column-labels'></label>
          <input></input>
          </div> 
        <div className='category'>
          <label className='estimate-column-labels'></label>
          <input></input>
          </div> 
        <div className='category'>
          <label className='estimate-column-labels'></label>
          <input></input>
          </div> 

      </form>
    )
}

export default EstimateRow;