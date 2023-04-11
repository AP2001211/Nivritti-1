import React from 'react'
import AboutBackground from '../../assets/Guruji.png'
import {BsFillPlayCircleFill} from "react-icons/bs"
import './Homepage.css'

const About = () => {
    return (
        <div className='about-section-container'>
            <div className='about-section-image-container'>
                <img src={AboutBackground} alt='' />
            </div>
            <div className='about-section-text-container'>
                <p className='primary-subheading'>About</p>
                <h1 className='primary-heading'>Mission</h1>

                <p className='primary-text'>
                    Nivritti Gurukul partners with the JNV Classes initiative to select and develop underprivileged students into future leaders and IAS officers after 12th standard. Our mission is to empower the youth and create a more equitable society through education.
                </p>
                <div className='about-buttons-container'>
                <button className='watch-video-button'>
                    {" "}
                    <BsFillPlayCircleFill/> watch video
                </button>

            </div>
            </div>
            
            

        </div>
    )
}

export default About
