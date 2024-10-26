import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'

function HDRSection() {
  return (
    <section className="relative overflow-hidden flex flex-col justify-start md:justify-center items-center  px-2 md:px-4 py-16 w-full h-[750px] md:h-[862px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/smartphone/S_Twenty_Three/CamBg.webp')" }}>
      <div className="w-full max-w-7xl mx-auto z-10">
        <div className="w-full mt-[5px] md:mt-[65px] ml-0 md:ml-[168px] text-center md:text-left">
          <h2 className=" text-purple-200 mb-4 font-markot text-mobile/h4 md:text-desktop/h2 md:ml-10 ">
            HDR 4.0 Enhanced Detailed Captures!
          </h2>
          <p className="text-white max-w-2xl font-markot text-center text-desktop/h5/medium md:ml-32">
            Capture every detail with HDR 4.0 for stunning, lifelike images.
            Experience enhanced clarity and vibrant colors in your photos.
          </p>
        </div>
        <div className="relative w-full px-4 py-8 md:px-20 md:py-16 overflow-hidden ">
          <div className="relative flex justify-center md:justify-between max-h-[500px] ">
            <ReactCompareSlider
              // changePositionOnHover={true}
              handle={<div className="inset-y-0 left-1/2 transform w-[2px] bg-white opacity-50 h-full block">
                <div className="w-4 h-24 bg-white rounded-full flex items-center justify-center absolute top-[150px] md:top-[190px]  -left-[7px] transform  ">
                </div>
              </div>}
              itemOne={<ReactCompareSliderImage src="/smartphone/S_Twenty_Three/HdrRight.webp" alt="No HDR" className='blur-sm h-full' />}
              itemTwo={<ReactCompareSliderImage src="/smartphone/S_Twenty_Three/Hdrleft.webp" alt="With HDR 4.0" />}
              transition='1s ease-in-out'
            />
            <div className="absolute bottom-4 md:bottom-8 left-16 transform -translate-x-1/2 md:left-6 md:transform-none px-6 py-2 bg-gray-400 bg-opacity-30 text-white text-mobile/h7 md:text-desktop/title ">
              NO HDR
            </div>
            <div className="absolute md:bottom-8  transform -translate-x-1/2 -right-14  bottom-4 md:right-6 md:transform-none px-6 py-2  bg-gray-400 bg-opacity-30 text-white text-mobile/h7 md:text-desktop/title ">
              WITH HDR 4.0
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HDRSection;
