import React from 'react'

const Centervid = () => {
  return (
    <div className="relative h-[202px] lg:h-[810px] font-markot">
      <video
        autoPlay
        muted
        loop
        src="https://res.cloudinary.com/djwj42mic/video/upload/v1730285171/-742e-4df3-a8ad-7f3c47b7ac98_qvm6da.mp4"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <p className="absolute bottom-2 lg:bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white text-mobile/h7 lg:text-desktop/h2">
        Connecting Hearts, Everyday with itel!
      </p>
    </div>
  )
}

export default Centervid
