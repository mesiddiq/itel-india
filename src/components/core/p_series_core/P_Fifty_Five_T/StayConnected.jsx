import React from 'react'

const StayConnected = () => {
  return (
    <div className='flex relative w-full h-[750px] md:h-[720px] py-[50px] md:pt-[50px]'>
    	<div className='content items-center px-[50px] md:px-[80px] bg-[url("/smartphone/p55T/Backgrounds/StayConnectedBgSmall.webp")] md:bg-[url("/smartphone/p55T/Backgrounds/StayConnectedBg.webp")] bg-contain bg-center bg-no-repeat' data-aos='fade-down'>
      	<div className='grid grid-cols-2 text-center md:text-left md:items-center h-full'>
      		<div className='col-span-2 md:col-span-1 w-[85%] md:w-[400px] mx-auto md:mx-0 mt-14 md:mt-0'>
	      		<h3 className='text-[#FFFFFF] text-mobile/h4 md:text-desktop/h3 font-markot'>Stay Connected from Dawn to Dusk</h3>
	      		<p className='text-[#FFFFFF] text-mobile/body/2 md:text-desktop/body/1 font-markot mt-2 md:mt-5'>Power through your day with a 6000mAh battery, 18W fast charging, and 45 days of standby. No more fretting over battery life!</p>
	      		<div className='flex justify-between md:justify-start text-left pt-5'>
	      			<div>
		      			<h4 className='text-[#FFFFFF] text-mobile/h5/medium md:text-desktop/h4 font-markot'>6000 mAh</h4>
		      			<p className='text-[#FFFFFF] text-mobile/body/2 md:text-desktop/body/2/regular font-markot mt-2'>Powerful Battery</p>
		      		</div>
		      		<div className='pl-8'>
		      			<h4 className='text-[#FFFFFF] text-mobile/h5/medium md:text-desktop/h4 font-markot'>18W</h4>
		      			<p className='text-[#FFFFFF] text-mobile/body/2 md:text-desktop/body/2/regular font-markot mt-2'>Fast Charging</p>
		      		</div>
	      		</div>
	      	</div>
      	</div>
    	</div>
    </div>
  )
}

export default StayConnected;