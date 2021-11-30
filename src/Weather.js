import axios from "axios";
import React from 'react'
import { useState, useEffect } from "react";

const data = {
    weather: [{
        description: "", 
        icon: "" }],
    main: {
        temp: 0,
        feels_like: 0,
        temp_max: 0,
        temp_min: 0,
        humidity: 0,
    },
    name: ""
  };

export default function Weather() {
    const API = '3aa5c82105994b81263f26aba7b27f62'
    const [weather,setWeather] = useState(data);
    useEffect(() => {
        getWeather()
    }, [])
    const getWeather = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${API}`)
        .then((res) =>{
            setWeather(res.data)
            console.log(res.data)
        })
    }
    const ToCelsius = (temp) => parseInt((temp-32)/1.8) + "°C"
    
    return (
        <div style={{class:'square', display:'flex', margin:'auto', textAlign: 'center', border:'5px inset blue'}}>
            {new Date().toLocaleString()}
            <h1>{weather.name}, ON</h1>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
            <h4>{weather.weather[0].description}</h4>
            <body>
                <h1>{ToCelsius(weather.main.temp)}</h1>
                <>Feels Like: {ToCelsius(weather.main.feels_like)}</>
            </body>
            
            <h4>High: {ToCelsius(weather.main.temp_max)},  </h4>
            <h4>Low: {ToCelsius(weather.main.temp_min)},  </h4>
            <h4>Humidity: {weather.main.humidity}%</h4>
        </div>
    )
}
