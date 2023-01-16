document.querySelector('#start').addEventListener('click', statGatheringData())

class WeatherData{
    constructor(){
        // this.local = localTemp,
        this.marsMaxTemp = ""
        this.marsMinTemp = ""
        this.marsPressure = ""
    }
    setMartianData(latestMax,latestMin,latestPressure){
        this.marsMaxTemp = latestMax
        this.marsMinTemp = latestMin
        this.marspressure = latestPressure
    }    
}

function statGatheringData(){
    const talkingPoint = "https://api.maas2.apollorion.com/"
    setMarsData(talkingPoint)
}
async function setMarsData(file){
    let APIobject = await fetch(file)
    if(!APIobject.ok){
        throw new Error(console.log(APIobject.status))
    }
    let APIresult = await APIobject.json()
    console.log(APIresult.max_temp)
     await setMarsData(APIresult.max_temp,APIresult.min_temp,APIresult.pressure)
}

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



