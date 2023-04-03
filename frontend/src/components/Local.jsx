import React from 'react'

export function Local(){
    return (
        <section className="grid col-span-1 col-start-1 text-slate-50 w-4/12 ml-10 ">
            <h2 className="text-center">
                This button will ask you for your IP address, this uses geolocation API to gather your local weather for comparision and isn't saved.
            </h2>
            <button className="border-solid border-2 border-sky-500" id="gatherLocal" type="button">
                Get Your Local Weather
            </button>
        </section>
    )
}