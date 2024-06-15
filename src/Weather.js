import React from 'react';
import "./Weather.css";


export default function Weather(){
    return(
        <div className="Weather"> 
        <form>
            <div className="row">
                <div className='col-9'>
            <input type="search" placeholder="Enter City" className="form-control" autoFocus="on"/>
            </div>
            <div className='col-3'>
            <input type="button" value="searh" className="btn btn-primary w-100" />
            </div>
            </div>
        </form>
        <h1>Sebastian</h1>
        <ul>
        <li>Saturday 7:03 P.M.</li>
        <li>Mostly Sunny</li>
        </ul>
       
        <div className="row mt-3">
        <div className="col-6">
        
        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Sunny"/>
        <span className="temperature">89 </span>
        <span className="unit">ºF</span>      
      </div>
      <div className="col-6">
        <ul>
            <li>Percipitation: 2%</li>
            <li>Humidity: 65%</li>
            <li>Wind: 11 mph</li>
        </ul>
      </div>
      </div>
       </div>
    );
}