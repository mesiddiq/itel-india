import React from 'react'

const Herosection = () => {
  return (

    <div className="relative h-[400px] lg:h-[628px]  w-full">
      <video
        autoPlay
        muted
        loop
        src="https://res.cloudinary.com/djwj42mic/video/upload/v1729142118/-2294-4453-9817-93fccd73c9ee_aabpf5.mp4" className="absolute top-0 left-0 h-full w-full object-cover"
      />
      <img src="/static_page/Aboutus/hero.png" alt="About us" className=' absolute  left-1/2  top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[239px] lg:max-w-[489px]' />
    </div>

  )
}

export default Herosection
