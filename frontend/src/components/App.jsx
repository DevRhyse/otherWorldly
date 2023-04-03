import { useState } from 'react'
import Header from './Header'
import Main from './Main'
import WeatherDisplay from './WeatherDisplay'

function App() {
  return  (
    <div className=" text-slate-50">
        <Header/>
        <div className="">
          <Main/>
          <WeatherDisplay/>
        </div>
    </div>
  )
}

export default App
