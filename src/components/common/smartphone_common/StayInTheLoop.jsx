import { InstagramEmbed } from 'react-social-media-embed';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../../common/Button';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const StayInTheLoop = ({ theme = 'light' }) => {
	const isDarkTheme = theme === 'dark';

	return (
		<div className={`${isDarkTheme ? 'bg-[#0A0C08]' : 'bg-white'}`}>
			<div className={`content flex flex-col justify-between px-[16px] md:px-0 pt-[60px] pb-[20px] `}>
				<div className="flex justify-between flex-col md:flex-row">
					<h3 className={`text-mobile/h4 md:text-desktop/h3 font-markot ${isDarkTheme ? 'text-[#FFFFFF]' : 'text-black'}`}>
						Stay in the loop: Follow us for updates!
					</h3>
					<Button btnLabel='Follow us on Instagram' rounded='mt-[12px] md:mt-0 rounded-full' />
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
							<InstagramEmbed url="https://www.instagram.com/p/DCRoW5mS0Oo" className='md:w-[300px] lg:w-[350px]' />
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
