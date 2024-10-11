import React from 'react'
import '../../App.css'

export default function Trailer(){
    return(
        <>
        <div className='trailer'>
        <video   src="/videos/video-1.mp4" autoPlay loop muted></video>
        </div>
        </>
    )
}