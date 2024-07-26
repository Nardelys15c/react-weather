import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(){
    return(
        <div className="WeatherForecast">
        <div className="row">
            <div className="col">
            <div className="WeatherForecast-day">Fri</div>
            
            <WeatherIcon icon="01d" size={35}/>
            <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max">92º </span> 
            <span className="WeatherForecast-temperatures-min">/ 74º</span>
           </div>
        </div>
        </div>    
        </div>
    );
}