import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
console.log(props.icon);
    const codeMapping={
"01d": "CLEAR_DAY",
"01n": "CLEAR_NIGHT",
"02d": "PARTLY_CLOUDY_DAY",
"02n": "PARTLY_CLOUDY_NIGHT",
"03d": "PARTLY_CLOUDY_DAY",
"03n": "CPARTLY_CLOUDY_NIGHT",
"04d": "CLOUDY",
"04n": "CLOUDY",
"09d": "RAIN",
"09n": "RAIN",
"10d": "RAIN",
"10n": "RAIN",
"11d": "RAIN",
"11n": "RAIN",
"13d": "SNOW",
"13N": "SNOW",
"50d": "FOG",
"50n": "FOG",
};
    return (
     <ReactAnimatedWeather
        icon={codeMapping[props.icon]}
        color="Blue"
        size={props.size}
        animate={true}
      />
    );
}
