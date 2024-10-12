import React from 'react'

const Powerful = () => {
  return (
    <div className='w-full h-[960px] px-[80px] py-[120px]'>
 <div className="relative w-full  flex items-center justify-center">
      {/* The main container */}
      <div className="relative w-[1280px] h-[720px] rounded-[16px] overflow-hidden ">
        {/* Image (Placeholder for your actual image) */}
        <img
          src="/P_Series/bg.png"  // Replace this with the actual image URL
          alt=""
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay with Matrix Transformation */}
        <div
          className="absolute top-0 h-full w-full"
          style={{
              // Positioned off the right initially
            background: 'linear-gradient(270.86deg, rgba(8, 14, 26, 0) 46.54%, #080E1A 61%)',
            transform: 'matrix(-1, 0, 0, 1, 0, 0)',  // Horizontal flip
          }}
        ></div>

        <div className="absolute top-0 right-0 p-8 text-white text-Desktop/Body Large w-[540px] h-[525px] flex flex-col justify-between gap-[24px]">
     <div className='pt-[87px]'>
          <div className=" text-lg font-bold mb-2 flex items-center">
            <img src="/P_Series/media.png" className='h-[40px]'></img> Dimensity 6080 Octa Core
          </div>


          <h1 className=" font-medium text-desktop/h2 mb-4">
            Powerful Processing <br /> like Never Before
          </h1>

          {/* Subheading */}
          <p className="text-desktop/body/large mb-6">
            Low Power Consumption | Faster Running Speed | Better Image Processing
          </p>
          </div>
          {/* Chipset Info */}
          <div className="flex items-center space-x-8">
            <div className="text-desktop/body/1">
              <span className="text-desktop/h3 font-bold">6nm</span><br />
              Fast and Efficient Chipset
            </div>
            <div className="text-desktop/body/1">
              <span className="text-desktop/h3 font-bold">2.4 GHz</span><br />
              Primary Clock Speed
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
  )
}

export default Powerful