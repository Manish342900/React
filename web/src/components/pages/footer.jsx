import React from 'react'
import {Button} from '../Button'
import './footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
            Join the adventure newsletter to revive detils

        </p>
        <p className="footer-subscription-text">
            You can unsubscribe at any time
        </p>
        <div className='input-areas'>
            <form action="">
                <input type="email" name="email" placeholder='Your Emial' className='footer-input'/>
                <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>About me</h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/sign-up'>Testimonials</Link>
                <Link to='/sign-up'>Carreers</Link>
                <Link to='/sign-up'>Term OF Serives</Link>
                <Link to='/sign-up'>Blah BLah</Link>
            </div>
        </div>
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>About me</h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/sign-up'>Testimonials</Link>
                <Link to='/sign-up'>Carreers</Link>
                <Link to='/sign-up'>Term OF Serives</Link>
                <Link to='/sign-up'>Blah BLah</Link>
            </div>
        </div> <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>About me</h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/sign-up'>Testimonials</Link>
                <Link to='/sign-up'>Carreers</Link>
                <Link to='/sign-up'>Term OF Serives</Link>
                <Link to='/sign-up'>Blah BLah</Link>
            </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
            <div className="footer-logo">
                <Link className='social-logo'>
                TRVL <i className='fab fa-typo3'></i></Link>
            </div>
            <small className='website-rights'>TRVL @ 2020</small>
            <div className="social-icons">
                <Link className='social-icon-link facebook'>
                <i className='fab fa-facebook'></i></Link>
                <Link className='social-icon-link instagram'>
                <i className='fab fa-instagram'></i></Link>
                <Link className='social-icon-link twitter'>
                <i className='fab fa-twitter'></i></Link>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
