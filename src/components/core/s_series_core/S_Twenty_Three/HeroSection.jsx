import React from "react";
import HeroSection1 from "../S_Twenty_Four/HeroSection1";

function HeroSection() {
	return (
		<>
			<section
				className="relative flex flex-col items-center justify-between md:pt-32 w-full h-auto md:h-[800px]"
				style={{
					backgroundImage: "url('/smartphone/S_Twenty_Three/S23Hero.webp')",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="flex content flex-col md:flex-row z-10 px-4 md:px-0 md:pt-10 w-full max-w-screen-xl gap-y-4 justify-between items-center mx-auto h-auto md:h-[405px] mt-4  md:mt-16">
					{/* Text Section */}
					<div className="flex flex-col justify-center h-auto md:h-[405px] w-full md:w-[785.14px] text-left">
						{/* Super Series Badge */}
						<div className="flex items-center gap-3 border-2 border-purple-200 rounded-full w-[127px] h-[26px] px-2">
							<div className="text-[12px] font-semibold tracking-wider uppercase text-purple-200 ">
								Super Series
							</div>
							<img
								src="/smartphone/S_Twenty_Three/Vector.webp"
								alt="Super Series Logo"
								className="w-3"
							/>
						</div>

						{/* S23 Text */}
						<h1 className="text-purple-200 text-mobile/h1 md:text-desktop/large/h font-markot mt-4">
							S23
						</h1>

						{/* Description */}
						<p className="mt-4 md:mt-8  uppercase text-gray-300 w-full md:max-w-[543px] text-mobile/title md:text-desktop/title font-markot">
							50MP Super Clear Rear Camera | 16GB* (8GB+8GB*) RAM + 128GB ROM |
							Photochromic Effects
						</p>

						{/* Available at Price */}
						<div className="mt-8 md:mt-24">
							<span className="text-mobile/small/body md:text-2xl text-white">Available at</span>
							<span className="text-desktop/h5 font-bold text-white">
								{" "}
								₹8,199/-
							</span>
						</div>

						{/* Buy Now Button (Visible only on medium and larger screens) */}
						<div className="hidden md:flex items-center mt-4">
							<button
								className="flex items-center py-2 text-black font-semibold h-[45px] w-[202px] gap-2 uppercase tracking-wide"
								onClick={() =>
								(window.location.href =
									"https://www.amazon.in/dp/B0C6B25FQ3?ie=UTF8&ref_=itel_Website_ProductPage")
								}
							>
								<img
									src="/smartphone/S_Twenty_Three/Buttons.webp"
									alt="Buy Now"
								/>
							</button>
						</div>
					</div>

					{/* Image Section */}
					<div className="flex justify-start md:justify-end items-center mt-8 md:mt-0">
						<img
							src="/smartphone/S_Twenty_Three/HeroImg.webp"
							alt="itel S23 smartphone"
							className="w-[250px] h-auto md:w-[685px] md:h-[747.49px] object-contain md:absolute md:top-[52px] left-[10%] md:left-[650px]"
						/>
					</div>
				</div>

				{/* Memory Fusion Technology text */}
				<p className="absolute -left-[14%] top-[82%]  -rotate-[90deg] md:rotate-0 md:top-[780px] md:left-[1265px] text-[12px] md:text-[12px] font-[400] text-gray-300 font-markot">
					*Memory Fusion Technology
				</p>
			</section>
		</>
	);
}

export default HeroSection;
