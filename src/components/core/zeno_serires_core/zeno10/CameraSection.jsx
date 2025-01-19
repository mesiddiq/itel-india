import React from 'react'

const CameraSection = () => {

    const cards = [
        { id: 1, label: 'Portrait Mode', icon: '/smartphone/zeno10/camera/icons/potrait.svg' },
        { id: 1, label: 'HDR Mode', icon: '/smartphone/zeno10/camera/icons/hdrmode.svg' },
        { id: 1, label: 'Wide Selfie Mode', icon: '/smartphone/zeno10/camera/icons/wideselfie.svg' },
        { id: 1, label: 'Pro Mode', icon: '/smartphone/zeno10/camera/icons/promode.svg' },
        { id: 1, label: 'Pano-rama', icon: '/smartphone/zeno10/camera/icons/panorama.svg' },
        { id: 1, label: 'Time-lapse', icon: '/smartphone/zeno10/camera/icons/timelapse.svg' },
        { id: 1, label: 'Short Video', icon: '/smartphone/zeno10/camera/icons/shortvideo.svg' },
        { id: 1, label: 'AR Shots', icon: '/smartphone/zeno10/camera/icons/arshot.svg' },
    ]

    return (
        <>
            <section className='lg:h-[600px] h-[830px] bg-[#000] xl:h-[720px] px-4 md:px-0 pt-7 lg:pt-0 relative'>
                <div className="h-full lg:bg-[url('/smartphone/zeno10/camera/bgdesktop.webp')] lg:bg-cover bg-contain lg:bg-center bg-bottom bg-no-repeat max-w-[1440px] mx-auto lg:pt-[60px] ">
                    <div className="content grid lg:flex grid-cols-2 gap-x-20 lg:gap-x-0 gap-y-5 max-w-[1080px] justify-between" >
                        {
                            cards.map(({ id, label, icon }) => (
                                <div key={id} className="flex gap-2 items-center lg:flex-col lg:gap-4 max-w-[140px] text-center ">
                                    <img src={icon} alt={label} className='size-[33px] lg:size-11' />
                                    <p className="text-[16px] lg:text-[20px] text-left lg:text-center leading-5 lg:leading-6 lg:tracking-[0.2px] tracking-[0.16px] text-zeno-solid font-clash"> {label} </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <img src="/smartphone/zeno10/camera/bgmobile.webp" alt="Zeno 10" className='absolute bottom-0 left-1/2 -translate-x-1/2 lg:hidden' />
            </section>
            <div className="py-3 px-5 bg-zeno-solid">
                <div className="content flex justify-between items-center">
                    <img src="/smartphone/zeno10/camera/icons.svg" alt="black icon" className='size-5 lg:size-10 md:size-8 object-contain' />
                    <p className="text-white font-clash text-[14px] lg:text-[20px] lg:leading-6 leading-4 tracking-[2.8px] lg:tracking-[7.4px] font-bold text-center uppercase">Get this attractive back cover for free</p>
                    <img src="/smartphone/zeno10/camera/icons.svg" alt="black icon" className='size-5 lg:size-10 md:size-8 object-contain' />
                </div>
            </div>
        </>
    )
}

export default CameraSection