import React from 'react'
// import CoolGadgets from '../components/core/CoolGadgets'
// import SmartAppliances from '../components/core/SmartAppliances'

// import MovingRingComponent from '../components/core/MovingRingComponent';
// import TvAnimationLoop from '../components/core/TvAnimation'
// import ImageWithText from '../components/core/ImageWithText';
import Navbar from '../components/common/Navbar';
import SliderComponent from '../components/core/SliderComponent';
import Hero from '../components/common/Hero';
import CardSection from '../components/core/CardSection';
//  Aashish Gulshan 
const HomePage = () => {
    return (

        <div className='content'>
            <Navbar/>
            <Hero/>
            <CardSection/>
            <SliderComponent/>
        </div>
    )
}
export default HomePage