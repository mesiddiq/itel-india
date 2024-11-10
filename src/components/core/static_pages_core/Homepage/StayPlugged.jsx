import React from 'react';

const StayPlugged = () => {
    return (
        <div className='content lg:px-[119px] relative h-[462px] lg:h-auto'>
            <div className='flex flex-col-reverse lg:flex-row justify-between items-center z-20'>
                <button className="z-20 mt-4 lg:hidden">
                    <img src="/static_page/homepage/stayplugged.png" alt="" className='' />
                </button>
                <div className=' text-white max-w-[296px] text-center lg:text-left lg:max-w-[463px] z-20 '>
                    <h2 className='lg:text-[36px] font-bold lg:leading-[46.8px] text-desktop/h4 '>Stay Plugged into Your<br />Go-to Socials with itel</h2>
                    <p className='lg:text-desktop/body/1 lg:leading-6 text-[14px] leading-4 -tracking-[0.14px] text-white/80 mt-2 lg:mt-4 '>Effortlessly connect with itel’s range of smartphones, from budget-friendly models to high-performance devices.</p>
                    <a href='https://www.instagram.com/itel_india/' target='_blank' className="z-20 mt-8 lg:block hidden">
                        <img src="/static_page/homepage/staypluggedcta.svg" alt="" className='' />
                    </a>
                </div>
                <div className=' max-w-[302px] lg:max-w-[517px] z-20'>
                    <img src={'/static_page/homepage/selfie.png'} />
                </div>
                <img src="/static_page/homepage/stayplugged.png" className='absolute top-0 left-0 z-10 hidden lg:block' />
                <img src="/static_page/homepage/stayplugged-mobile.png" className='absolute left-1/2 -translate-x-1/2 z-10 top-0 lg:hidden' />
            </div>
        </div>
    )
}

export default StayPlugged