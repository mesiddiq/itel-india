import React from 'react';
import Marquee from "react-fast-marquee";
import bold from "../../public/bold.png";
import style from "../../public/style.png";

const DareToDoIt = () => {
    return (
        <div className='w-full overflow-hidden relative items-center justify-center'>
        	<div className='DareToDoIt pt-[20px] md:pt-[200px] pb-[20px] md:pb-[200px]'>
	        	<Marquee speed='100' direction='right' autoFill={true}>
					<h3 className='flex items-center text-[#FFFFFF] text-[16px] md:text-[35px] font-[800] pb-2'>
						<img src={style} alt="style" /> BOLD 
						<img className='pl-4' src={bold} alt="bold" /> STYLE 
						<img className='pl-4' src={style} alt="style" /> POTENTIAL 
						<img className='pl-4' src={bold} alt="bold" /> ACTIVE 
						<img className='pl-4' src={style} alt="style" /> FUNKY 
						<img className='pl-4' src={bold} alt="bold" /> ENERGETIC 
						<img className='pl-4' src={style} alt="style" /> PLAYFUL
					</h3>
				</Marquee>

				<Marquee speed='100' autoFill={true}>
					<h1 className='text-[#FF0037] text-[102px] md:text-[226px] font-[900] border-y-2 border-dashed border-[#FF0037] py-2'>
						DARE TO DO IT!
					</h1>
				</Marquee>

				<Marquee speed='100' direction='right' autoFill={true}>
					<h3 className='flex items-center text-[#FFFFFF] text-[16px] md:text-[35px] font-[800] pt-2'>
						<img src={bold} alt="bold" /> BOLD 
						<img className='pl-4' src={style} alt="style" /> STYLE 
						<img className='pl-4' src={bold} alt="bold" /> POTENTIAL 
						<img className='pl-4' src={style} alt="style" /> ACTIVE 
						<img className='pl-4' src={bold} alt="bold" /> FUNKY 
						<img className='pl-4' src={style} alt="style" /> ENERGETIC 
						<img className='pl-4' src={bold} alt="bold" /> PLAYFUL
					</h3>
				</Marquee>
        	</div>
        </div>
    )
}

export default DareToDoIt