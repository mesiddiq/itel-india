import React from 'react'
import itel from '../../../public/itel.png';
import social from '../../../public/social.png';
import send from '../../../public/send.png';
import phone from '../../../public/phone.png';
import envelope from '../../../public/envelope.png';
import rightChevron from '../../../public/rightChevron.png';

const Footer = () => {
    return (
        <>
        <div className='w-full p-[20px] pt-[40px] md:p-[60px] bg-[#171717]'>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                <div className="col-span-1 md:col-span-2">
                    <div className='pb-3'><img src={itel} /></div>
                    <div className='mt-3 pb-10'><img src={social} /></div>
                    <p className='text-[14px] leading-[22.4px] pb-[15px]' style={{color: 'rgba(235, 236, 233, 0.5)'}}>Subscribe</p>
                    <div className="relative max-w-[330px]">
                        <input className="input" placeholder="Enter your email address"></input>
                        <div className="inputIcon"><img src={send} /></div>
                    </div> 
                    <p className='text-[14px] text-[#FFFFFF] leading-[22.4px] pt-[15px]'>Join our newsletter to stay up to date on features and releases</p>
                </div>
                <div className="col-span-1 md:col-span-1 pt-[20px] md:pt-[0px]">
                    <p className='text-[14px] leading-[22.4px] pb-[20px]' style={{color: 'rgba(235, 236, 233, 0.5)'}}>Products</p>
                    <p className='flex items-center text-[14px] text-[#FFFFFF] leading-[22.4px] pb-[15px]'>Smart phones <img src={rightChevron} className='h-[16px]' /></p>
                    <p className='flex items-center text-[14px] text-[#FFFFFF] leading-[22.4px] pb-[15px]'>Feature phones <img src={rightChevron} className='h-[16px]' /></p>
                    <p className='flex items-center text-[14px] text-[#FFFFFF] leading-[22.4px] pb-[15px]'>Smart TV <img src={rightChevron} className='h-[16px]' /></p>
                    <p className='flex items-center text-[14px] text-[#FFFFFF] leading-[22.4px] pb-[15px]'>Smart Gadgets <img src={rightChevron} className='h-[16px]' /></p>
                    <p className='flex items-center text-[14px] text-[#FFFFFF] leading-[22.4px] pb-[15px]'>Home Care <img src={rightChevron} className='h-[16px]' /></p>
                    <p className='flex items-center text-[14px] text-[#FFFFFF] leading-[22.4px] pb-[15px]'>Personal Care <img src={rightChevron} className='h-[16px]' /></p>
                </div>
                <div className="col-span-1 md:col-span-1 pt-[20px] md:pt-[0px]">
                    <p className='text-[14px] leading-[22.4px] pb-[20px]' style={{color: 'rgba(235, 236, 233, 0.5)'}}>Support</p>
                    <p className='flex items-center text-[14px] text-[#FFFFFF] leading-[22.4px] pb-[15px]'>Exchange offer <img src={rightChevron} className='h-[16px]' /></p>
                    <p className='flex items-center text-[14px] text-[#FFFFFF] leading-[22.4px] pb-[15px]'>Screen replacement <img src={rightChevron} className='h-[16px]' /></p>
                    <p className='flex items-center text-[14px] text-[#FFFFFF] leading-[22.4px] pb-[15px]'>Service Centre <img src={rightChevron} className='h-[16px]' /></p>
                    <p className='flex items-center text-[14px] text-[#FFFFFF] leading-[22.4px] pb-[15px]'>100 days promise <img src={rightChevron} className='h-[16px]' /></p>
                    <p className='flex items-center text-[14px] text-[#FFFFFF] leading-[22.4px] pb-[15px]'>FAQs <img src={rightChevron} className='h-[16px]' /></p>
                    <p className='flex items-center text-[14px] text-[#FFFFFF] leading-[22.4px] pb-[15px]'>E-waste management <img src={rightChevron} className='h-[16px]' /></p>
                </div>
                <div className="col-span-1 md:col-span-1 pt-[20px] md:pt-[0px]">
                    <p className='text-[14px] leading-[22.4px] pb-[20px]' style={{color: 'rgba(235, 236, 233, 0.5)'}}>Media</p>
                    <p className='flex items-center text-[14px] text-[#FFFFFF] leading-[22.4px] pb-[15px]'>News <img src={rightChevron} className='h-[16px]' /></p>
                    <p className='flex items-center text-[14px] text-[#FFFFFF] leading-[22.4px] pb-[15px]'>Blogs <img src={rightChevron} className='h-[16px]' /></p>
                    <p className='text-[14px] leading-[22.4px] pt-[35px] pb-[20px]' style={{color: 'rgba(235, 236, 233, 0.5)'}}>About itel</p>
                    <p className='flex items-center text-[14px] text-[#FFFFFF] leading-[22.4px] pb-[15px]'>About us <img src={rightChevron} className='h-[16px]' /></p>
                    <p className='flex items-center text-[14px] text-[#FFFFFF] leading-[22.4px] pb-[15px]'>Investor quick links <img src={rightChevron} className='h-[16px]' /></p>
                </div>
                <div className="col-span-1 md:col-span-1 pt-[20px] md:pt-[0px]">
                    <p className='text-[14px] leading-[22.4px] pb-[20px]' style={{color: 'rgba(235, 236, 233, 0.5)'}}>Contact</p>
                    <p className='flex items-center text-[14px] text-[#FFFFFF] leading-[22.4px] pb-[15px]'><img src={phone} className='h-[14px] mr-2' /> +91-120-6650888</p>
                    <p className='flex items-center text-[14px] text-[#FFFFFF] leading-[22.4px] pb-[15px]'><img src={envelope} className='h-[14px] mr-2' /> info.in@transsion.com</p>
                </div>
            </div>
        </div>
        <div className='w-full' style={{ marginTop: '0px' }}>
            <div className='hidden md:flex bg-[#1E1E1E] h-[50px] justify-center items-center text-center'>
                <p className='text-[12px] mr-[25px]' style={{color: 'rgba(235, 236, 233, 0.5)'}}>© 2021 itel. All right reserved.</p>
                <p className='text-[12px] mx-[25px]' style={{color: 'rgba(235, 236, 233, 0.5)'}}>Privacy policy</p>
                <p className='text-[12px] ml-[25px]' style={{color: 'rgba(235, 236, 233, 0.5)'}}>Terms of service</p>
            </div>
            <div className='flex md:hidden bg-[#1E1E1E] p-[20px]'>
                <div className='text-left'>
                    <p className='text-[12px] mb-[10px]' style={{color: 'rgba(163, 168, 159, 1)'}}><span className='mr-[20px]'>Privacy policy</span> Terms of service</p>
                    <p className='text-[12px]' style={{color: 'rgba(235, 236, 233, 0.5)'}}>© 2021 itel. All right reserved.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer