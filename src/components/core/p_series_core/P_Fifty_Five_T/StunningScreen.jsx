import React from 'react'

const StunningScreen = (props) => {
	const {scrollY} = props;

  return (
    <div className='flex relative w-full md:h-[700px] bg-[#173145]' style={{ marginTop: '0px' }}>
    	<div className='content'>
      	<div className='flex flex-col md:flex-row h-full'>
      		<div className='w-full md:w-[40%] px-[18px] md:px-0 py-[28px] md:py-[68px]'>
      			<div className='flex flex-col md:justify-between h-full'>
      				<h3 className='text-[#FFFFFF] text-mobile/h4 md:text-[54px] md:font-[500] md:leading-[65px] font-markot pb-4'>Stunning Screen, Ultimate Experience!</h3>
      				<div>
      					<h5 className='text-[#FFFFFF] text-[20px] md:text-[27px] font-[500] leading-[24px] md:leading-[35px] font-markot'>Dynamic Bar</h5>
      					<p className='text-[#FFFFFF] text-mobile/body/2 md:text-[16px] md:font-[400] md:leading-[25px] font-markot'>Obtain important information with ease.</p>
      					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      						<div className='col-span-1 pt-3 md:pt-5'>
      							<div className='flex md:flex-col items-end md:items-start'>
      								<h5 className='text-[#FFFFFF] text-[20px] md:text-[27px] font-[500] leading-[24px] md:leading-[35px] font-markot'>90Hz</h5>
      								<p className='text-[#FFFFFF] text-mobile/body/2 md:text-[16px] md:font-[400] md:leading-[25px] font-markot pl-2 md:pl-0'>Refresh Rate</p>
      							</div>
      						</div>
      						<div className='col-span-1 pt-3 md:pt-5'>
      							<div className='flex md:flex-col items-end md:items-start'>
      								<h5 className='text-[#FFFFFF] text-[20px] md:text-[27px] font-[500] leading-[24px] md:leading-[35px] font-markot'>6.6"HD+ IPS</h5>
      								<p className='text-[#FFFFFF] text-mobile/body/2 md:text-[16px] md:font-[400] md:leading-[25px] font-markot pl-2 md:pl-0'>Punch Hole Display</p>
      							</div>
      						</div>
      						<div className='col-span-1 pt-3 md:pt-5'>
      							<div className='flex md:flex-col items-end md:items-start'>
      								<h5 className='text-[#FFFFFF] text-[20px] md:text-[27px] font-[500] leading-[24px] md:leading-[35px] font-markot'>90%</h5>
      								<p className='text-[#FFFFFF] text-mobile/body/2 md:text-[16px] md:font-[400] md:leading-[25px] font-markot pl-2 md:pl-0'>Screen-To-Body Ratio</p>
      							</div>
      						</div>
      						<div className='col-span-1 pt-3 md:pt-5'>
      							<div className='flex md:flex-col items-end md:items-start'>
      								<h5 className='text-[#FFFFFF] text-[20px] md:text-[27px] font-[500] leading-[24px] md:leading-[35px] font-markot'>1612*720</h5>
      								<p className='text-[#FFFFFF] text-mobile/body/2 md:text-[16px] md:font-[400] md:leading-[25px] font-markot pl-2 md:pl-0'>Resolution</p>
      							</div>
      						</div>
      					</div>
      				</div>
      			</div>
      		</div>
      		<div className='w-full md:w-[60%]'>
      			<img src="/SmartPhone/p55T/StunningScreen.png" className='md:absolute md:right-0' />
      		</div>
      	</div>
    	</div>
    </div>
  )
}

export default StunningScreen;