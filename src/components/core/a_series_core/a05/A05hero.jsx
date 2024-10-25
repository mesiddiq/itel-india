import React from 'react'
import BuyNowSquareBG from '../../../common/smartphone_common/BuyNowSquareBG'

export default function A05hero() {
  return (
    <div
      className='relative bg-cover md:bg-center h-screen w-full flex lg:justify-between items-center lg:flex-row flex-col'
      style={{ backgroundImage: 'url("/SmartPhone/a05/A05 banner.webp")' }}
    >
        {/* Desktop View */}
        
        <div className='flex items-start justify-start space-y-4 lg:pl-[110px] xl:pl-[140px] flex-col pt-[48px] lg:pt-0 pr-[44px] lg:pr-0 pl-3'>
            <span className='rounded-[24px] border-2 border-black px-2 py-1 gap-1 flex md:ml-3 justify-center items-center'>
                <p className='text-[#3A3358] font-extrabold text-[14px] font-bricolage'>AWESOME SERIES</p>
                <img src="/SmartPhone/a05/StarFour.png" alt="starLogo" />
            </span>
            <h1 className='lg:text-desktop/large/h text-mobile/h1 text-[#181818]'>A05s</h1>
            <p className='text-mobile/h7 lg:text-desktop/title text-[#181818] text-opacity-70 max-w-[300px] md:max-w-[500px]'>8GB* (4GB+4GB*) RAM + 64GB ROM | 6.6" HD+ DROP NOTCH DISPLAY | TYPE-C CHARGER</p>
            <p className='text-mobile/small/body md:text-[20px] font-normal leading-[24px] text-[#181818] md:pt-[40px] lg:pt-[64px]'>Available at <span className='font-bold text-mobile/h5 md:text-[20px]'>₹ 6,499/-</span></p>
            <BuyNowSquareBG/>
        </div>

        <img 
            src="/SmartPhone/a05/a05Hero.png" 
            alt="heroImage" 
            className="md:w-[75%] lg:w-[60%] absolute md:bottom-0 md:top-auto top-[10%] right-0 w-full" 
            
        />

    </div>
  )
}
