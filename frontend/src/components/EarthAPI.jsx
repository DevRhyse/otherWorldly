import React from 'react'

export function EarthAPI(prop){

	// const startEarthAPI = async (coordinates) => {
	// 	handleChangeLat()
	// 	handleChangeLong()
	// 	console.log(coordinates.latitude)
	// 	const APIkey = 'c01863ea5cc73a1143508657512cc6e1'
	// 	const latAndLong = `lat=${coordinates.latitude}&lon=${coordinates.longitude}`
	// 	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?${latAndLong}&appid=${APIkey}&units=metric`)
	// 	const data = await response.json()
	// 	console.log(`https://api.openweathermap.org/data/2.5/weather?${latAndLong}&appid=${APIkey}&units=metric`)
	// 	return console.log(data)
	// }

	// const response = await fetch("")
    return (
        <section className={prop.placement}>
			<h2 
				className="text-center">
				Enter latitude and longitude for any earth weather
			</h2>
			<section className="p-2 w-full h-20 border-solid border-2 border-sky-500 grid grid-rows-2 grid-cols-6 gap-0 rounded-lg">
				<div className="grid col-span-3 row-span-2 text-black">
					<input 
						onChange={prop.handleLatChange}
						id="latitude" 
						type="number" 
						name="latitude" 
						value={prop.latitude}
						maxLength="6"
						className="border-solid border-2 border-sky-500"
					/>
					<label 
						htmlFor="Latitude"
						className="grid col-span-1 col-start-4 text-slate-50">
						Latitude
					</label>
					<input 
						onChange={prop.handleLongChange}
						id="longitude" 
						type="number" 
						name="longitude" 
						value={prop.longitude}
						maxLength="6"
						className="border-solid border-2 border-sky-500"
					/>
					<label 
						htmlFor="Longitude"
						className="grid col-span-1 col-start-4 text-slate-50">
						Longitude
					</label>
				</div>
				<div className="grid col-start-5 col-span-2 row-span-2">
					<button 
						onClick={prop.HandleEarthAPI}
						id="startEarth" 
						type="button" 
						name="AnyEarth" 
						className="border-solid border-2 border-sky-500">
						Get Earth Weather
					</button>
				</div>
			</section>
				<p 
					className="grid justify-center">
					Click any component to remove it
				</p>
		</section>
    )
}