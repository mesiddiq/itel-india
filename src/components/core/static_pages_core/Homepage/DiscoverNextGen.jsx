import React from 'react'
import Marquee from 'react-fast-marquee'
import ReactPlayer from 'react-player'

const DiscoverNextGen = () => {
    return (
        <div className='px-4 md:px-0'>
            <div className="content lg:h-[620px] h-[420px] overflow-hidden relative lg:bg-none p-5 flex lg:items-center lg:pl-[88px]">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="/videos/homepage/nextgen.webm"
                    className="absolute z-10 left-0 top-0 w-full object-cover h-full rounded-xl overflow-hidden hidden sm:block"
                />
                <video src="/videos/homepage/nextgen_mobile.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full absolute left-0 sm:hidden">
                </video>
                <div className="flex flex-col lg:gap-6 gap-3 max-w-[400px] z-20 pt-4">
                    <h1 className="lg:text-desktop/h2 text-mobile/h5/medium">Discover the Next-Gen Feature Phones with itel</h1>
                    <p className="lg:text-desktop/body/large text-desktop/body/2/regular text-[#ceccd5]">itel's feature phones blend classic simplicity with modern style.</p>
                </div>
                <div className="z-20 ml-64 hidden sm:block ">
                    <img src="/static_page/homepage/nextgenmobile.webp" alt="" />
                </div>
                <div className="z-20 absolute left-0 bottom-10 lg:flex hidden">
                    <Marquee
                        direction='left'
                        autoFill={true}
                        speed={100}
                    >
                        <h1 className="font-markot text-[14px] leading-[16px] uppercase text-white/80 ">snap back to reality</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className='mx-4' width="32" height="20" viewBox="0 0 32 20" fill="none">
                            <rect x="0.852539" y="0.393555" width="30.6866" height="18.6526" rx="9.32631" fill="white" fill-opacity="0.8" />
                            <path d="M16.4005 4.12012C16.4005 4.12012 17.9488 6.77606 19.4341 7.89577C21.5155 9.46489 25.7268 9.7159 25.7268 9.7159C25.7268 9.7159 21.5155 9.96691 19.4341 11.536C17.9488 12.6557 16.4005 15.3117 16.4005 15.3117C16.4005 15.3117 14.8523 12.6557 13.367 11.536C11.2855 9.96691 7.07422 9.7159 7.07422 9.7159C7.07422 9.7159 11.2855 9.46489 13.367 7.89577C14.8523 6.77606 16.4005 4.12012 16.4005 4.12012Z" fill="#FF0037" />
                        </svg>
                        <h1 className="font-markot text-[14px] leading-[16px] uppercase text-white/80 ">retro Connect with modern twist</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className='mx-4' width="32" height="20" viewBox="0 0 32 20" fill="none">
                            <rect x="0.852539" y="0.393555" width="30.6866" height="18.6526" rx="9.32631" fill="white" fill-opacity="0.8" />
                            <path d="M16.4005 4.12012C16.4005 4.12012 17.9488 6.77606 19.4341 7.89577C21.5155 9.46489 25.7268 9.7159 25.7268 9.7159C25.7268 9.7159 21.5155 9.96691 19.4341 11.536C17.9488 12.6557 16.4005 15.3117 16.4005 15.3117C16.4005 15.3117 14.8523 12.6557 13.367 11.536C11.2855 9.96691 7.07422 9.7159 7.07422 9.7159C7.07422 9.7159 11.2855 9.46489 13.367 7.89577C14.8523 6.77606 16.4005 4.12012 16.4005 4.12012Z" fill="#FF0037" />
                        </svg>
                    </Marquee>
                </div>
            </div>
        </div>

    )
}

export default DiscoverNextGen