import React from 'react';
import style from './WeatherData.module.css';
import wind from '../img/wind.png';
import humidity from '../img/Humidity.png'

export const WeatherData = (props) => {

  return <div className='data'>
    <div className={style.temperature}>
      <div className={style.temp}>{props.temp ? `${props.temp > 0 ? '+' + props.temp : props.temp}°C` : '0°C'} </div>
      <div className={style.feels_like}>Ощущается как: {props.feels_like ? `${props.feels_like > 0 ? '+' + props.feels_like : props.feels_like}°C` : '0°C'} </div>
    </div>
    <div className={style.humidity}>
      <img src={humidity} className={style.logo}/>
      <p>Влажность: {props.humidity ? `${props.humidity}%` : '0 %'}</p>
    </div>
    <div className={style.wind_speed}>
      <img src={wind} className={style.logo}/>
      <p>Скорость ветра: {props.wind_speed ? `${props.wind_speed}м/с` : '0 м/с'}</p>
    </div>
  </div>
}