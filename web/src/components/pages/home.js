import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../cards'
import Footer from './footer'

export default function Home(){
    return(
        <>
        <HeroSection/>
        <Cards/>
        <Footer/>
        </>
    )
}