import React from 'react'
import { motion } from 'framer-motion'

const TvFrame = () => {
    return (
        <div className=' overflow-hidden'>
            {/* <motion.div
                initial={{ scale: 1.5 }}
                whileInView={{ scale: 0.8}}
                transition={{ duration: 2, ease: 'easeInOut' }}
                className=" border scale-150 bg-contain bg-no-repeat bg-center max-w-[1440px] max-h-[800px] h-screen mx-auto relative ">
                    </motion.div> */}
            <div className="content relative lg:h-screen">
                <motion.div
                    initial={{ scale: 1.5 }}
                    whileInView={{ scale: 0.8 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    className="max-w-[900px] w-fit h-full mx-auto relative"
                >
                    <h1 className="lg:text-[107px] lg:leading-[109px] text-[21px] leading-6 font-bold text-center z-50 absolute top-[40%] lg:scale-[0.6] mx-auto left-1/2 -translate-x-1/2">Endless Entertainment <br /> Awaits </h1>
                    <img src="/static_page/homepage/tvframe.png" alt="" className='object-contain h-full' />
                    <video className='absolute w-[97%] left-[50.2%] object-contain -top-[3%] h-[96%] -translate-x-1/2' src='/videos/homepage/tv.webm' autoPlay muted loop >
                    </video>
                </motion.div>
            </div>
        </div>
    )
}

export default TvFrame