import React from 'react'
import Navbar from './Navbar';
import './Homepage.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import guruji from '../../assets/Guruji.png'
import students from '../../assets/students.png'
import About from './About';




const Homepage = () => {
  const images=[guruji,students];
  return (
    <div className='home-container'>
    <Navbar/>
    <div className='home-banner-container'>
        <div className='home-text-section'>
          <h1 className='primary-heading'style={{color:"#354E6C"}}>
              Come ignite your nobility and live a life rich in service to others
          </h1>
          <p className='primary-text' style={{color:'#354E6C'}}>
          Welcome to the Online Admission Portal of Nivritti Gurukul, a sister organisation of IndiaNow Foundation.
          </p>

        </div>
        <div className='home-image-container' style={{marginRight:"50px"}}>
        <img src={students} alt=''/>
      </div>
    </div>
    <About/>
    <div>
      <br></br>
      <br></br>
      <br></br>
    </div>
    {/* <Footer/> */}
    </div>
  )
}

export default Homepage
