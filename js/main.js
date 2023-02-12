const weatherBox = document.querySelector('#weatherDisplay')


// Checks for Geolocation API in Browser
if ('geolocation' in navigator) {
    console.log('geolocation is available')
}else{
    console.log("geolocation IS NOT available")
}

// Class is used to gather Earth Weather Data
class WeatherData {
    
    constructor(minimum, maximum, pressure, location, windSpeed) {
        this.minimumTemperature = minimum
        this.maximumTemperature = maximum
        this.pressure = pressure
        this.location = location
        this.windSpeed = windSpeed
    }
    
    
    async fetchEarthData(latitude, longitude) {
        const APIkey = 'c01863ea5cc73a1143508657512cc6e1'
        const latAndLong = `lat=${latitude}&lon=${longitude}`
        const talkingPoint = `https://api.openweathermap.org/data/2.5/weather?${latAndLong}&appid=${APIkey}&units=metric`
        
        console.log(talkingPoint)
        
        let APIobject = await fetch(talkingPoint)
        if (APIobject.status !== 200) {
            console.log(`Error: ${APIobject.status}`)
        } else {
            let APIresult = await APIobject.json()
            console.log(APIresult.wind['speed'])
            console.log(APIresult)
            this.setWeatherVariables(APIresult.main.temp_max, APIresult.main.temp_min, APIresult.main.pressure, latAndLong, APIresult.wind['speed'])
        }
    }
    
    setWeatherVariables(latestMax, latestMin, latestPressure, location, windSpeed) {
        this.maximum = latestMax
        this.minimum = latestMin
        this.pressure = latestPressure
        this.location = location
        if(windSpeed === null){
            this.windSpeed = 'Unavailable'
        }else{
            this.windSpeed = windSpeed
        }
        this.createNewWeatherDisplay()
    }

    createNewWeatherDisplay(){
        const enteredWeatherBox = document.createElement('section')
        enteredWeatherBox.classList.add('border-solid', 'border-2','border-sky-500')

        const header = document.createElement('h2')
        header.innerText = `${this.location}`

        const maximumTemp = document.createElement('span')
        maximumTemp.innerText = `Maximum Temperature:  ${this.maximum}c \n`

        const minimumTemp = document.createElement('span')
        minimumTemp.innerText = `Minimum Temperature:  ${this.minimum}c \n`

        const pressureDisplay = document.createElement('span')
        pressureDisplay.innerText = `Atmospheric Pressure:  ${this.pressure} \n`
        
        const windSpeedDisplay = document.createElement('span')
        windSpeedDisplay.innerText = `Wind Speed:  ${this.windSpeed}`

        enteredWeatherBox.appendChild(header)
        enteredWeatherBox.appendChild(maximumTemp)
        enteredWeatherBox.appendChild(minimumTemp)
        enteredWeatherBox.appendChild(pressureDisplay)
        enteredWeatherBox.appendChild(windSpeedDisplay)

        weatherBox.appendChild(enteredWeatherBox)

        enteredWeatherBox.addEventListener('click', () => {weatherBox.removeChild(enteredWeatherBox)})
    }
    
    numberTrim(num) {
        return num[0] == '-' ? num.slice(0, 6) : num.slice(0, 5)
    }
}
// Eventlistener to gather weather of the entered variables of users and display to DOM
document.querySelector('#startEarth').addEventListener('click', () => {
    const weatherDataEarth = new WeatherData()
    let long = document.querySelector('#longitude').value
    let lat = document.querySelector('#latitude').value

    let trimmedLong = weatherDataEarth.numberTrim(long)
    let trimmedLat = weatherDataEarth.numberTrim(lat)

    weatherDataEarth.fetchEarthData(trimmedLat, trimmedLong)
})

// This class is used to gather the latest Mars data from the rover
class MarsWeather extends WeatherData{
    constructor(minimum, maximum, pressure, location, windSpeed){
        super(minimum, maximum, pressure, location, windSpeed)
    }
    
    async fetchMarsData() {
        const talkingPoint = "https://api.maas2.apollorion.com/"
        const APIobject = await fetch(talkingPoint)
        
        if (APIobject.status !== 200) {
            console.log(`Error: ${APIobject.status}`)
        } else {
            let APIresult = await APIobject.json()
            console.log(APIresult)
            this.setMarsWeather(APIresult.max_temp, APIresult.min_temp, APIresult.pressure, 'Mars Weather', APIresult.wind_speed)
        }
    }
    
    setMarsWeather(latestMax, latestMin, latestPressure, location, windSpeed) {
        return super.setWeatherVariables(latestMax, latestMin, latestPressure, location, windSpeed)
    }
}
//Eventlistener to start Mars data collection
document.querySelector('#startMars').addEventListener('click', () => {
    const weatherDataMars = new MarsWeather()
    
    weatherDataMars.fetchMarsData()
})

// This class is for using the Geolocation API to gather and display local weather
class LocalWeather extends WeatherData{
    constructor(minimum, maximum, pressure, location, windSpeed){
        super(minimum, maximum, pressure, location, windSpeed)
    }
    async fetchLocalEarthData(latitude, longitude) {
        const APIkey = 'c01863ea5cc73a1143508657512cc6e1'
        const latAndLong = `lat=${latitude}&lon=${longitude}`
        const talkingPoint = `https://api.openweathermap.org/data/2.5/weather?${latAndLong}&appid=${APIkey}&units=metric`
        
        console.log(talkingPoint)
        
        let APIobject = await fetch(talkingPoint)
        if (APIobject.status !== 200) {
            console.log(`Error: ${APIobject.status}`)
        } else {
            let APIresult = await APIobject.json()
            console.log(APIresult)
            this.setLocalWeather(APIresult.main.temp_max, APIresult.main.temp_min, APIresult.main.pressure, APIresult.wind['speed'], 'Local Weather')
        }
    }
    
    setLocalWeather(latestMax, latestMin, latestPressure, windSpeed, location) {
        super.setWeatherVariables(latestMax, latestMin, latestPressure, location, windSpeed)
    }
    
}
// Event Listener to start Local Weather
document.querySelector('#gatherLocal').addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const weatherDataLocal = new LocalWeather()
        
        weatherDataLocal.fetchLocalEarthData(position.coords.latitude, position.coords.longitude)
    })
})







// https://maas2.apollorion.com/#/Latest/get_
// used wesite for mars data

// weather app idea

// use (NWS) National Weather Service API

// Use IP - based geolocation https://www.iplocation.net/

// get IP from user

// if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    //     $ip = $_SERVER['HTTP_CLIENT_IP'];
// } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
//     $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
// } else {
    //     $ip = $_SERVER['REMOTE_ADDR'];
    // }
    
    // rip from stackOverflow check for usability
    // https://www.abstractapi.com/guides/how-to-track-ip-address-of-website-visitors
    // extra reading
    


// Use gather IP to fetch weather data from NWS api

// show weather data to user


/*
Caching: One popular caching solution for Node.js is Redis. It's an in-memory data structure store that can be used as a cache, message broker, and a database.

Visualization: For visualizing the weather data, you can use JavaScript libraries such as Chart.js or D3.js. These libraries make it easy to create interactive and customizable charts and graphs.

Alerting: For sending alerts to users, you could use a service such as Twilio to send SMS messages, or a service such as SendGrid to send email messages.

Creating an API: Express.js is a popular framework for creating APIs in Node.js. It provides a simple and flexible way to handle routing and middleware, and it can be used in conjunction with other popular libraries such as Mongoose (for MongoDB) and Passport (for authentication)


For the Map visualization feature, you can use mapping libraries like leaflet.js or OpenLayers.

*/
