import React from 'react'

const LevelUpWithAndroid = () => {
  return (
      <div className='flex relative w-full h-[355px] md:h-[720px] pt-[15px] md:pt-[50px] bg-[url("/smartphone/p55T/Backgrounds/Android14GoBgSmall.webp")] lg:bg-[url("/smartphone/p55T/Backgrounds/Android14GoBg.webp")] bg-cover bg-center overflow-hidden'>
      	<div className='content relative'>
	      	<div className='md:w-[680px] mx-auto text-center'>
	      		<h2 className='text-[#FFFFFF] text-mobile/h4 md:text-desktop/h2 font-markot' data-aos='fade-down'>Level Up with Android 14 Go!</h2>
	      		<p className='text-[#FFFFFF] text-mobile/body/2 md:text-desktop/body/1 font-markot mt-2 md:mt-5' data-aos='fade-down'>Experience app optimization, better privacy, diverse themes & increased stability with Android 14 Go Edition.</p>
	      	</div>
	      	<div className='absolute left-[20%] top-[26%]' data-aos='fade-right' data-aos-delay="1000">
	      		<img src='/smartphone/p55T/security-user.png' className='w-[14px] md:w-[34px]' />
      			<h4 className='text-[#FFFFFF] text-mobile/h7 md:text-desktop/h4 font-markot pt-1'>Improved<br />Privacy</h4>
      		</div>
      		<div className='absolute right-[15%] md:right-[20%] top-[26%]' data-aos='fade-left' data-aos-delay="2000">
	      		<img src='/smartphone/p55T/like-shapes.png' className='w-[14px] md:w-[34px]' />
      			<h4 className='text-[#FFFFFF] text-mobile/h7 md:text-desktop/h4 font-markot pt-1'>Better<br />Stability</h4>
      		</div>
      		<div className='absolute left-[10%] top-[50%]' data-aos='fade-right' data-aos-delay="1000">
	      		<img src='/smartphone/p55T/heart-tick.png' className='w-[14px] md:w-[34px]' />
      			<h4 className='text-[#FFFFFF] text-mobile/h7 md:text-desktop/h4 font-markot pt-1'>Smart Health<br />Management</h4>
      		</div>
      		<div className='absolute right-[15%] top-[50%]' data-aos='fade-left' data-aos-delay="2000">
	      		<img src='/smartphone/p55T/element-1.png' className='w-[14px] md:w-[34px]' />
      			<h4 className='text-[#FFFFFF] text-mobile/h7 md:text-desktop/h4 font-markot pt-1'>Diverse<br />Themes</h4>
      		</div>
      		<div className='absolute left-[5%] bottom-[10%]' data-aos='fade-right' data-aos-delay="1000">
	      		<img src='/smartphone/p55T/cpu-setting.png' className='w-[14px] md:w-[34px]' />
      			<h4 className='text-[#FFFFFF] text-mobile/h7 md:text-desktop/h4 font-markot pt-1'>App<br />Optimization</h4>
      		</div>
      		<div className='hidden md:block absolute left-[81%] bottom-[10%]' data-aos='fade-left' data-aos-delay="2000">
	      		<img src='/smartphone/p55T/favorite-chart.png' className='w-[14px] md:w-[34px]' />
      			<h4 className='text-[#FFFFFF] text-mobile/h7 md:text-desktop/h4 font-markot pt-1'>Upto 20% Improved<br />Performance</h4>
      		</div>
      		<div className='md:hidden absolute left-[70%] bottom-[10%]' data-aos='fade-left' data-aos-delay="2000">
	      		<img src='/smartphone/p55T/favorite-chart.png' className='w-[14px] md:w-[34px]' />
      			<h4 className='text-[#FFFFFF] text-mobile/h7 md:text-desktop/h4 font-markot pt-1'>~20% Improved<br />Performance</h4>
      		</div>
      	</div>
      </div>
  )
}

export default LevelUpWithAndroid;