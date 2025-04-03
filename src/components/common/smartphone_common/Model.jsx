import { Link } from "react-router-dom";
import Compare from './Compare'
import Rupee from "../../icons/Rupee";

/* eslint-disable react/prop-types */
const Model = ({ theme = 'light', models }) => {
	const isLightTheme = theme === 'light';

	return (
		<section className={`py-[60px] font-markot h-auto flex justify-center ${isLightTheme ? 'bg-white text-black' : 'bg-[#0A0C08] text-white'}`}>
			<div className="w-full lg:content flex flex-col gap-[36px] px-4">
				<div className="flex md:justify-between md:items-center flex-col md:flex-row">
					<h3 className={`${isLightTheme ? 'text-black' : 'text-white'} text-mobile/h5/medium md:text-desktop/h3`}>
						Compare Models
					</h3>
					<div className="flex gap-[8px] mt-4 md:mt-0">
						<h2 className={`${isLightTheme ? 'text-black' : 'text-white'} md:text-desktop/tertiary/cta`}>
							<Compare theme={theme} />
						</h2>
					</div>
				</div>

				<div className="flex justify-between gap-4">
					{
						models.map(({ id, image, title, price, path, features }) => (
							<div key={id} className={`flex flex-col lg:p-6 md:p-4 p-2 w-full max-w-[400px] lg:rounded-[24px] rounded-xl ${isLightTheme ? 'bg-bg/primary/1' : 'bg-white/5'} ${id == 3 && 'hidden md:block'}`}>
								<div className="lg:p-5 p-2 mx-auto flex items-center justify-center">
									<img src={image} alt={title} className="lg:max-h-[320px] max-h-[100px] md:max-h-[200px] object-contain" />
								</div>
								<div className="flex flex-col lg:gap-7 gap-4 md:gap-5">
									<div className="flex justify-between items-center flex-col lg:flex-row gap-1 lg:gap-0">
										<h3 className={`md:text-mobile/h4 text-mobile/h5/medium lg:text-desktop/h4 ${isLightTheme ? 'text-brand/black' : 'text-white'} `}>
											{title}
										</h3>
										<p className="price text-desktop/button text-itel-red flex items-center">
											<Rupee />
											{price}
										</p>
									</div>
									<div className="flex flex-col lg:gap-5 gap-2">
										{/* Specs */}
										{
											features.map(({ label, value }, index) => (
												<div key={index} className="flex w-full justify-between flex-col lg:flex-row items-center">
													<p className={`lg:text-desktop/subtitle text-[10px] leading-4  ${isLightTheme ? 'text-brand/black' : 'text-bg/primary/1'}`}>{label} </p>
													<p className={`lg:text-desktop/body/2/regular text-mobile/small/body ${isLightTheme ? 'text-brand/black' : 'text-grey/grey/2'}`}>{value}</p>
												</div>
											))
										}
									</div>
									<Link to={path}>
										<button className="py-3 md:px-6 bg-transparent flex items-center justify-center gap-2 rounded-full border border-[#4f4f4f] w-full">
											<span className={`lg:text-desktop/button text-mobile/button ${isLightTheme ? 'text-brand/black' : 'text-white'} uppercase`}>buy now</span>
											<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
												<path d="M18.4704 11.0415C18.0901 10.8935 17.8351 10.5284 17.8351 10.0775V9.9789C17.8351 9.38733 17.5912 9.14088 17.0067 9.14088H16.9094C16.3242 9.14088 15.8857 8.69718 15.8857 8.10561V8.00703C15.8857 7.41547 15.6417 7.16902 15.0565 7.16902H14.9592C14.3748 7.16902 13.9355 6.72532 13.9355 6.13385V6.03517C13.9355 5.4437 14.3748 5 14.9592 5H15.0565C15.6417 5 16.0803 5.4437 16.0803 6.03517V6.13385C16.0803 6.72532 16.3242 6.97186 16.9094 6.97186H17.0067C17.5912 6.97186 18.0304 7.41547 18.0304 8.00703V8.10561C18.0304 8.69718 18.2737 8.94363 18.8589 8.94363H18.9561C19.5413 8.94363 19.9799 9.38733 19.9799 9.9789V10.0775C19.9799 10.6198 20.2725 11.0141 20.8569 11.0141H20.9056C21.4171 11.0141 21.832 11.4334 21.832 11.9507V12.0493C21.832 12.5666 21.4171 12.9859 20.9056 12.9859H20.8569C20.2725 12.9859 19.9799 13.3802 19.9799 13.9225V14.0211C19.9799 14.6127 19.5413 15.0564 18.9561 15.0564H18.8589C18.2737 15.0564 18.0304 15.3028 18.0304 15.8944V15.993C18.0304 16.5845 17.5912 17.0281 17.0067 17.0281H16.9094C16.3242 17.0281 16.0803 17.2747 16.0803 17.8662V17.9648C16.0803 18.5563 15.6417 19 15.0565 19H14.9592C14.3748 19 13.9355 18.5563 13.9355 17.9648V17.8662C13.9355 17.2747 14.3748 16.831 14.9592 16.831H15.0565C15.6417 16.831 15.8857 16.5845 15.8857 15.993V15.8944C15.8857 15.3028 16.3242 14.8591 16.9094 14.8591H17.0067C17.5912 14.8591 17.8351 14.6127 17.8351 14.0211V13.9225C17.8351 13.4622 18.1005 13.0916 18.494 12.9497H2.77543C2.25435 12.9497 1.83203 12.5225 1.83203 11.9956C1.83203 11.4687 2.25435 11.0415 2.77543 11.0415H18.4704Z" fill="#FF0037" />
											</svg>
										</button>
									</Link>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</section>
	);
};

export default Model;
