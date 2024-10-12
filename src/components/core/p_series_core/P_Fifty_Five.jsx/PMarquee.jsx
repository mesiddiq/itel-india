import React from 'react'
import Marquee from "react-fast-marquee";

const PMarquee = () => {
  return (
    <Marquee speed='100' autoFill={true}>
					<div className='bg-[#000032] h-[44px] p-[10px] w-full'>
						<ul className='flex gap-[10px]'>
							<li className='text-[#4682E6] text-[20px] text-justify font-extrabold font-bricolage'>POWER SEARCH</li>
							<li className='text-[#4682E6] text-[20px] text-justify font-extrabold font-bricolage'>INTENSIVELY POWERFUL</li>
						</ul>
					</div>
				</Marquee>

  )
}

export default PMarquee