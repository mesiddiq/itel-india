import React from 'react'

const Herosection = () => {
  return (
    <div className="relative w-full h-[400px] lg:h-[628px]">
      <video
        autoPlay
        muted
        loop
        src="https://res.cloudinary.com/djwj42mic/video/upload/v1729142118/-2294-4453-9817-93fccd73c9ee_aabpf5.mp4"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <img
        src={'/static_page/Aboutus/hritik.png'}
        alt="Center Image"
        className="absolute inset-0 m-auto w-[240px] h-[192px] lg:h-[390px] lg:w-[490px] object-contain"
      />
    </div>
  )
}

export default Herosection
