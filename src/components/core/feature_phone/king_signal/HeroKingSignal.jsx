import React, { useRef } from 'react';
import { useSize } from 'react-haiku';
import BuyNowSquareBG from '../../../common/smartphone_common/BuyNowSquareBG';
// import BuyNowSquareBG from '../../smartphone_common/BuyNowSquareBG';




const HeroKingSignal = () => {


    return (
        <div className='font-markot overflow-hidden lg:min-h-[680px] md:min-h-[650px] min-h-[620px] items-center flex bg-[url(/featurephone/king_signal/product/hero_banner.webp)] bg-center bg-cover bg-no-repeat]'>
            <div className="content flex flex-col lg:flex-row gap-4 lg:gap-0 lg:justify-between items-center px-4 md:px-0 relative">
                <div className="space-y-4 lg:space-y-9 w-full">
                    <div className="space-y-2 lg:space-y-3">
                        <h1 className={`text-mobile/h1 lg:text-desktop/h1`} data-aos="fade-right">
                            King <span className="text-king-signal"> Signal</span>
                        </h1>
                        <p className={`text-mobile/title lg:text-[20px] lg:leading-6 lg:tracking-[0.2px] font-normal uppercase text-grey/grey/1 max-w-[564px]`} data-aos="fade-right" data-aos-delay="400">Super strong signal | 1500mAh | Auto call recording</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600" className='w-fit'>
                        <BuyNowSquareBG purchaseLink={'https://amzn.in/d/5QhNgaP'} content={'Buy Now'} />
                    </div>
                    <div className="flex gap-4 max-w-[730px] flex-wrap">
                        <div className="px-2 py-1 lg:py-2 lg:px-5 rounded-md bg-white/10 flex gap-3 items-center w-fit">
                            <h3 className="bg-clip-text text-transparent bg-gradient-to-br from-[#106DE7] to-[#15D582] lg:text-[36px] text-[18px] font-bold font-markot text-center">-40&deg;C to 70&deg;C</h3>
                            <p className="text-[10px] lg:text-[18px] lg:leading-6 leading-3 font-normal text-grey/grey/1">
                                Extreme Weather <br /> Resistance Tested
                            </p>
                        </div>
                        <div className="px-2 py-1 lg:py-2 lg:px-5 rounded-md bg-white/10 flex gap-3 items-center w-fit">
                            <h3 className="bg-clip-text text-transparent bg-gradient-to-br from-[#106DE7] to-[#15D582] lg:text-[36px] text-[18px] font-bold font-markot text-center">100+</h3>
                            <p className="text-[10px] lg:text-[18px] lg:leading-6 leading-3 font-normal text-grey/grey/1">
                                Rigorous Tests Done
                            </p>
                        </div>
                        <div className="px-2 py-1 lg:py-2 lg:px-5 rounded-md bg-white/10 flex gap-3 items-center w-fit">
                            <h3 className="bg-clip-text text-transparent bg-gradient-to-br from-[#106DE7] to-[#15D582] lg:text-[36px] text-[18px] font-bold font-markot text-center">300,000+</h3>
                            <p className="text-[10px] lg:text-[18px] lg:leading-6 leading-3 font-normal text-grey/grey/1">
                                Times Key Lifespan
                            </p>
                        </div>
                    </div>
                </div>
                <img data-aos="fade-up" data-aos-delay="400" src={'/featurephone/king_signal/product/hero_phone.webp'} alt={"King signal"} className='lg:max-w-[400px] md:max-w-[280px] max-w-[250px]  lg:self-start lg:max-h-[500px] max-h-[400px] md:max-h-[380px]' />
            </div>
        </div>
    )
}

// export default Hero
export default HeroKingSignal