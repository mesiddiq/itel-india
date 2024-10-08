import React from 'react'
import CoolGadgets from '../components/core/CoolGadgets'
import SmartAppliances from '../components/core/SmartAppliances'

import MovingRingComponent from '../components/core/MovingRingComponent';
import TvAnimationLoop from '../components/core/TvAnimation'
import ImageWithText from '../components/core/ImageWithText';
//  Aashish Gulshan 
const HomePage = () => {
    return (

        <div className='content'>
            <h1 className='text-white'>Aashish Gulshan</h1>
            <TvAnimationLoop />
            <ImageWithText />
            {/* <MovingRingComponent /> */}
        </div>
    )
}
export default HomePage