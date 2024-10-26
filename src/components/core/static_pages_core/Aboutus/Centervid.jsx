import React from 'react'

const Centervid = () => {
  return (
    <div className=' '>
    <div className="lg:h-[810px]  h-[202px] flex justify-center items-end">
    <video
                        autoPlay
                        muted
                        loop
                        src="https://res.cloudinary.com/djwj42mic/video/upload/v1728548513/Screen_Recording_2024-10-09_at_2.38.54_PM_ykvaf9.mov" className='w-full z-0  lg:h-full  object-cover absolute'
                    />
                  <p className=' lg:pb-[130px] text-mobile/h7 pb-3 z-10 lg:text-desktop/h2 text-white '>Connecting Hearts, Everyday with itel!</p>
                    </div>
  </div>
  )
}

export default Centervid