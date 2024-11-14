import React from 'react';

const BlogCardsNew = () => {
	return (
		<div className='relative px-[16px] lg:px-0 py-[12px] lg:py-[120px] overflow-hidden'>
			<div className='content'>
				<div className='grid grid-cols-1 lg:grid-cols-[40%_60%] gap-4'>
					<div className='relative col-span-1 row-span-2 bg-[#000000] bg-[url("/smartphone/S23+/Backgrounds/MobileGrid1.webp")] lg:bg-[url("/smartphone/S23+/Backgrounds/WebGrid1.webp")] bg-cover bg-no-repeat bg-center rounded-[16px] p-[16px] lg:p-[40px] h-[470px] md:h-[780px]' data-aos="fade-right">
						<h3 className='bg-gradient-to-br from-[#CA86FF] to-[#85E2FD] inline-block text-transparent bg-clip-text text-mobile/h5/medium md:text-desktop/h3 font-markot mb-[20px]'>Dive into the Visuals</h3>
						<p className='text-[#F2F2F2] text-mobile/body/large md:text-desktop/h4 font-markot mb-[20px] lg:mb-[80px]'>6.78”FHD+ AMOLED 3D Curved Screen</p>
					</div>
					<div className='col-span-1 bg-[#000000] bg-[url("/smartphone/S23+/Backgrounds/MobileGrid2.webp")] lg:bg-[url("/smartphone/S23+/Backgrounds/WebGrid2.webp")] bg-cover bg-no-repeat bg-center rounded-[16px] p-[16px] lg:p-[40px] h-[260px] md:h-[380px]' data-aos="fade-left">
						<h3 className='bg-gradient-to-br from-[#CA86FF] to-[#85E2FD] inline-block text-transparent bg-clip-text w-[60%] lg:w-full text-mobile/h5/medium md:text-desktop/h3 font-markot mb-[20px]'>Shoot like a Boss</h3>
						<p className='text-[#F2F2F2] w-[60%] lg:w-full text-mobile/body/large md:text-desktop/h4 font-markot mb-[20px] lg:mb-[80px]'>50MP AI Dual Rear Cam<br />32 MP Front Camera</p>
					</div>
					<div className='col-span-1 bg-[#000000] bg-[url("/smartphone/S23+/Backgrounds/MobileGrid3.webp")] lg:bg-[url("/smartphone/S23+/Backgrounds/WebGrid3.webp")] bg-cover bg-no-repeat bg-center rounded-[16px] p-[16px] lg:p-[40px] h-[260px] md:h-[380px]' data-aos="fade-left">
						<h3 className='bg-gradient-to-br from-[#CA86FF] to-[#85E2FD] inline-block text-transparent bg-clip-text w-[60%] lg:w-full text-mobile/h5/medium md:text-desktop/h3 font-markot mb-[20px]'>The Ultimate Processor</h3>
						<p className='text-[#F2F2F2] w-[60%] lg:w-full text-mobile/body/large md:text-desktop/h4 font-markot mb-[20px] lg:mb-[80px]'>Unisoc Tiger T616 (12 nm)<br />High Performance Chipset</p>
					</div>
					<div className='col-span-1 bg-[#000000] bg-[url("/smartphone/S23+/Backgrounds/MobileGrid4.webp")] lg:bg-[url("/smartphone/S23+/Backgrounds/WebGrid4.webp")] bg-cover bg-no-repeat bg-center rounded-[16px] p-[16px] lg:p-[40px] h-[260px] md:h-[380px]' data-aos="fade-down">
						<h3 className='bg-gradient-to-br from-[#CA86FF] to-[#85E2FD] inline-block text-transparent bg-clip-text w-[60%] lg:w-full text-mobile/h5/medium md:text-desktop/h3 font-markot mb-[20px]'>Storage & Performance</h3>
						<p className='text-[#F2F2F2] w-[60%] lg:w-full text-mobile/body/large md:text-desktop/h4 font-markot mb-[20px] lg:mb-[80px]'>16GB* (8GB+8GB*) RAM +256GB ROM</p>
					</div>
					<div className='col-span-1 bg-[#000000] bg-[url("/smartphone/S23+/Backgrounds/MobileGrid5.webp")] lg:bg-[url("/smartphone/S23+/Backgrounds/WebGrid5.webp")] bg-cover bg-no-repeat bg-center rounded-[16px] p-[16px] lg:p-[40px] h-[260px] md:h-[380px]' data-aos="fade-down">
						<h3 className='bg-gradient-to-br from-[#CA86FF] to-[#85E2FD] inline-block text-transparent bg-clip-text w-[60%] lg:w-full text-mobile/h5/medium md:text-desktop/h3 font-markot mb-[20px]'>Charge up Quick Full Power in Just 2 hrs</h3>
						<p className='text-[#F2F2F2] w-[60%] lg:w-full text-mobile/body/large md:text-desktop/h4 font-markot mb-[20px] lg:mb-[80px]'>5000 mAh Battery with 18W<br />Type-C Charger</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BlogCardsNew