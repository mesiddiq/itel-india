import React, { useState, useEffect } from 'react';

const BlogCardsNew = () => {

	return (
		<div className='relative px-[16px] md:px-0 py-[12px] md:py-[120px]'>
			<div className='content'>
				<div className='grid grid-cols-1 md:grid-cols-[40%_60%] gap-4'>
					<div className='relative col-span-1 row-span-2 bg-[#000000] bg-[url("/s_twenty_three_plus/BlogCardsOne.png")] bg-cover bg-no-repeat bg-center rounded-[16px] p-[16px] md:p-[40px] h-[470px] md:h-[780px]' data-aos="fade-right">
						<h3 className={`linear-gradient text-mobile/h5/medium md:text-desktop/h3 font-markot mb-[20px]`}>Dive into the Visuals</h3>
						<p className='text-[#F2F2F2] text-mobile/body/large md:text-desktop/h4 font-markot mb-[20px] md:mb-[80px]'>6.78”FHD+ AMOLED 3D Curved Screen</p>
					</div>
					<div className='col-span-1 bg-[#000000] bg-[url("/s_twenty_three_plus/BlogCardsTwo.png")] bg-cover bg-no-repeat bg-center rounded-[16px] p-[16px] md:p-[40px] h-[200px] md:h-auto' data-aos="fade-left">
						<h3 className={`linear-gradient w-[60%] md:w-full text-mobile/h5/medium md:text-desktop/h3 font-markot mb-[20px]`}>Shoot like a Boss</h3>
						<p className='text-[#F2F2F2] w-[60%] md:w-full text-mobile/body/large md:text-desktop/h4 font-markot mb-[20px] md:mb-[80px]'>50MP AI Dual Rear Cam<br />32 MP Front Camera</p>
					</div>
					<div className='col-span-1 bg-[#000000] bg-[url("/s_twenty_three_plus/BlogCardsThree.png")] bg-cover bg-no-repeat bg-center rounded-[16px] p-[16px] md:p-[40px] h-[200px] md:h-auto' data-aos="fade-left">
						<h3 className={`linear-gradient w-[60%] md:w-full text-mobile/h5/medium md:text-desktop/h3 font-markot mb-[20px]`}>The Ultimate Processor</h3>
						<p className='text-[#F2F2F2] w-[60%] md:w-full text-mobile/body/large md:text-desktop/h4 font-markot mb-[20px] md:mb-[80px]'>Unisoc Tiger T616 (12 nm)<br />High Performance Chipset</p>
					</div>
					<div className='col-span-1 bg-[#000000] bg-[url("/s_twenty_three_plus/BlogCardsFour.png")] bg-cover bg-no-repeat bg-center rounded-[16px] p-[16px] md:p-[40px] h-[200px] md:h-auto' data-aos="fade-down">
						<h3 className={`linear-gradient w-[60%] md:w-full text-mobile/h5/medium md:text-desktop/h3 font-markot mb-[20px]`}>Storage & Performance</h3>
						<p className='text-[#F2F2F2] w-[60%] md:w-full text-mobile/body/large md:text-desktop/h4 font-markot mb-[20px] md:mb-[80px]'>16GB* (8GB+8GB*) RAM +256GB ROM</p>
					</div>
					<div className='col-span-1 bg-[#000000] bg-[url("/s_twenty_three_plus/BlogCardsFive.jpg")] bg-cover bg-no-repeat bg-center rounded-[16px] p-[16px] md:p-[40px] h-[200px] md:h-auto' data-aos="fade-down">
						<h3 className={`linear-gradient w-[60%] md:w-full text-mobile/h5/medium md:text-desktop/h3 font-markot mb-[20px]`}>Charge up Quick Full Power in Just 2 hrs</h3>
						<p className='text-[#F2F2F2] w-[60%] md:w-full text-mobile/body/large md:text-desktop/h4 font-markot mb-[20px] md:mb-[80px]'>5000 mAh Battery with 18W<br />Type-C Charger</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BlogCardsNew