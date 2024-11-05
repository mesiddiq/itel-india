import React from 'react'
import { For } from 'react-haiku'
import { AboutItel, MediaLinks, ProductsLink, SupportLinks } from '../../data/FooterData'

const Footer = () => {
    return (
        <>
            <div className='w-full p-[20px] pt-[40px] md:p-[60px] bg-[#171717]'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                    <div className="col-span-1 sm:col-span-2 lg:col-span-2">
                        <div className='pb-3'><img src={'/footer/itel.png'} /></div>
                        {/* <div className='mt-3 pb-10'><img src={social} /></div> */}
                        <p className='text-[14px] leading-[22.4px] pb-[15px]' style={{ color: 'rgba(235, 236, 233, 0.5)' }}>Subscribe</p>
                        <div className="relative max-w-[330px]">
                            <input className="input" placeholder="Enter your email address"></input>
                            <div className="inputIcon"><img src={'./footer/send.png'} /></div>
                        </div>
                        <p className='text-[14px] text-[#FFFFFF] leading-[22.4px] pt-[15px]'>Join our newsletter to stay up to date on features and releases</p>
                    </div>
                    <div className="col-span-1 sm:col-span-1 lg:col-span-1 pt-[20px] lg:pt-[0px]">
                        <p className='text-desktop/subtitle pb-[20px] text-white/50'>Products</p>
                        <div className="flex flex-col gap-3">
                            <For each={ProductsLink} render={(item, index) =>
                                <a href={item.link} className='cursor-pointer'>
                                    <div className='text-desktop/caption text-white flex'>
                                        {item.label}
                                        <img src={'/footer/rightChevron.png'} className='h-[16px]' />
                                    </div>
                                </a>
                            } />
                        </div>
                    </div>
                    <div className="col-span-1 sm:col-span-1 lg:col-span-1 pt-[20px] lg:pt-[0px]">
                        <p className='text-desktop/subtitle pb-[20px] text-white/50'>Support</p>
                        <div className="flex flex-col gap-3">
                            <For each={SupportLinks} render={(item, index) =>
                                <a href={item.link} className='cursor-pointer'>
                                    <div className='text-desktop/caption text-white flex'>
                                        {item.label}
                                        <img src={'/footer/rightChevron.png'} className='h-[16px]' />
                                    </div>
                                </a>
                            } />
                        </div>
                    </div>
                    <div className="col-span-1 sm:col-span-1 lg:col-span-1 pt-[20px] lg:pt-[0px] flex flex-col justify-between">
                        <div className="">
                            <p className='text-desktop/subtitle pb-[20px] text-white/50'>Media</p>
                            <div className="flex flex-col gap-3">
                                <For each={MediaLinks} render={(item, index) =>
                                    <a href={item.link} className='cursor-pointer'>
                                        <div className='text-desktop/caption text-white flex'>
                                            {item.label}
                                            <img src={'/footer/rightChevron.png'} className='h-[16px]' />
                                        </div>
                                    </a>
                                } />
                            </div>
                        </div>

                        <div className="">
                            <p className='text-desktop/subtitle pb-[20px] text-white/50'>About</p>
                            <div className="flex flex-col gap-3">
                                <For each={AboutItel} render={(item, index) =>
                                    <a href={item.link} className='cursor-pointer'>
                                        <div className='text-desktop/caption text-white flex'>
                                            {item.label}
                                            <img src={'/footer/rightChevron.png'} className='h-[16px]' />
                                        </div>
                                    </a>
                                } />
                            </div>
                        </div>

                    </div>
                    <div className="col-span-1 sm:col-span-1 lg:col-span-1 pt-[20px] lg:pt-[0px]">
                        <p className='text-[14px] leading-[22.4px] pb-[20px]' style={{ color: 'rgba(235, 236, 233, 0.5)' }}>Contact</p>
                        <p className='flex items-center text-[14px] text-[#FFFFFF] leading-[22.4px] pb-[15px]'>
                            <img src={'/footer/phone.png'} className='h-[14px] mr-2' /> +91-120-6650888
                        </p>
                        <p className='flex items-center text-[14px] text-[#FFFFFF] leading-[22.4px] pb-[15px]'><img src={'/footer/envelope.png'} className='h-[14px] mr-2' /> info.in@transsion.com</p>
                    </div>
                </div>
            </div>
            <div className='w-full' style={{ marginTop: '0px' }}>
                <div className='hidden md:flex bg-[#1E1E1E] h-[50px] justify-center items-center text-center'>
                    <p className='text-[12px] mr-[25px]' style={{ color: 'rgba(235, 236, 233, 0.5)' }}>© 2021 itel. All right reserved.</p>
                    <p className='text-[12px] mx-[25px]' style={{ color: 'rgba(235, 236, 233, 0.5)' }}>Privacy policy</p>
                    <p className='text-[12px] ml-[25px]' style={{ color: 'rgba(235, 236, 233, 0.5)' }}>Terms of service</p>
                </div>
                <div className='flex md:hidden bg-[#1E1E1E] p-[20px]'>
                    <div className='text-left'>
                        <p className='text-[12px] mb-[10px]' style={{ color: 'rgba(163, 168, 159, 1)' }}><span className='mr-[20px]'>Privacy policy</span> Terms of service</p>
                        <p className='text-[12px]' style={{ color: 'rgba(235, 236, 233, 0.5)' }}>© 2021 itel. All right reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer