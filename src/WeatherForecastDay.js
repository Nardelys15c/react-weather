import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay(props){
    function maxTemperature(){
        let temperature= Math.round(props.data.temp.max);
        return`${temperature}º`;
    }
    function minTemperature(){
        let temperature= Math.round(props.data.temp.min);
        return`${temperature}º`;
    }

function day(){
    let date= new Date(props.data.dt * 1000);
    let day= date.getDay();

let days= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri","Sat"];

    return days[day];
}

    return (
        <div>
    <div className="WeatherForecast-day">{day()}</div>
    <WeatherIcon code={props.data.weather[0].icon} icon="01d" size={35}/>
    <div className="WeatherForecast-temperatures">
    <span className="WeatherForecast-temperatures-max">{maxTemperature()} </span> 
    <span className="WeatherForecast-temperatures-min">/{minTemperature()}</span>
   </div>
   </div>   
    );
}
