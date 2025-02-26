/* eslint-disable react/prop-types */
import { useState } from 'react';
import Rupee from '../../../../icons/Rupee';

const AnimatedBuyButton = ({ price }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={`cursor-pointer md:rounded-3xl md:h-[38px] md:border-[0.5px] w-full relative overflow-hidden md:border-solid flex flex-row justify-center items-center gap-[6px] md:gap-3 md:py-2 px-6 transition-colors duration-300 ${isHovered ? 'text-black' : 'text-white'} md:bg-[#2C2C2C]`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* White background overlay that slides up */}
			<div
				className={`
          absolute 
          inset-0 
          bg-white 
          transition-transform 
          duration-600 
          ease-in
          ${isHovered ? 'translate-y-0' : 'translate-y-full'}
        `}
			/>

			{/* Content */}
			<div className="relative z-10 flex items-center gap-[4px] md:gap-3">
				<span className="text-xs flex items-center font-bold md:text-base leading-[18px] md:leading-[19.2px] tracking-[-0.02em] md:tracking-[-0.01em]">
					{!isHovered &&
						<Rupee />
					}
					{isHovered ? 'BUY NOW' : `${price}`}
				</span>
				<img src='/product-listing/arrow-right.svg' />
			</div>
		</div>
	);
};

export default AnimatedBuyButton;
