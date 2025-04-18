/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";

import { AnimatePresence, motion } from "framer-motion";

// Import Swiper styles
import { useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Rupee from "../../../icons/Rupee";

// import './styles.css';

// eslint-disable-next-line react/prop-types
const Banner1 = ({ activeSlide }) => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={activeSlide}
				className="relative h-[520px] md:h-[550px] lg:h-[627px]  flex justify-center  lg:pt-[114px]"
			>
				<video
					autoPlay
					muted
					loop
					src="/videos/homepage/herobanner1.mp4"
					className="w-full object-cover absolute h-full top-0 md:block hidden object-right"
				/>
				<video
					autoPlay
					muted
					loop
					src="/videos/homepage/herobanner1_mobile.mp4"
					className="w-full object-cover h-full scale-110 absolute top-0 md:hidden"
				/>
				<div className="content space-y-4 z-10 px-4 md:px-0 pt-6 lg:pt-0">
					<div className="space-y-4 lg:space-y-0">
						<motion.h1
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.2 }}
							className="text-mobile/h2 lg:text-desktop/h1 text-white font-bold"
						>
							Bringing India <br /> Together with itel
						</motion.h1>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.2 }}
							className="space-y-2 lg:space-y-2 lg:pt-4"
						>
							<h5 className="lg:text-desktop/h4 text-mobile/small/button text-white/80">
								Snag your itel smartphone starting at just
							</h5>
							<h2 className="text-neutral-100 text-mobile/h4 lg:text-[28px] font-bold flex items-center">
								<Rupee /> 5,599 /-
							</h2>
						</motion.div>
						<Link to={"/smartphones"}>
							<motion.button
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 1, delay: 0.2 }}
							>
								<img
									src="/static_page/Buttons.svg"
									alt="Buy Now"
									className="lg:pt-[72px] max-w-[90px] lg:max-w-max md:max-w-28 mt-2"
								/>
							</motion.button>
						</Link>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

const ZenoComingSoon = ({ activeSlide }) => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={activeSlide}
				className=" h-[520px] md:h-[550px] lg:h-[627px] flex lg:justify-center lg:pt-[114px]"
			>
				<video
					autoPlay
					muted
					loop
					src="/smartphone/zeno10/video.mp4"
					className="w-full object-cover object-center absolute left-0 top-0 h-full lg:object-right"
				/>
				<div className="content space-y-4 z-10 px-4 md:px-0 pt-6 lg:pt-0">
					<div className="space-y-4 lg:space-y-3">
						<motion.h3
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ duration: 1, delay: 0.2 }}
							className="text-[14px] w-fit flex gap-1 items-center leading-[16.8px] uppercase font-bold border-2 border-[#F4A23B] rounded-[24px] px-[6px] py-[2px] text-[#C0CDEE] font-bricolage"
						>
							featured
						</motion.h3>
						<motion.div
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.2 }}
							className="flex items-center lg:gap-6 gap-3"
						>
							<img
								src="/smartphone/zeno10/hero/zeno10.png"
								alt="Zeno 10 logo"
								className="lg:max-w-[300px] max-w-[150px]"
							/>
							{/* <h3 className="lg:text-desktop/h2 text-mobile/h4">Awesome <br />
                                All-in-One</h3> */}
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.2 }}
							className="space-y-2 lg:space-y-2 lg:pt-4"
						>
							<h5 className="lg:text-desktop/h4 text-mobile/small/button text-white/80 max-w-[600px]">
								6.6" Display with Dynamic Bar | 64GB Big Memory
								| 5000 mAh with Type C Charger
							</h5>
							<h2 className="text-neutral-100 text-mobile/h4 lg:text-[28px] font-bold flex items-center">
								<Rupee /> 5,499 /-
							</h2>
						</motion.div>
						<Link to={"/product/zeno-10"}>
							<motion.button
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 1, delay: 0.2 }}
							>
								<img
									src="/static_page/Buttons.svg"
									alt="Buy Now"
									className="lg:pt-[72px] max-w-[90px] lg:max-w-max md:max-w-28 mt-2"
								/>
							</motion.button>
						</Link>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};
const UnicornMax = ({ activeSlide }) => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={activeSlide}
				className=" h-[520px] md:h-[550px] lg:h-[627px] flex lg:justify-center lg:pt-[114px]"
			>
				<video
					autoPlay
					loop
					muted
					src="/videos/homepage/unicorn_max.webm"
					className="w-full object-cover object-center absolute left-0 top-0 h-full lg:object-right hidden lg:block"
				/>
				<video
					autoPlay
					loop
					muted
					src="/videos/homepage/unicorn_max_mob.webm"
					className="w-full object-cover object-center absolute left-0 top-0 h-full lg:object-right lg:hidden"
				/>
				<div className="content space-y-4 z-10 px-4 md:px-0 pt-6 lg:pt-0">
					<div className="space-y-4 lg:space-y-3">
						<motion.h3
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ duration: 1, delay: 0.2 }}
							className="text-[14px] w-fit flex gap-1 items-center leading-[16.8px] uppercase font-bold border-2 border-[#F7931E] rounded-[24px] px-[6px] py-[2px] text-[#F7931E] font-bricolage"
						>
							featured
						</motion.h3>
						<motion.div
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.2 }}
							className="flex items-center lg:gap-6 gap-3"
						>
							<img
								src="/static_page/homepage/unicornmax_logo.webp"
								alt="Zeno 10 logo"
								className="lg:max-w-[300px] max-w-[150px]"
							/>
							{/* <h3 className="lg:text-desktop/h2 text-mobile/h4">Awesome <br />
                                All-in-One</h3> */}
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.2 }}
							className="space-y-2 lg:space-y-2 lg:pt-4"
						>
							<h5 className="lg:text-desktop/h4 text-mobile/small/button text-grey/grey/1 max-w-[600px]">
								1.43" AMOLED Display | 1000-nits brightness |{" "}
								<br /> Dual-core Processor
							</h5>
						</motion.div>
						<div className="flex items-center gap-4 lg:pt-8">
							<Link
								to={
									"https://www.amazon.in/dp/ref=itel_asinwebtraffic/B0DKF67QV6"
								}
								target="_blank"
							>
								<motion.button
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 1, delay: 0.2 }}
								>
									<img
										src="/static_page/Buttons.svg"
										alt="Buy Now"
										className="max-w-[136px] lg:max-w-max md:max-w-28 "
									/>
								</motion.button>
							</Link>
							<div className="flex items-center gap-2">
								<span className="">Available at</span>
								<span className="text-neutral-100 text-[14px] lg:text-[28px] font-bold flex items-center">
									<Rupee /> 1,999 /-
								</span>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

const A95 = ({ activeSlide }) => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={activeSlide}
				className=" h-[520px] md:h-[550px] lg:h-[627px] flex lg:justify-center lg:pt-[114px]"
			>
				<video
					autoPlay
					muted
					loop
					src="/videos/homepage/a95.mp4"
					className="w-full object-cover object-center absolute left-0 top-0 h-full lg:object-right hidden lg:block"
				/>
				<video
					autoPlay
					muted
					loop
					src="/videos/homepage/a95_mobile.mp4"
					className="w-full object-cover object-center absolute left-0 top-0 h-full lg:object-right lg:hidden "
				/>
				<div className="content space-y-4 z-10 px-4 md:px-0 pt-6 lg:pt-0">
					<div className="space-y-4 lg:space-y-3">
						<motion.h3
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ duration: 1, delay: 0.2 }}
							className="text-[14px] w-fit flex gap-1 items-center leading-[16.8px] uppercase font-bold border-2 border-[#B69C7F] rounded-[24px] px-[6px] py-[2px] text-transparent bg-clip-text bg-gradient-to-r from-[#B69C7F] to-[#e3ddd3] font-bricolage"
						>
							featured
						</motion.h3>
						<motion.div
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.2 }}
							className="flex items-center pt-4"
						>
							<img
								src="/static_page/homepage/a95.svg"
								alt="A95"
								className="lg:max-w-[500px] max-w-[218px]"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.2 }}
							className="space-y-2 lg:space-y-2 lg:pt-4"
						>
							<h5 className="lg:text-[48px] text-mobile/h5  text-white uppercase">
								built to last
							</h5>
						</motion.div>
						{/* <Link> */}
						<motion.button
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.2 }}
						>
							<img
								src="/static_page/comingsoon.svg"
								alt="Buy Now"
								className=" max-w-[90px] lg:max-w-max md:max-w-28 mt-2 lg:mt-6"
							/>
						</motion.button>
						{/* </Link> */}
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};
const KingSignal = ({ activeSlide }) => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={activeSlide}
				className=" h-[520px] md:h-[550px] lg:h-[627px] flex lg:justify-center"
			>
				<video
					autoPlay
					muted
					loop
					src="/videos/homepage/king_signal.mp4"
					className="w-full object-cover object-center absolute left-0 top-0 h-full lg:object-right hidden lg:block"
				/>
				<video
					autoPlay
					muted
					loop
					src="/videos/homepage/king_signal_mob.mp4"
					className="w-full object-cover object-center absolute left-0 top-0 h-full lg:object-right lg:hidden "
				/>
				<div className="content z-10 px-4 md:px-0 py-6 lg:py-0 flex flex-col lg:flex-row lg:items-center justify-between">
					<div className="space-y-4 lg:space-y-3">
						<motion.h3
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ duration: 1, delay: 0.2 }}
							className="text-[14px] w-fit flex gap-1 items-center leading-[16.8px] uppercase font-bold border-2 border-[#15D582] rounded-[24px] px-[6px] py-[2px] text-[#C0CDEE] font-bricolage"
						>
							featured
						</motion.h3>
						<motion.div
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.2 }}
							className="flex items-center"
						>
							{/* <img src="/smartphone/zeno10/hero/zeno10.png" alt="Zeno 10 logo" className='lg:max-w-[300px] max-w-[150px]' /> */}
							<h3 className="lg:text-[80px] lg:leading-[88px] lg:tracking-[-3.2px]  text-[36px] font-bold tracking-[-1.44px] uppercase">
								king{" "}
								<span className="text-[#05FE04]">signal</span>
							</h3>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.2 }}
							className="space-y-2 lg:space-y-2 lg:pt-4"
						>
							<h5 className="lg:text-desktop/h4 text-mobile/small/button text-white/80 max-w-[600px]">
								Super strong signal | 1500mAh | <br /> Auto call
								recording
							</h5>
							{/* <h2 className='text-neutral-100 text-mobile/h4 lg:text-[28px] font-bold flex items-center'><Rupee /> 5,499 /-</h2> */}
						</motion.div>
						<div className="flex items-center gap-4 lg:pt-8">
							<Link
								to={
									"/product/king-signal"
								}
							>
								<motion.button
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 1, delay: 0.2 }}
								>
									<img
										src="/static_page/Buttons.svg"
										alt="Buy Now"
										className="max-w-[136px] lg:max-w-max md:max-w-28 "
									/>
								</motion.button>
							</Link>
							<div className="flex items-center gap-2">
								<span className="">Available at</span>
								<span className="text-neutral-100 text-[14px] lg:text-[28px] font-bold flex items-center">
									<Rupee /> 1,099 /-
								</span>
							</div>
						</div>
					</div>
					<img src="/featurephone/king_signal/product/hero_phone.webp" alt="King Signal" className="lg:max-w-[400px] max-w-[200px] self-end lg:self-center" />
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

const HeroSection = () => {
	const [activeSlide, setActiveSlide] = useState(0);

	return (
		<Swiper
			spaceBetween={100}
			effect={"fade"}
			navigation={true}
			pagination={{
				clickable: true,
			}}
			autoplay={{
				delay: 5000,
				disableOnInteraction: true,
				waitForTransition: 500,
			}}
			loop
			modules={[Pagination, Autoplay]}
			onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
			className="max-h-screen w-full "
		>
			{/* *************** Slide 1************************* */}
			<SwiperSlide>
				<Banner1 activeSlide={activeSlide} />
			</SwiperSlide>

			{/* *************** Slide 2************************* */}

			<SwiperSlide>
				<ZenoComingSoon activeSlide={activeSlide} />
			</SwiperSlide>

			{/* *************** Slide 3************************* */}

			<SwiperSlide>
				<KingSignal activeSlide={activeSlide} />
			</SwiperSlide>

			{/* *************** Slide 4************************* */}

			<SwiperSlide>
				<UnicornMax activeSlide={activeSlide} />
			</SwiperSlide>

			{/* *************** Slide 5************************* */}

			{/* <SwiperSlide>
				<Banner4 activeSlide={activeSlide} />
			</SwiperSlide> */}
			<SwiperSlide>
				<A95 activeSlide={activeSlide} />
			</SwiperSlide>
		</Swiper>
	);
};

export default HeroSection;
