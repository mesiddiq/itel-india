import React from 'react'

const LevelUpWithAndroid = (props) => {
	const {scrollY} = props;

  return (
      <div className='flex relative w-full h-[355px] md:h-[720px] pt-[15px] md:pt-[50px] bg-[url("/SmartPhone/p55T/LevelUpWithAndroidBg.png")] bg-cover bg-center' style={{ marginTop: '0px' }}>
      	<div className='content'>
	      	<div className='md:w-[680px] mx-auto text-center'>
	      		<h2 className='text-[#FFFFFF] text-mobile/h4 md:text-desktop/h2 font-markot'>Level Up with Android 14 Go!</h2>
	      		<p className='text-[#FFFFFF] text-mobile/body/2 md:text-desktop/body/1 font-markot mt-2 md:mt-5'>Experience app optimization, better privacy, diverse themes & increased stability with Android 14 Go Edition.</p>
	      	</div>
      	</div>
      </div>
  )
}

export default LevelUpWithAndroid;