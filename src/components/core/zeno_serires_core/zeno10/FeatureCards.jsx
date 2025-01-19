import React from 'react'

const FeatureCards = () => {
    return (
        <section className='bg-[url("/smartphone/zeno10/3ksp/bg.webp")] lg:h-[720px] flex items-center justify-center h-[620px] bg-cover px-4 md:px-0'>
            <div className="content font-clash flex flex-col lg:flex-row gap-6 w-fit items-center   md:w-11/12 ">
                <div className="lg:max-w-[409px] w-full lg:h-[280px] max-w-[300px] h-[160px] relative flex items-center justify-center text-center">
                    <img src="/smartphone/zeno10/3ksp/Glassmorphism.png" alt="Glassmorphism" className='h-full w-full object-fill absolute top-0 left-0 backdrop-blur-sm ' />
                    <div className="max-w-[329px] flex items-center flex-col lg:gap-6 z-10">
                        <img src="/smartphone/zeno10/3ksp/icons/display.svg" alt="Display icon" className='size-6 lg:size-10 md:size-8' />
                        <h3 className=" lg:text-[24px] text-[16px] leading-5 lg:leading-6 tracking-[0.96px] font-bold lg:tracking-[1.44px] uppercase">
                            <span className="text-zeno-solid">6.6” HD+ </span> IPS <span className="text-zeno-solid">Drop</span>  Notch Display with <span className="text-zeno-solid">Dynamic Bar</span>
                        </h3>
                    </div>
                </div>
                <div className="lg:max-w-[409px] w-full lg:h-[280px] max-w-[300px] h-[160px] relative flex items-center justify-center text-center">
                    <img src="/smartphone/zeno10/3ksp/Glassmorphism.png" alt="Glassmorphism" className='h-full w-full object-fill absolute top-0 left-0 backdrop-blur-sm ' />
                    <div className="max-w-[329px] flex items-center flex-col lg:gap-6 z-10">
                        <img src="/smartphone/zeno10/3ksp/icons/memory.svg" alt="Display icon" className='size-6 lg:size-10 md:size-8' />
                        <h3 className=" lg:text-[24px] text-[16px] leading-5 lg:leading-6 tracking-[0.96px] font-bold lg:tracking-[1.44px] uppercase">
                            <span className="text-zeno-solid">64 gb memory  </span> for all your apps, games & memories
                        </h3>
                    </div>
                </div>
                <div className="lg:max-w-[409px] w-full lg:h-[280px] max-w-[300px] h-[160px] relative flex items-center justify-center text-center">
                    <img src="/smartphone/zeno10/3ksp/Glassmorphism.png" alt="Glassmorphism" className='h-full w-full object-fill absolute top-0 left-0 backdrop-blur-sm ' />
                    <div className="max-w-[329px] flex items-center flex-col lg:gap-6 z-10">
                        <img src="/smartphone/zeno10/3ksp/icons/battery.svg" alt="Display icon" className='size-6 lg:size-10 md:size-8' />
                        <h3 className=" lg:text-[24px] text-[16px] leading-5 lg:leading-6 tracking-[0.96px] font-bold lg:tracking-[1.44px] uppercase">
                            powerful <span className="text-zeno-solid">5000mah battery </span>  
                            designed to last all day
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureCards