import React, {useState} from "react";

import "./WeatherForecast.css";
import Axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props){
    let [loaded, setLoaded]= useState(false);
    let[forecast, setForecast]=useState(null);

function handleResponse(response){
      setForecast(response.data.daily);
      setLoaded(true);
}

    
if (loaded){
    return(
        <div className="WeatherForecast">
        <div className="row">
            <div className="col">
           <WeatherForecastDay data={forecast[0]}/>
        </div>
        </div>    
        </div>
    );
    } else {
    let apiKey= "701f06352d61835bc4fc894e7b084629";
    let longitude= props.coordinates.lon;
    let latitude= props.coordinates.lat;
    let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    
    Axios.get(apiUrl).then(handleResponse);
    return null;
    
}
}
