
const localMinDOM = document.querySelector('#localMin')
const localMaxDOM = document.querySelector('#localMax')
const localPressureDOM = document.querySelector('#localPressure')
const marsMinDOM = document.querySelector('#marsMin')
const marsMaxDOM = document.querySelector('#marsMax')
const marsPressureDOM = document.querySelector('#marsPressure')
const enteredMinDOM = document.querySelector('#enteredMin')
const enteredMaxDOM = document.querySelector('#enteredMax')
const enteredPressureDOM = document.querySelector('#enteredPressure')

class WeatherData {

    constructor() {
        this.localMinTemp = ''
        this.localMaxTemp = ''
        this.localPressure = ''
        this.marsMaxTemp = ''
        this.marsMinTemp = ''
        this.marsPressure = ''
    }

    async fetchMarsData() {
        const talkingPoint = "https://api.maas2.apollorion.com/"
        const APIobject = await fetch(talkingPoint)

        if (APIobject.status !== 200) {
            console.log(`Error: ${APIobject.status}`)
        } else {
            let APIresult = await APIobject.json()
            console.log(APIresult)
            this.setMarsWeather(APIresult.max_temp, APIresult.min_temp, APIresult.pressure)
        }
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
            console.log(APIresult)
            this.setLocalWeather(APIresult.main.temp_max, APIresult.main.temp_min, APIresult.main.pressure)
        }
    }

    setMarsWeather(latestMax, latestMin, latestPressure) {
        this.marsMaxTemp = latestMax
        this.marsMinTemp = latestMin
        this.marsPressure = latestPressure
        this.setMarsDataIntoDOM()
    }

    setMarsDataIntoDOM() {
        marsMinDOM.innerText += `  ${this.marsMinTemp}c`
        marsMaxDOM.innerText += `  ${this.marsMaxTemp}c`
        marsPressureDOM.innerText += `  ${this.marsPressure}`
    }

    setLocalWeather(latestMax, latestMin, latestPressure) {
        this.localMaxTemp = latestMax
        this.localMinTemp = latestMin
        this.localPressure = latestPressure
        this.setLocalDataIntoDOM()
    }

    setLocalDataIntoDOM() {
        localMinDOM.innerText += `  ${this.localMinTemp}c`
        localMaxDOM.innerText += `  ${this.localMaxTemp}c`
        localPressureDOM.innerText += `  ${this.localPressure}`
    }

    numberTrim(num) {
        return num[0] == '-' ? num.slice(0, 6) : num.slice(0, 5)
    }
}

if ('geolocation' in navigator) {
    console.log('geolocation is available')
}else{
    console.log("geolocation IS NOT available")
}

navigator.geolocation.getCurrentPosition((position) => {
    const weatherDataLocal = new WeatherData()

    weatherDataLocal.fetchEarthData(position.coords.latitude, position.coords.longitude)
})

document.querySelector('#startMars').addEventListener('click', () => {
    const weatherDataMars = new WeatherData()

    weatherDataMars.fetchMarsData()
})

document.querySelector('#startEarth').addEventListener('click', () => {
    const weatherDataEarth = new WeatherData()
    let long = document.querySelector('#longitude').value
    let lat = document.querySelector('#latitude').value

    let trimmedLong = weatherDataEarth.numberTrim(long)
    let trimmedLat = weatherDataEarth.numberTrim(lat)

    weatherDataEarth.fetchEarthData(trimmedLat, trimmedLong)
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
