import React from 'react'

const GetNotifications = () => {
  return (
    <div className='flex relative w-full h-[640px] md:h-[600px] lg:h-[860px]'  data-aos='fade-down'>
    	<div className='content items-center w-full px-[22px] lg:px-0 py-[48px] lg:py-[120px]'>
    		<div className='flex flex-col relative p-4 pb-8 md:hidden bg-black z-[2]' style={{ borderRadius: '16px 16px 0px 0px' }}>
    			<h3 className='text-[#FFFFFF] text-mobile/h5/medium font-markot'>Light Up the Lume Ring: Get Notifications Instantly</h3>
      		<p className='text-[#FFFFFF] text-mobile/body/2 font-markot mt-2 md:mt-5'>Get notified with ring-style flash.</p>
    			<img src='/smartphone/p55T/GetNotificationsVectorSM.png' className='absolute right-[81px] top-[126px] z-[10]' />
    			<img src='/smartphone/p55T/GetNotificationsVectorShadowSM.png' className='absolute right-[72px] top-[117px] z-[9]' />
      		<div className='flex items-center pt-5'>
  					<img src='/smartphone/p55T/call-calling.png' className='w-[24px]' />
      			<h4 className='text-[#FFFFFF] text-mobile/h6 font-markot pl-2'>Incoming Calls</h4>
      		</div>
      		<div className='flex items-center pt-3'>
  					<img src='/smartphone/p55T/battery-full.png' className='w-[24px]' />
      			<h4 className='text-[#FFFFFF] text-mobile/h6 font-markot pl-2'>Charging Plug-in</h4>
      		</div>
      		<div className='flex items-center pt-3'>
  					<img src='/smartphone/p55T/notification-bing.png' className='w-[24px]' />
      			<h4 className='text-[#FFFFFF] text-mobile/h6 font-markot pl-2'>Notifications</h4>
      		</div>
      	</div>
      	<div className='flex md:hidden relative w-full h-[300px] mt-[-1px] bg-[url("/smartphone/p55T/GetNotificationsBgSM.jpg")] bg-cover bg-center bg-no-repeat overflow-hidden' style={{ borderRadius: '0px 0px 16px 16px' }}>
    			<img src='/smartphone/p55T/GetNotificationsPhone.jpg' className='h-[210px] absolute bottom-0 left-[50%] transform translate-x-[-50%]' />
      	</div>
      	<div className='hidden md:grid grid-cols-2 md:h-[500px] lg:h-full md:rounded-[16px] bg-[url("/smartphone/p55T/GetNotificationsBgSM.jpg")] md:bg-[url("/smartphone/p55T/GetNotificationsBg.jpg")] bg-cover bg-center bg-no-repeat overflow-hidden'>
      		<div className='col-span-1 relative h-full w-[520px] pt-[60px] pl-[50px]'>
	      		<h3 className='text-[#FFFFFF] text-desktop/h3 font-markot'>Light Up the Lume Ring: Get Notifications Instantly</h3>
	      		<p className='text-[#FFFFFF] text-desktop/body/1 font-markot mt-2 md:mt-5'>Get notified with ring-style flash.</p>
      			<img src='/smartphone/p55T/GetNotificationsVector.png' className='absolute md:w-[65%] lg:w-[100%] md:right-[-28px] lg:right-[-162px] md:top-[260px] lg:top-[280px] z-[10]' />
      			<img src='/smartphone/p55T/GetNotificationsVectorShadow.png' className='absolute md:w-[67%] lg:w-[100%] md:right-[-35px] lg:right-[-169px] md:top-[252px] lg:top-[272px] z-[9]' />
	      		<div className='flex items-center md:pt-10 lg:pt-14'>
    					<img src='/smartphone/p55T/call-calling.png' className='w-[34px]' />
	      			<h4 className='text-[#FFFFFF] text-desktop/h5/medium font-markot pl-4 w-[100px]'>Incoming Calls</h4>
	      		</div>
	      		<div className='flex items-center md:pt-6 lg:pt-14'>
    					<img src='/smartphone/p55T/battery-full.png' className='w-[34px]' />
	      			<h4 className='text-[#FFFFFF] text-desktop/h5/medium font-markot pl-4 w-[100px]'>Charging Plug-in</h4>
	      		</div>
	      		<div className='flex items-center md:pt-7 lg:pt-16'>
    					<img src='/smartphone/p55T/notification-bing.png' className='w-[34px]' />
	      			<h4 className='text-[#FFFFFF] text-desktop/h5/medium font-markot pl-4 w-[100px]'>Notifications</h4>
	      		</div>
	      	</div>
      		<div className='col-span-1 relative h-full'>
      			<img src='/smartphone/p55T/GetNotificationsPhone.jpg' className='absolute bottom-0 left-[-40px] md:left-[170px] md:w-[50%] lg:w-[100%]' />
	      	</div>
      	</div>
    	</div>
    </div>
  )
}

export default GetNotifications;