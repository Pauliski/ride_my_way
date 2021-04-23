import React from "react";
import { chartArray } from "./Array";


 


const Chart = () => {
 let sum = 0;
  for (let i = 0; i < chartArray.length; i++) {
    sum += chartArray[i].totalTrip;
  }

  return (
    
      <div className="chartContainer">
        <h1>Month</h1>
        <div >
          {chartArray.map((item) => {
            const tripInPercent = Math.round((item.totalTrip / sum) * 100);
            return (
              <div className="tripChartBox" key={item.month}> 
                <p>{item.month}</p>
                <p>({item.totalTrip})  {tripInPercent}%</p>
                <div className="tripChart">
                  <div className="tripChartLevel" style={{width: `${tripInPercent}%`}}></div>
                </div>
              </div>
            );
          })}
          
      </div>
    
    </div>
  );
};

export default Chart;
