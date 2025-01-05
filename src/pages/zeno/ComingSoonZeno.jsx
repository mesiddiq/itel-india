import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import gsap from 'gsap'
import { WordRotate } from './WordRotateAnimation'

const words = ['React', 'JavaScript', 'Animation', 'GSAP']

const HeadingWords = ['Design', 'Experience', 'Controls', 'Output', 'ZENO 10']
const SubHeadingWords = ['Zenith of', 'Elevated', 'Nuanced', 'Optimised', 'Stay Ahead with']

const ComingSoonZeno = () => {

    return (
        <main className='font-markot'>
            <section className=" h-[520px] lg:h-[720px] relative">
                <video
                    autoPlay
                    loop
                    muted
                    width="100%"
                    height="100%"
                    className="object-cover w-full h-full"
                >
                    <source src="/videos/zeno/hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute mx-auto flex justify-between w-full md:w-11/12 px-4 md:px-0 max-w-[1280px] left-1/2 -translate-x-1/2 lg:top-20 top-10 ">
                    <img className='w-[78px] lg:w-[118px]' src="/videos/zeno/zeno.png" alt="zeno logo" />
                    <img className='w-[78px] lg:w-[118px]' src="/videos/zeno/spark.png" alt="spark" />
                </div>
            </section>
            <section className="lg:h-[680px] h-[510px]  flex items-end relative ">
                <div className="  flex flex-col gap-6 lg:flex-row text-center lg:text-left justify-between content z-20 lg:pb-24 pb-12 px-4 md:px-0 items-center ">
                    <div className="flex gap-4 flex-col">
                        <p className="text-[16px] lg:text-[20px] lg:-tracking-[0.4px] font-normal leading-normal -tracking-[0.32px] text-[#fafafa] max-w-[480px]">
                            A space where nuance and cutting-edge technology go hand in hand to create something extraordinary. <br className="lg:hidden" /> <br className="lg:hidden" />
                            The <span className="font-bold">Zeno</span> series is crafted not just to meet expectations, but to challenge them.
                        </p>
                        <div className="lg:flex gap-4 flex-col lg:flex-row items-center hidden">
                            <a href="https://www.amazon.in/b?node=96304674031&ref" target="_blank">
                                <img src="/videos/zeno/cta.svg" alt="" />
                            </a>
                            <h5 className="lg:text-desktop/h5 text-mobile/h6"> Starting from <span className="font-bold">5XXX /-</span> </h5>
                        </div>

                    </div>
                    <p className="text-[16px] lg:text-[20px] lg:-tracking-[0.4px] font-normal leading-normal -tracking-[0.32px] text-[#fafafa] max-w-[480px] text-balance">
                        With its unmatched combination of modernistic design, elevated experience, nuanced controls and optimised output, Zeno is made to empower those who push the limits, those who envision what's next. It’s not just about technology; it’s about taking charge of your future.
                    </p>
                    <div className="flex gap-4 flex-col lg:flex-row items-center lg:hidden">
                        <a href="https://www.amazon.in/b?node=96304674031&ref" target="_blank">
                            <img src="/videos/zeno/cta.svg" alt="" />
                        </a>
                        <h5 className="lg:text-desktop/h5 text-mobile/h6"> Starting from <span className="font-bold">5XXX /-</span> </h5>
                    </div>
                </div>
                <video className='absolute w-full h-full object-cover' src="/videos/zeno/star.mp4" autoPlay loop muted>
                </video>
            </section>
            <section className="lg:h-[520px] py-[100px] lg:py-0 flex items-center justify-center bg-black">
                <h1 className="uppercase text-[42px] lg:text-[70px] lg:leading-[84px] lg:tracking-[3.4px] leading-[51px] tracking-[2.1px] font-bricolage font-extrabold text-[#ffeaf0]/30 max-w-[720px] text-center ">Are you ready to <span className="text-[#f11553]">take charge </span> of your future?</h1>
            </section>
            <section className="lg:h-[760px]  bg-black pb-10 lg:pb-0">
                <div className="content flex flex-col lg:flex-row items-center justify-between ">

                    <ReactPlayer
                        url={'/videos/zeno/mobile.mp4'}
                        playing={true}
                        loop={true}
                        muted={true}
                        width="426px"
                        height="100%"
                        className="lg:max-w-[426px] max-w-[300px]"
                    />
                    <div className="flex flex-col  items-center lg:gap-20 gap-10 max-w-[533px] w-full">
                        <div className="text-center lg:space-y-6 space-y-5">
                            {/* <h4 className="lg:text-[38px] font-bricolage lg:leading-6 font-normal text-[#ff073c] text-[30px] leading-8  ">Stay Ahead with </h4> */}

                            <WordRotate
                                words={SubHeadingWords}
                                className="lg:text-[38px] font-bricolage lg:leading-6 font-normal text-[#ff073c] text-[30px] leading-8 "
                            />
                            <WordRotate
                                words={HeadingWords}
                                className="lg:text-[100px] lg:leading-[94px] font-bricolage text-[#ff073c] font-extrabold text-[80px] leading-[76px]"
                            />
                            {/* <h1 className="lg:text-[100px] lg:leading-[94px] font-bricolage text-[#ff073c] font-extrabold text-[80px] leading-[76px]">ZENO 10</h1> */}
                            <p className="lg:text-[20px] text-[16px] lg:leading-[18px] leading-4 tracking-[2.42px] uppercase font-markot text-[#bdb8b8] font-bold">launching 9th Jan</p>
                        </div>
                        <a href="https://www.amazon.in/b?node=96304674031&ref" target='_blank'>
                            <img src="/videos/zeno/amazon.svg" alt="Amazon Specials" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ComingSoonZeno