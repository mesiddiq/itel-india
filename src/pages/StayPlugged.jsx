import React from 'react';
import image from '../../public/1000006155.png';

const StayPlugged = () => {
    return (
        <div className='content'>
            <div className='hidden md:grid md:grid-cols-2 md:gap-4 StayPlugged md:place-items-center w-full h-[650px]'>
                <div className='pl-[20%] text-white'>
                    <h2 className='text-[36px] font-[700] leading-[46.8px] pb-3'>Stay Plugged into Your<br/>Go-to Socials with itel</h2>
                    <p className='text-[16px] font-[300] leading-[20.2px]'>Get all the must-have accessories for your fav itel mobile, like the itel power bank and itel earphone.</p>
                </div>
                <div><img src={image} /></div>
            </div>
            <div className='md:hidden StayPluggedMobile flex flex-col justify-center items-center text-center w-full h-[650px]'>
                <div className='w-[80%]' style={{ margin: '0 auto' }}><img src={image} /></div>
                <div className='w-[80%] text-white' style={{ margin: '0 auto' }}>
                    <h2 className='text-[24px] md:text-[36px] font-[700] leading-[31px] md:leading-[46.8px] pb-3'>Stay Plugged into Your<br/>Go-to Socials with itel</h2>
                    <p className='text-[14px] md:text-[16px] font-[300] leading-[16.8px] md:leading-[20.2px]'>Get all the must-have accessories for your fav itel mobile, like the itel power bank and itel earphone.</p>
                </div>
            </div>
        </div>
    )
}

export default StayPlugged