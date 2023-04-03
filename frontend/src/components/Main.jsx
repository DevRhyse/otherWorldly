import React from 'react'
import {Local} from './Local'
import {EarthAPI} from './EarthAPI'
import {MarsAPI} from './MarsAPI'


export default function Main(){
    return (
        <main className="grid grid-col-3 grid-row-2 text-slate-50">
            <Local/>
            <EarthAPI/>
            <MarsAPI/>
        </main>
    )
}