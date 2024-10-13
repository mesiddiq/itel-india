import Marquee from "react-fast-marquee";
import sliderAnimationStar from '/smartphone/S24/sliderAnimationStar.svg'

import '../../../../pages/s_series/style.css';

const SliderAnimation = () => {
  return (
    <div className='w-full h-[52px] overflow-hidden relative items-center justify-center flex flex-col bg-[#120F0D]'>
        <Marquee speed='50' direction='right' autoFill={true}>
            <div className=' flex items-center md:text-[35px] py-2'>
                <img src={sliderAnimationStar} alt="MarqueeIcon" className='px-3' /> 
                <h1 className='bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent uppercase text-bricolage text-[20px] font-extrabold leading-[24px] tracking-[0.08em] text-justify'>
                    Super Series
                </h1> 
                <img src={sliderAnimationStar} alt="MarqueeIcon" className='px-3' />
                <h1 className='bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent uppercase text-bricolage text-[20px] font-extrabold leading-[24px] tracking-[0.08em] text-justify'>
                    Incredibly Super
                </h1> 
            </div>
        </Marquee>
    </div>
  );
};

export default SliderAnimation;
