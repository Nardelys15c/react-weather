import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
        <li>
         <FormattedDate date={props.data.date}/>
         </li>
        <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
        <div className="col-6">
          <div className="Clear-fix">  
         <div className="Float-left"> 
          <WeatherIcon icon={props.data.icon}/>
          </div>  
        <span className="temperature">{Math.round(props.data.temperature)} </span>
        <span className="unit">ºF</span>      
      </div>
      </div>
      <div className="col-6">
        <ul>
           
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
        </ul>
      </div>
      </div>
      </div>
    );
}
