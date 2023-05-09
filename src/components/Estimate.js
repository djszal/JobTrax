import React from "react";


const Estimate = () => {
    return(
        <div className='estimate'>
          <div className='Logo'></div>
          <div className='project-running-totals-box'>
            <h3>Project Running Totals</h3>
            <div className='totals-sub-box'>
              <div className='sub-boxes'>
              <h3>Base Cost</h3>
              <p>$$$</p>
            </div>
            <div className='sub-boxes'>
              <h3>Profit Amount</h3>
              <p>$$$</p>
            </div>
            <div className='sub-boxes'>
              <h3>Margin</h3>
              <p>$$$</p>
            </div>
            <div className='sub-boxes'>
              <h3>Total Cost</h3>
              <p>$$$</p>
            </div>
          </div>
        </div>

        <form className='estimate-form'>
          <div className='category'>
            <label className='estimate-column-labels'>Category</label>
            <select name='category' className='category'>
              <option value="Building Permit">General Conditions</option>
              <option value="Site Work">Site Work</option>
              <option value="General Conditions">Concrete</option>
              <option value="Carpentry">Carpentry</option>
            </select>
            </div> 
          <div className='subcategory'>
            <label className='estimate-column-labels'>Subcategory</label>
            <select name='subcategory' className='subcategory'>
              <option value="Building Permit"></option>
              <option value="Building Permit">Building Permit</option>
              <option value="Site Work">Site Work</option>
              <option value="General Conditions">General Conditions</option>
              <option value="Carpentry">Carpentry</option>
            </select>
            </div> 
          <div className='Item Name'>
            <label className='estimate-column-labels'>Item Name</label>
            <input></input>
            </div> 
          <div className='category'>
            <label className='estimate-column-labels'>Quanitity</label>
            <input></input>
            </div> 
          <div className='category'>
            <label className='estimate-column-labels'>Unit of Measure</label>
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
            <label className='estimate-column-labels'>Unit Cost</label>
            <input></input>
            </div> 
          <div className='category'>
            <label className='estimate-column-labels'>Base Cost</label>
            <input></input>
            </div> 
          <div className='category'>
            <label className='estimate-column-labels'>Markup %</label>
            <input></input>
            </div> 
          <div className='category'>
            <label className='estimate-column-labels'>Profit Amt</label>
            <input></input>
            </div> 
          <div className='category'>
            <label className='estimate-column-labels'>Profit Margin</label>
            <input></input>
            </div> 
          <div className='category'>
            <label className='estimate-column-labels'>Total Cost</label>
            <input></input>
            </div> 

        </form>
            <div className='project-total'>
              <h3>PROJECT TOTAL</h3>
              <p>$$$</p>
            </div>
      </div>
    )
}

export default Estimate;