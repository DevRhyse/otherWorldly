import React from "react";
import { StartAPI } from "./StartAPI";
import { WeatherDisplay } from "./WeatherDisplay";
import { EarthAPI } from "./EarthAPI";

export default function Content(){
    const MarsAPI = () => {
        return console.log('Mars Test')
    }
    const LocalAPI = () => {
        return console.log('local Test')
    }

    const [coordinates, setCoordinates] = React.useState({
		longitude: "0",
		latitude: "0"
	}) 
	const handleChangeLong = input => {
		setCoordinates(prevState => ({...prevState, longitude: input.target.value}))
		console.log(coordinates)
	}
	const handleChangeLat = input => {
		setCoordinates(prevState => ({...prevState, latitude: input.target.value}))
		console.log(coordinates)
	}

    const [weather, setWeather] = React.useState({})

    const getEarthAPIData = () => {
        const APIkey = 'c01863ea5cc73a1143508657512cc6e1'
	 	const latAndLong = `lat=${coordinates.latitude}&lon=${coordinates.longitude}`
        fetch(`https://api.openweathermap.org/data/2.5/weather?${latAndLong}&appid=${APIkey}&units=metric`)
            .then(res => res.json())
            .then(data => setWeather(data))
            .then(displayEarthWeather)
        // console.log(weather)
    }

    const displayEarthWeather = () => {
        return (
            <div
                className="row-start-4 col-start-2 col-span-2 mx-4  grid grid-flow-row grid-rows-5 text-left border-solid border-2 border-sky-500 items-stretch">
                        <span>Location: {`${coordinates.latitude} & ${coordinates.longitude}`}</span>
                        <span>Lowest Temperature: {weather.main.temp_min}</span>
                        <span>Highest Temperature: {weather.main.temp_max}</span>
                        <span>Atmosphic Pressure: {weather.main.pressure}</span>
                        <span>Wind Speed: 0</span>
            </div>
        )
    }

    const placeData = () => {
        // console.log(weather.main.temp_min)
    //    return <WeatherDisplay
    //    minTemp={weather.main.temp_min}
    //    maxTemp
    //    atPressure
    //    windSpeed
    //    location
    //    placement="row-start-4 col-span-7 col-start-2 gap-5 mx-16 grid grid-flow-row grid-cols-5 text-center"/>
    }

    // React.useEffect(() => {
    //     async function getEarthAPIData(){
    //         const APIkey = 'c01863ea5cc73a1143508657512cc6e1'
	// 	    const latAndLong = `lat=${coordinates.latitude}&lon=${coordinates.longitude}`
    //         const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?${latAndLong}&appid=${APIkey}&units=metric`)
    //         const data = await res.json()
    //         setWeather(data)
    //         console.log(weather)
    //     }
    //     getEarthAPIData()
    // }, [])
    
//  console.log(weather)

    return(
        <div className="grid grid-cols-8 grid-rows-6 min-w-screen h-full">
            <StartAPI
                text="This button will ask you for your IP address, this uses geolocation API to gather your local weather for comparision and isn't saved."
                placement="grid col-span-2 col-start-1 text-slate-50 ml-10"
                name="Local"
                buttonText="Get Your Local Weather"
                handleClick={LocalAPI}/>
            <EarthAPI
                placement="grid col-start-4 col-span-2"
                latitude={coordinates.latitude}
                longitude={coordinates.longitude}
                HandleLatchange={handleChangeLat}
                Handlelongchange={handleChangeLong}
                HandleEarthAPI={getEarthAPIData}
                />
            <StartAPI
                text="This button will show you the most recent weather from the Mars rover 'Curiousity'"
                placement="grid col-start-7 col-span-2 mr-10"
                name="Mars"
                buttonText="Get Mars Weather"
                handleClick={MarsAPI}/>
            {/* <WeatherDisplay
                // minTemp={weather.main.temp_min}
                maxTemp
                atPressure
                windSpeed
                location
                placement="row-start-4 col-start-2 col-span-2 mx-4  grid grid-flow-row grid-rows-5 text-left border-solid border-2 border-sky-500 items-stretch"/> */}
            {displayEarthWeather}
        </div>
    )
}