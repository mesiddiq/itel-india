import React, { useRef } from 'react'
import { useSize } from 'react-haiku';
import Button from '../Button';
import BuyNowSquareBG from '../smartphone_common/BuyNowSquareBG';

const Hero = ({ title, subtitle, phoneUrl, purchaseLink, bgDesktop, bgMobile, dark }) => {

    const elementRef = useRef(null);
    const { width } = useSize(elementRef);


    return (
        <div ref={elementRef} className='font-markot overflow-hidden lg:min-h-[680px] md:min-h-[650px] min-h-[530px] items-center flex' style={{ background: `url(${width < 1024 ? bgMobile : bgDesktop}) center center/cover no-repeat` }}>
            <div className="content flex flex-col lg:flex-row gap-4 lg:gap-0 lg:justify-between items-center px-4 md:px-0 relative">
                <div className="space-y-4 lg:space-y-9 w-full">
                    <div className="space-y-2 lg:space-y-3">
                        <h1 className={`text-mobile/h1 lg:text-desktop/h1 ${dark && 'text-black/1'}`} data-aos="fade-right">{title}</h1>
                        <p className={`text-mobile/title lg:text-[20px] lg:leading-6 lg:tracking-[0.2px] font-normal uppercase text-grey/grey/1 ${dark && 'text-grey/grey/5'} max-w-[564px]`} data-aos="fade-right" data-aos-delay="400">{subtitle}</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600" className='w-fit'>
                        <BuyNowSquareBG purchaseLink={purchaseLink} content={'Buy Now'} />
                    </div>
                </div>
                <img data-aos="fade-up" data-aos-delay="400" src={phoneUrl} alt={title} className='lg:max-w-[319px] md:max-w-[280px] max-w-[171px]  self-end lg:self-start lg:max-h-[500px] max-h-[292px] md:max-h-[380px]' />
                {
                    title === 'Super Guru 4G' &&
                    <div className="text-mobile/small/body lg:text-desktop/body/2/regular text-grey/grey/1 absolute lg:-bottom-16 -bottom-10 max-w-[237px] left-4 lg:max-w-max">*YouTube supported is through third party Cloud App, Conditions apply.</div>
                }
            </div>
        </div>
    )
}

export default Hero