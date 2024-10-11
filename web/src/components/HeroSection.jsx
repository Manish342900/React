import React from 'react'
import'../App.css'
import'./HeroSection.css'
import { Button } from './Button'

export default function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/video-2.mp4" autoPlay loop muted></video>
      <h1>Adventure Awaits</h1>
      <p>What are you Waiting for</p>
      <div className='hero-btns'>
        <Button buttonStyle='btn--outline' buttonSize='btn--large'>
            GET STARTED
        </Button>
        <Button buttonStyle='btn-primary' buttonSize='btn--large'>
            Watch Trailer <i className='far fa-play-circle'></i>
        </Button>
      </div>
    </div>
  )
}
