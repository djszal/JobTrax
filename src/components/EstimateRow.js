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
            <option value="Each">EA</option>
            <option value="Linear Foot">LF</option>
            <option value="Square Foot">SF</option>
            <option value="Lump Sum">LS</option>
            <option value="Allowance">Allow</option>
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
        

      </form>
    )
}

export default EstimateRow;