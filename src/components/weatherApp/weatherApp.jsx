import React, { useState } from 'react'
import './weatherApp.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'
const WeatherApp = () => {
    let api_key = '9e11a9bb1d5fdc4f89fd51cff2aae029';
    const[weatherIcon,setweatherIcon] = useState(cloud_icon)
    const search = async () => {
        const elem = document.getElementsByClassName('cityInput');
        if(elem[0].value===''){
            return 0;
        }
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${elem[0].value}&units=Metric&appid=${api_key}`
        let response = await fetch (url);
        let data = await response.json();
        console.log(data);
        const humidity = document.getElementsByClassName('humidity-percent');
        const wind = document.getElementsByClassName('wind-rate')
        const temp = document.getElementsByClassName('weather-temp')
        const loc = document.getElementsByClassName('weather-loc')

        humidity[0].innerHTML = data.main.humidity+"%";
        loc[0].innerHTML=data.name;
        temp[0].innerHTML=Math.round(data.main.temp)+"°C ";
        wind[0].innerHTML=data.wind.speed+"Km/hr";

        if(data.weather[0].icon==='01d'||data.weather[0].icon==='01n'){
            setweatherIcon(clear_icon)
        }
        else if(data.weather[0].icon==='02d'||data.weather[0].icon==='02n'){
            setweatherIcon(cloud_icon)
        }
        else if(data.weather[0].icon==='03d'||data.weather[0].icon==='03n'){
            setweatherIcon(drizzle_icon)
        }
        else if(data.weather[0].icon==='04d'||data.weather[0].icon==='04n'){
            setweatherIcon(drizzle_icon)
        }
        else if(data.weather[0].icon==='09d'||data.weather[0].icon==='09n'){
            setweatherIcon(rain_icon)
        }
        else if(data.weather[0].icon==='010d'||data.weather[0].icon==='010n'){
            setweatherIcon(rain_icon)
        }
        else if(data.weather[0].icon==='013d'||data.weather[0].icon==='013n'){
            setweatherIcon(snow_icon)
        }
        else{
            setweatherIcon(clear_icon)
        }
    }
  return (
     <div className='container'>
          <div className='top-bar'>
            <input type="text" className='cityInput' placeholder='Search'/>
            <div onClick={()=>{search()}} className='search-icon'>
                <img src={search_icon} alt="" />
            </div>
          </div>
          <div className='weather-image'>
            <img src={weatherIcon} alt="" srcset="" />
          </div>
          <div className="weather-temp">25°C</div>
          <div className="weather-loc">London</div>
          <div className="data-container">
            <div className="elem">
                <img className='icon' src={humidity_icon} alt="" />
                <div className="data">
                    <div className="humidity-percent">65%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="elem">
                <img className='icon' src={wind_icon} alt="" />
                <div className="data">
                    <div className="wind-rate">15 km/hr</div>
                    <div className="text">Wind</div>
                </div>
            </div>
          </div>
     </div>
  )
}
export default WeatherApp
