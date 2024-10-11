import React from 'react'
import CardItem from './caritems'
import './cards.css'

export default function cards() {
  return (
    <div className='cards'>
      <h1>Check Out this Epic Destination</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            < CardItem 
            src="images/img-9.jpg"
            text="Explore the hidden waterfall deep inside the Amazon jungle"
            label="Adventure"
            path='/services'
            />
            < CardItem 
            src="images/img-2.jpg"
            text="Travel Through the Island of Bali in a private Cruse"
            label="Luxury"
            path='/services'
            />
          </ul>
          <ul className="cards__items">
            < CardItem 
            src="images/img-9.jpg"
            text="Explore the hidden waterfall deep inside the Amazon jungle"
            label="Adventure"
            path='/services'
            />
            < CardItem 
            src="images/img-2.jpg"
            text="Travel Through the Island of Bali in a private Cruse"
            label="Luxury"
            path='/services'
            />
            < CardItem 
            src="images/img-2.jpg"
            text="Travel Through the Island of Bali in a private Cruse"
            label="Luxury"
            path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}


