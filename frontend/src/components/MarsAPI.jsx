import React from 'react'

export function MarsAPI(){
    return (
        <div className="grid col-start-7 col-span-2 mr-10">
			<h2 className="text-center">
                This button will show you the most recent weather from the Mars rover 'Curiousity'
            </h2>
			<button 
                id="startMars" 
                type="button" 
                name="button" 
                className="border-solid border-2 border-sky-500">
                Get Mars Weather
            </button>
		</div>
    )
}