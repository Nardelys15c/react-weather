import React, { useState } from 'react';
import "./Weather.css";
import axios from "axios";


export default function Weather(props){

const [weatherData, setWeatherData]=useState({ready: false});
 function handleResponse(response){
    console.log(response.data)
    setWeatherData({
        ready:true,
        temperature:response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        date: `Saturday 7:03 P.M.`,
        description:response.data.weather[0].description,
        iconUrl:`https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
        city: response.data.name
    });
 
 
 }   

if (weatherData.ready){
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
        <h1>{weatherData.city}</h1>
        <ul>
        <li>{weatherData.date}</li>
        <li className="text-capitalize">{weatherData.description}</li>
        </ul>
               <div className="row mt-3">
        <div className="col-6">
                <img src={weatherData.iconUrl} alt={weatherData.description}/>
        <span className="temperature">{Math.round(weatherData.temperature)} </span>
        <span className="unit">ºF</span>      
      </div>
      <div className="col-6">
        <ul>
           
            <li>Humidity: {Math.round(weatherData.humidity)}%</li>
            <li>Wind: {Math.round(weatherData.wind)} mph</li>
        </ul>
      </div>
      </div>
       </div>
    );
} else{
    const apiKey="012db25be4dd3739185b772ee4fc78d3";

let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
axios.get(apiUrl).then(handleResponse);
}
return "Loading...."


    
}