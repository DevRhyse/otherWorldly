import React from 'react'

export function WeatherDisplay(prop){
    return (
        <section 
            id="weatherDisplay" 
            className={prop.placement}>
                    <span>Location: {prop.location}</span>
                    <span>Lowest Temperature: {prop.minTemp}</span>
                    <span>Highest Temperature: {prop.maxTemp}</span>
                    <span>Atmosphic Pressure: {prop.atPressure}</span>
                    <span>Wind Speed: {prop.windSpeed}</span>
		</section>
    )
}