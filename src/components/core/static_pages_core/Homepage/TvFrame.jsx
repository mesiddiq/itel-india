import React from 'react'
import { motion } from 'framer-motion'

const TvFrame = () => {
    return (
        <div className='relative overflow-hidden'>
            <motion.div
                initial={{ scale: 1.5 }}
                whileInView={{ scale: 0.8}}
                transition={{ duration: 2, ease: 'easeInOut' }}
                className="bg-[url('/static_page/homepage/tvframe.png')] scale-150 bg-contain bg-no-repeat bg-center min-w-screen max-h-[800px] h-screen mx-auto ">
                <video className='absolute w-[68.5%] left-[50.2%] -top-[3%] h-[95%] -translate-x-1/2' src='https://res.cloudinary.com/djwj42mic/video/upload/v1729068937/-d929-440a-b9cb-35701acaf97e_yhtj3r.mp4' autoPlay muted loop >
                </video>
            </motion.div>
        </div>
    )
}

export default TvFrame