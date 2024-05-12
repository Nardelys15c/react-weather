import React from 'react';
import "./Weather.css";


export default function Weather(){
    return(
        <div className="Weather"> 
        <form>
            <div className="row">
                <div className='col-9'>
            <input type="search" placeholder="Enter City" className="form-control"/>
            </div>
            <div className='col-3'>
            <input type="button" value="searh" className="btn btn-primary" />
            </div>
            </div>
        </form>
        <h1>Sebastian</h1>
        <ul>
        <li>Saturday 7:03 P.M.</li>
        <li>Mostly Sunny</li>
        </ul>
       
        <div className="row">
        <div className="col-6">
        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Sunny"/>
        89ºF        
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