import { InstagramEmbed } from 'react-social-media-embed';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const StayInTheLoop = ({ theme = 'light' }) => {
	const isDarkTheme = theme === 'dark';

	return (
		<div className={`${isDarkTheme ? 'bg-[#0A0C08]' : 'bg-white'}`}>
			<div className={`content flex font-markot flex-col justify-between px-[16px] md:px-0 pt-[60px] pb-[20px] `}>
				<div className="flex justify-between flex-col md:flex-row">
					<h3 className={`text-mobile/h4 md:text-desktop/h3 ${isDarkTheme ? 'text-white' : 'text-black'}`}>
						Stay in the loop: Follow us for updates!
					</h3>
					<a href="https://www.instagram.com/itel_india/" target='_blank' className={`flex items-center justify-center border-white border w-[200px] md:w-[350px] text-white font-semibold p-2 md:px-4 mt-3 md:mt-0 rounded-full mt shadow-md hover:shadow-lg transition duration-300`}>
						<span className={`uppercase text-mobile/button md:text-desktop/button ${isDarkTheme ? 'text-white' : 'text-black'}`}>Follow us on Instagram</span>
						<svg
							className="ml-2 w-4 h-4 text-red-500"
							fill="none"
							stroke="red"
							strokeWidth="2"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
						</svg>
					</a>
				</div>
				<Swiper
					breakpoints={{
						0: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 20
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 40,
						}
					}}
					slidesPerView={1}
					spaceBetween={100}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
						waitForTransition: 500
					}}
					loop
					modules={[Pagination, Autoplay]}
					// onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
					className="max-h-screen w-full mt-6 "
				>
					<SwiperSlide>
						<div className="flex items-center justify-center">
							<InstagramEmbed url="https://www.instagram.com/p/C99U-HPywNj" className='md:w-[300px] lg:w-[350px]' />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="flex items-center justify-center">
							<InstagramEmbed url="https://www.instagram.com/p/DBJH37TS_UY" className='md:w-[300px] lg:w-[350px]' />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="flex items-center justify-center">
							<InstagramEmbed url="https://www.instagram.com/p/DBvYXhkSYdH" className='md:w-[300px] lg:w-[350px]' />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="flex items-center justify-center">
							<InstagramEmbed url="https://www.instagram.com/p/DA0hWXhCP_K" className='md:w-[300px] lg:w-[350px]' />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="flex items-center justify-center">
							<InstagramEmbed url="https://www.instagram.com/p/C_5IZxsC1hR" className='md:w-[300px] lg:w-[350px]' />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="flex items-center justify-center">
							<InstagramEmbed url="https://www.instagram.com/p/C-46S1rhDbw" className='md:w-[300px] lg:w-[350px]' />
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default StayInTheLoop;
