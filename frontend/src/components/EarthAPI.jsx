import React from 'react'

export function EarthAPI(){
	// const response = await fetch("")
    return (
        <section className="grid col-start-2 ">
			<h2 className="">Enter latitude and longitude for any earth weather</h2>
			<section className=" w-96 h-16 border-solid border-2 border-sky-500 grid grid-rows-2 grid-cols-6 gap-0 rounded-lg">
				<div className="">
					<button id="startEarth" type="button" name="button" className="border-solid border-2 border-sky-500">Get Earth Weather</button>
				</div>
				<div className=" text-black">
					<input id="latitude" type="number" name="latitude" value="" maxLength="6" placeholder="latitude" className="border-solid border-2 border-sky-500"/>
					<input id="longitude" type="number" name="longitude" value="" maxLength="6" placeholder="longitude" className="border-solid border-2 border-sky-500"/>
				</div>
			</section>
				<p className="">Click any component to remove it</p>
		</section>
    )
}