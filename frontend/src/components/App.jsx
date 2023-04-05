import { useState } from 'react'
import Header from './Header'
// import WeatherDisplay from './WeatherDisplay'
// import {Local} from './Local'
// import {EarthAPI} from './EarthAPI'
// import {MarsAPI} from './MarsAPI'
import Content from './Content'

function App() {
  return  (
    <div className=" text-slate-50">
        <Header/>
        {/* <div className="grid grid-cols-8 grid-rows-6 min-w-screen h-full">
          <Local/>
          <EarthAPI/>
          <MarsAPI/>
          <WeatherDisplay/>
        </div> */}
        <Content/>
    </div>
  )
}

export default App
