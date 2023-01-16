
class WeatherData{
    constructor(){
        this.localMinTemp = ''
        this.localMaxTemp = ''
        this.localPressure = ''
        this.marsMaxTemp = ''
        this.marsMinTemp = ''
        this.marsPressure = ''
    }
    async fetchData() {
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
    weatherData.fetchData()
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



