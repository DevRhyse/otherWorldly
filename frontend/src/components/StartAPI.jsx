import React from 'react'

export function StartAPI(prop){

    return(
        <div className={prop.placement}>
			<h2 className="text-center">
                {prop.text}
            </h2>
			<button 
                onClick={prop.handleClick}
                type="button" 
                name={prop.name}
                className="border-solid border-2 border-sky-500">
                {prop.buttonText}
            </button>
		</div>
    )
}