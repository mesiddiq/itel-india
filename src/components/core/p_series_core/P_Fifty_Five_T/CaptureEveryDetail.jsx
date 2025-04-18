import React from 'react'

const CaptureEveryDetail = () => {
  return (
    <div className='flex relative w-full h-[700px] md:h-[1100px] lg:h-[820px] bg-[url("/smartphone/p55T/Backgrounds/CaptureEveryDetailBgSmall.webp")] lg:bg-[url("/smartphone/p55T/Backgrounds/CaptureEveryDetailBg.webp")] bg-cover bg-bottom bg-no-repeat' data-aos='zoom-in'>
    	<div className='content'>
      	<div className='flex flex-col md:flex-row h-full bg-gradient-to-b from-black md:bg-none'>
      		<div className='w-full lg:w-[40%] px-[18px] lg:px-0 py-[28px] lg:py-[68px]'>
      			<div className='flex flex-col lg:justify-between h-full'>
              <div>
        				<h2 className='text-[#FFFFFF] text-mobile/h4 md:text-desktop/h2 font-markot pb-4'>Capture Every Detail That Matters</h2>
                <p className='text-[#FFFFFF] text-mobile/body/2 md:text-desktop/body/1 font-markot'>Your photos will always be picture-perfect, capturing every moment with exceptional precision and beauty!</p>
                <div className='flex md:flex-row flex-col pt-5'>
                  <div className='flex md:flex-col items-center md:items-start'>
                    <h3 className='text-[#FFFFFF] text-mobile/h5 md:text-desktop/h3 font-markot'>50MP</h3>
                    <p className='text-[#FFFFFF] text-mobile/body/large md:text-desktop/body/2/regular font-markot pl-2 md:pl-0 md:mt-2'>Super Clear Rear Camera</p>
                  </div>
                  <div className='flex md:flex-col items-center md:items-start md:pl-8 py-3 md:py-0'>
                    <h3 className='text-[#FFFFFF] text-mobile/h5 md:text-desktop/h3 font-markot'>8MP</h3>
                    <p className='text-[#FFFFFF] text-mobile/body/large md:text-desktop/body/2/regular font-markot pl-2 md:pl-0 md:mt-2'> Front Camera</p>
                  </div>
                </div>
      				</div>
              <div>
      					<h5 className='text-[#FFFFFF] text-mobile/body/large md:text-desktop/h5/medium font-markot'>AI Ultra Clear Portraits | Panorama Mode | Super Night Mode | Pro Mode | Time-Lapse Photography</h5>
      					<p className='text-[#FFFFFF] text-mobile/body/2 md:text-desktop/body/2/regular font-markot pt-2'>Camera Modes</p>
      				</div>
      			</div>
      		</div>
      	</div>
    	</div>
    </div>
  )
}

export default CaptureEveryDetail;