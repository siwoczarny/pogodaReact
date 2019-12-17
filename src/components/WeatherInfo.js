import React from 'react';
import './weatherinfo.css';

const WeatherInfo = props => {
    const {
        city,
        date,
        temp,
        temp_min,
        temp_max,
        sunrise,
        sunset,
        pressure,
        humidity,
        windspeed,
        err,
    } = props.weather

    let content = null;

    if(!err && city) {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        content = (
            <>
                <h3> {city} </h3>
                <h4> Czas: {date} </h4>
                <hr></hr>
                <h2> {temp}&#176;C</h2>
                <h3> {pressure} hPa</h3>
                
                <hr></hr>
                <h4> Wilgotność: {humidity}%</h4>
                <h4> Prędkość wiatru: {windspeed} m/s</h4>
                <h4>Temperatura minimalna: {temp_min}&#176;C</h4>
                <h4>Temperatura maksymalna: {temp_max}&#176;C</h4>
                <h4>Wschód Słońca: {sunriseTime}</h4>
                <h4>Zachód Słońca: {sunsetTime}</h4>
                
                
            </>
        )
    }
    return (
        <div className="weatherInfo">
            {err ? `Nie ma w bazie wyszukiwanego miasta: ${city}` : content}
        </div>
    )
}

export default WeatherInfo;