import React, { useState } from "react";
import EstimateRow from "./EstimateRow";


const Estimate = () => {

  const [rows, setRows] = useState([]);
  console.log(rows)

const handleAddRow= () => {
  return <EstimateRow />
}

const handleAddSOW = () => {
  return true
}
  
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
            <div className="estimate-column-names">
                <h3>Category</h3>
                <h3>Subcategory</h3>
                <h3>Item Name</h3>
                <h3>Quanitity</h3>
                <h3>Unit of Measure</h3>
                <h3>Unit Cost</h3>
                <h3>Total Cost</h3>
            </div>
            
            <div>
            <EstimateRow/>
            <EstimateRow/>
            <EstimateRow/>

            {/* {rows.map((row)=>{
              <EstimateRow row={row} />
            })} */}

            </div>
            
            <div>
              <button 
                className="button" 
                onClick={()=>handleAddRow}>
                Add Row
              </button>
            </div>

            <button type="Submit">Delete Row</button>
            
            <div>
              <button 
                className="button" 
                onClick={()=>handleAddSOW}>
                Add Scope Of Work
              </button>
            </div>

            <div className='project-total'>
              <h3>PROJECT TOTAL</h3>
              <p>$$$</p>
            </div>
      </div>
    )
}

export default Estimate;