import React from "react";
import EstimateRow from "./EstimateRow";


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
            <div className="estimate-column-names">
                <h3>Category</h3>
                <h3>Subcategory</h3>
                <h3>Item Name</h3>
                <h3>Quanitity</h3>
                <h3>Unit of Measure</h3>
                <h3>Unit Cost</h3>
                <h3>Base Cost</h3>
                <h3>Markup %</h3>
                <h3>Profit Amt</h3>
                <h3>Profit Margin</h3>
                <h3>Total Cost</h3>
            </div>
            <EstimateRow />
            <EstimateRow />
            <EstimateRow />
            <button 
            type="Submit"
            className="submit-activity"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("Hello");
                        <EstimateRow />;
                      }}
                      >
                        Add Row
                        </button>
            <button type="Submit">Delete Row</button>

            <div className='project-total'>
              <h3>PROJECT TOTAL</h3>
              <p>$$$</p>
            </div>
      </div>
    )
}

export default Estimate;