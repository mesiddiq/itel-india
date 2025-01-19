import React from 'react'
import ReactPlayer from 'react-player'

const DynamicBar = () => {
    return (
        <section className='relative lg:h-screen h-[720px] md:h-[750px] font-clash'>
            <video src="/smartphone/zeno10/dynamicbar/clashofclanvideo.webm" autoPlay loop muted playsInline className="w-full max-h-screen object-cover absolute top-0 left-0 -z-20 h-full">
            </video>

            <img src="/smartphone/zeno10/dynamicbar/gradient.svg" alt="Gradient" className='absolute top-0 left-0 w-full object-cover h-full -z-10 ' />
            <div className="content h-full flex flex-col lg:flex-row items-center justify-between py-8 ">
                <div className="space-y-2 lg:space-y-4">
                    <h6 className="lg:text-[17px] lg:tracking-[4px] uppercase lg:leading-5 [text-shadow:_0_0px_4px_rgb(255_255_255_/_50%)] text-[12px] leading-[14px] tracking-[2.4px] text-center lg:text-left ">
                        <span className="text-zeno-solid">//</span>
                        <span className="text-dull-white font-markot">dynamic bar</span>
                    </h6>
                    <h1 className="lg:text-[64px] text-[32px] leading-8 font-bold uppercase lg:leading-[64px] text-center lg:text-left">
                        <span className="text-dull-white" >intuitive.</span> <br />
                        <span className="text-dull-white">smart.</span> <br className='hidden lg:block' />
                        <span className="text-zeno-solid">dynamic.</span>
                    </h1>
                </div>
                <img src="/smartphone/zeno10/dynamicbar/mobileframe.webp" alt="Dynamic bar mobile frame" className='max-h-[490px] lg:max-w-[515px] max-w-[300px] object-contain flex-shrink absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ' />
                <div className="lg:max-w-[425px] max-w-[297px] h-[169px] lg:h-[241px] p-4 lg:p-10 relative ">
                    <img src="/smartphone/zeno10/dynamicbar/glassmorphism.png" className='h-full w-full absolute top-0 left-0 object-fill backdrop-blur-sm -z-10 ' alt="Glassmorphism Backgroud" />
                    <p className="lg:text-desktop/body/large text-dull-white z-40 !tracking-wide ">
                        With <span className="text-zeno-solid"> Dynamic Bar</span>, get notified calls, and alerts in an unobtrusive way, so you never miss what matters while enjoying everything that matters.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default DynamicBar