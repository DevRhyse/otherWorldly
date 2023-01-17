
class WeatherData{
    constructor(){
        this.localMinTemp = ''
        this.localMaxTemp = ''
        this.localPressure = ''
        this.marsMaxTemp = ''
        this.marsMinTemp = ''
        this.marsPressure = ''
    }
    async fetchMarsData() {
        const talkingPoint = "https://api.maas2.apollorion.com/"
        let APIobject = await fetch(talkingPoint)
        if (APIobject.status !== 200) {
            console.log(`Error: ${APIobject.status}`)
        } else {
            let APIresult = await APIobject.json()
            console.log(APIresult)
            this.setMarsWeather(APIresult.max_temp,APIresult.min_temp,APIresult.pressure)
        }
    }
    async fetchEarthData() {
        const APIkey = '16d6fbb585496fa921ab85ad22947271'
        const talkingPoint = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={APIkey}'

        let APIobject = await fetch(talkingPoint)
        if (APIobject.status !== 200) {
            console.log(`Error: ${APIobject.status}`)
        } else {
            let APIresult = await APIobject.json()
            console.log(APIresult)
            
        }
    }
    setMarsWeather(latestMax,latestMin,latestPressure){
        this.marsMaxTemp = latestMax
        this.marsMinTemp = latestMin
        this.marsPressure = latestPressure
        this.setMarsDataIntoDOM()
    }    
    setMarsDataIntoDOM(){
        const marsMinDOM = document.querySelector('#marsMin')
        const marsMaxDOM = document.querySelector('#marsMax')
        const marsPressureDOM = document.querySelector('#marsPressure')
        marsMinDOM.innerText = this.marsMinTemp
        marsMaxDOM.innerText = this.marsMaxTemp
        marsPressureDOM.innerText = this.marsPressure

    }
}

document.querySelector('#start').addEventListener('click',() => {
    const weatherData = new WeatherData()
    weatherData.fetchMarsData()
    weatherData.fetchEarthData()
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
