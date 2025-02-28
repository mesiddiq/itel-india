
import React from 'react'
import { Link } from 'react-router-dom'

const ArrowRight = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
			<path d="M18.1384 11.6438C17.7581 11.4958 17.5031 11.1307 17.5031 10.6798V10.5812C17.5031 9.98962 17.2591 9.74318 16.6747 9.74318H16.5774C15.9922 9.74318 15.5537 9.29948 15.5537 8.70791V8.60933C15.5537 8.01776 15.3097 7.77131 14.7245 7.77131H14.6272C14.0427 7.77131 13.6035 7.32762 13.6035 6.73614V6.63747C13.6035 6.04599 14.0427 5.60229 14.6272 5.60229H14.7245C15.3097 5.60229 15.7482 6.04599 15.7482 6.63747V6.73614C15.7482 7.32762 15.9922 7.57416 16.5774 7.57416H16.6747C17.2591 7.57416 17.6984 8.01776 17.6984 8.60933V8.70791C17.6984 9.29948 17.9416 9.54592 18.5268 9.54592H18.6241C19.2093 9.54592 19.6478 9.98962 19.6478 10.5812V10.6798C19.6478 11.222 19.9404 11.6164 20.5249 11.6164H20.5736C21.0851 11.6164 21.5 12.0357 21.5 12.553V12.6516C21.5 13.1688 21.0851 13.5882 20.5736 13.5882H20.5249C19.9404 13.5882 19.6478 13.9825 19.6478 14.5248V14.6234C19.6478 15.215 19.2093 15.6587 18.6241 15.6587H18.5268C17.9416 15.6587 17.6984 15.9051 17.6984 16.4967V16.5953C17.6984 17.1868 17.2591 17.6304 16.6747 17.6304H16.5774C15.9922 17.6304 15.7482 17.877 15.7482 18.4684V18.5671C15.7482 19.1586 15.3097 19.6023 14.7245 19.6023H14.6272C14.0427 19.6023 13.6035 19.1586 13.6035 18.5671V18.4684C13.6035 17.877 14.0427 17.4333 14.6272 17.4333H14.7245C15.3097 17.4333 15.5537 17.1868 15.5537 16.5953V16.4967C15.5537 15.9051 15.9922 15.4614 16.5774 15.4614H16.6747C17.2591 15.4614 17.5031 15.215 17.5031 14.6234V14.5248C17.5031 14.0645 17.7684 13.6939 18.162 13.552H2.4434C1.92232 13.552 1.5 13.1248 1.5 12.5979C1.5 12.071 1.92232 11.6438 2.4434 11.6438H18.1384Z" fill="#FF0037" />
		</svg>
	)
}

const EnjoyBetterLife = () => {
	return (
		<section className='px-4 md:px-0 xl:h-[790px] lg:h-[680px] md:h-[1000px] h-[930px] flex items-center justify-center relative' >

			<img src="/static_page/homepage/EnjoyBetterLifeHeader.png" alt="Header" className="w-full absolute right-0 top-0" />
			<img src="/static_page/homepage/EnjoyBetterLifeFooter.png" alt="Header" className="w-full absolute right-0 bottom-0" />

			<div className="xl:h-[543px] lg:h-[500px] flex content gap-5 lg:flex-row flex-col">

				{/* Grid 1 */}

				<Link to={'/smartphones'} className="h-[328px] group lg:h-full w-full lg:w-5/12 shrink rounded-2xl overflow-hidden bg-[#232322] relative">
					<div className="flex flex-col gap-2 lg:gap-3 max-w-[455px] p-4 md:p-5 lg:p-8">
						<h3 className="text-mobile/h6 lg:text-desktop/h5 xl:text-desktop/h4">
							Amp Your Style with itel Latest Smartphones
						</h3>
						<ArrowRight />
					</div>
					<img src="/static_page/homepage/EnjoyBetterLifeCol1.png" alt="Sleek modern design" className='max-w-[212px] z-20 group-hover:scale-125 transition-all duration-700 md:max-w-[280px] lg:max-w-[418px] absolute bottom-0 left-1/2 -translate-x-1/2 ' />
					<img src="/static_page/homepage/EnjoyBetterLifeCol1Bg.png" className='absolute bottom-0 left-1/2 z-10 -translate-x-1/2 object-cover w-full group-hover:scale-125 transition-all duration-700' />
				</Link>

				<div className="lg:h-[calc(100%-20px)] flex gap-5 lg:w-7/12 flex-wrap shrink-0">

					{/* Grid 2 */}

					<Link to={'/featurephones'} className="lg:h-1/2 overflow-hidden relative h-[250px] w-[calc(50%-10px)] lg:w-full  rounded-2xl bg-[#232322] group">
						<div className="flex flex-col gap-2 lg:gap-3 lg:max-w-[300px] xl:max-w-[392px] p-4 md:p-5 lg:p-8">
							<h3 className="text-mobile/h6 lg:text-desktop/h5 xl:text-desktop/h4">
								Stay Effortlessly Connected All Day, Every Day
							</h3>
							<ArrowRight />
						</div>
						<img src="/static_page/homepage/EnjoyBetterLifeCol2.png" alt="Effortless connectivity daily" className='z-20 absolute bottom-0 right-0 group-hover:scale-125 transition-all duration-700 max-w-[117px] md:max-w-[212px] lg:max-w-[280px] xl:max-w-[418px]' />
						<img src="/static_page/homepage/EnjoyBetterLifeCol2Bg.png" className='absolute bottom-0 right-0 md:-right-16 z-10 object-cover w-full group-hover:scale-125 transition-all duration-700 object-center' />
					</Link>

					{/* Grid 3 */}

					<Link to={'/coming-soon'} className="lg:h-1/2 h-[250px] relative overflow-hidden group xl:w-[calc(60%-10px)] lg:w-[calc(50%-10px)] w-[calc(50%-10px)]  rounded-2xl bg-[#232322]">
						<div className="flex flex-col gap-2 lg:gap-3 max-w-[274px] p-4 md:p-5 lg:p-8">
							<h3 className="text-mobile/h6 lg:text-desktop/h5 xl:text-desktop/h4">
								Dive into Endless Entertainment: itel Smart TV
							</h3>
							<ArrowRight />
						</div>
						<img src="/static_page/homepage/EnjoyBetterLifeCol3.png" alt="Endless entertainment experience" className='md:max-w-[212px] z-20 absolute bottom-0 right-10 group-hover:scale-125 transition-all duration-700 max-w-[100px] lg:max-w-[140px] xl:max-w-[418px]' />
						<img src="/static_page/homepage/EnjoyBetterLifeCol3Bg.png" className='absolute bottom-0 right-0 z-10 object-cover w-full lg:scale-125 transition-all duration-700 group-hover:-translate-y-10' />
					</Link>

					{/* Grid 4 */}

					<Link to={'/coming-soon'} className="lg:h-1/2 group relative overflow-hidden h-[205px] xl:w-[calc(40%-10px)] lg:w-[calc(50%-10px)] w-full  rounded-2xl bg-[#232322]">
						<div className="flex flex-col gap-2 lg:gap-3 max-w-[] p-4 md:p-5 lg:p-8">
							<h3 className="text-mobile/h6 lg:text-desktop/h5 xl:text-desktop/h4">
								Level up Your Game: itel Smart Gadgets!
							</h3>
							<ArrowRight />
						</div>
						<img src="/static_page/homepage/EnjoyBetterLifeCol4.png" alt="ITEL Smart Gadgets" className='max-w-[212px] z-20 absolute bottom-0 right-0 group-hover:scale-125 transition-all duration-700 md:max-w-[280px] lg:max-w-[418px]' />
						<img src="/static_page/homepage/EnjoyBetterLifeCol3Bg.png" alt='bg-pattern' className=' bottom-0 left-0 absolute z-10 object-cover w-full scale-125  transition-all duration-700 group-hover:-translate-y-4 ' />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default EnjoyBetterLife