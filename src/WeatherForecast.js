import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props){
function handleResponse(response){
    console.log(response.data);
}
console.log(props);
    let apiKey= "701f06352d61835bc4fc894e7b084629";
    let longitude= props.coordinates.lon;
    let latitude= props.coordinates.lat;
    let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    
    Axios.get(apiUrl).then(handleResponse);
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