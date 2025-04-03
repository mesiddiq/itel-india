/* eslint-disable react/prop-types */
import Marquee from "react-fast-marquee";

const ZenoSlider = () => {
    return (
        <div className='overflow-x-hidden py-[10px] bg-black'>
            <Marquee speed='50' direction='right' autoFill={true}>
                <h3 className="font-bricolage uppercase text-[16px] lg:text-[20px] lg:leading-6 font-extrabold -tracking-[0.16px] text-white">zenith of design</h3>
                <img src="/smartphone/zeno10/hero/symbol.webp" alt="Zeno symbol" className="max-w-9 mx-4" />
                <h3 className="font-bricolage text-white uppercase text-[16px] lg:text-[20px] lg:leading-6 font-extrabold -tracking-[0.16px]">elevated experience</h3>
                <img src="/smartphone/zeno10/hero/symbol.webp" alt="Zeno symbol" className="max-w-9 mx-4" />
                <h3 className="font-bricolage text-white uppercase text-[16px] lg:text-[20px] lg:leading-6 font-extrabold -tracking-[0.16px]">Nuanced controls</h3>
                <img src="/smartphone/zeno10/hero/symbol.webp" alt="Zeno symbol" className="max-w-9 mx-4" />
                <h3 className="font-bricolage text-white uppercase text-[16px] lg:text-[20px] lg:leading-6 font-extrabold -tracking-[0.16px]">Optimized output</h3>
                <img src="/smartphone/zeno10/hero/symbol.webp" alt="Zeno symbol" className="max-w-9 mx-4" />
            </Marquee>
        </div >
    );
};

export default ZenoSlider;
