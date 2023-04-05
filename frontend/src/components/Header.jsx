import React from 'react'

export default function Header(){
    return (
        <section className='pb-16 pt-5'>
            <header className='grid justify-items-center'>
			    <h1 
                    className=" text-slate-50">
                    Welcome to the Other Worldly Weather App
                </h1>
                <button
                    className="mt-2 border-solid border-2 border-sky-500" 
                    id="help" 
                    type="button">
                    How does this work?
                </button>
		    </header>
        </section>
    )
}