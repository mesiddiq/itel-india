import React from 'react'

const NonStopPower = () => {
    return (
        <section className="lg:h-screen h-[580px] md:h-[650px] flex lg:items-center pt-8 lg:pt-0 justify-center bg-[url('/smartphone/zeno10/power/bgmobile.webp')] lg:bg-[url('/smartphone/zeno10/power/bgdesktop.webp')] w-full bg-center bg-cover font-clash px-4 md:px-0">
            <div className="content">
                <div className="lg:max-w-[679px] relative lg:h-[378px] max-w-[315px] h-[275px] mx-auto lg:ml-0 w-full lg:p-[63px] lg:space-y-4 p-[32px_16px] text-center lg:text-left space-y-2 ">
                    <img src="/smartphone/zeno10/futureready/glassmorphism.svg" alt="Glassmorphism Backgroud" className='absolute top-0 left-0 h-full w-full object-cover lg:block hidden ' />
                    <img src="/smartphone/zeno10/futureready/glassmorphismmobile.svg" alt="Glassmorphism Backgroud" className='absolute top-0 left-0 h-full w-full object-fill lg:hidden ' />
                    <h6 className="lg:text-[17px] lg:tracking-[4px] uppercase lg:leading-5 [text-shadow:_0_0px_4px_rgb(255_255_255_/_50%)] text-[12px] leading-[14px] tracking-[2.4px] ">
                        <span className="text-zeno-solid">//</span>
                        <span className="text-dull-white font-markot">battery</span>
                    </h6>
                    <h1 className=" lg:text-[48px] lg:leading-[48px] text-[32px] leading-8 uppercase font-bold ">
                        <span className="text-dull-white">non-stop power, </span>
                        <span className="text-zeno-solid">inspired by you</span>
                    </h1>
                    <p className="lg:text-desktop/body/large text-[14px] leading-5 text-[#f3f3f3] !tracking-wide ">
                        Designed for those who live life on the go, Zeno is packed with a massive <span className="text-zeno-solid">5000mAh battery</span> battery, ensuring you stay connected, entertained, and productive all day long.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default NonStopPower