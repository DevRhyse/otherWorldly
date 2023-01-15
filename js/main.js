document.querySelector('button').addEventListener('click', gatherNasaData())
class WeatherData{
    constructor(localTemp,marsTemp){
        this.local = localTemp,
        this.mars = marsTemp
    }
    
    
}
function gatherNasaData(){
    fetch("https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0")
        .then(res => res.json())
        .then(data => console.log(data[sol].AT.at))
        .catch(err => console.log(err))
}

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


// get mars data

