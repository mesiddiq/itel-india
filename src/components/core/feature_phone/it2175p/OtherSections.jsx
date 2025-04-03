import React from 'react'
import { For } from 'react-haiku'

const OtherSections = () => {
    return (
        <>
            <div className="bg-[url('/featurephone/it2175p/Backgrounds/display.webp')] overflow-hidden lg:bg-[url('/featurephone/it2175p/Backgrounds/display.jpg')] bg-cover font-markot px-4 md:px-0 ">
                <div className="content relative flex flex-col pt-9 gap-12 lg:gap-0 lg:pt-10 xl:pt-0 xl:flex-row-reverse  items-center justify-between min-h-[572px] lg:min-h-[726px]">
                    <div className="flex flex-col max-w-[480px] gap-5">
                        <h3 className="text-mobile/h4 md:text-mobile/h3 lg:text-[60px] lg:leading-[72px] lg:font-medium lg:-tracking-[1.2px]">The 2.0” Display Advantage</h3>
                        <p className="text-mobile/body/2 lg:text-[16px] font-normal lg:leading-[22px] text-grey/grey/1">Experience a bigger view and elevated style with itel it2175 Pro&apos;s big and bright 5.1cm (2”) Display. Ergonomically designed for your comfort.</p>
                        <div className="grid grid-cols-2 gap-y-5 gap-x-4 lg:gap-y-6 lg:gap-x-10">
                            <For each={['Bigger View', 'Elevated Style', 'Highly Ergonomic', 'Elevated Experiences']} render={(item) =>
                                <div className="flex gap-4 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='lg:w-12 w-6' width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <path d="M22.032 4.5L21.5625 4.9215L11.391 15H3V39H28.266C30.381 39 32.226 37.506 32.6715 35.4375L35.157 24H40.5C42.9675 24 45 21.9675 45 19.5C45 17.0325 42.9675 15 40.5 15H24.375L24.657 13.875C24.9615 13.641 25.155 13.5405 25.5945 12.9375C26.2965 11.9775 27 10.488 27 8.484C27 6.345 25.065 4.5 22.641 4.5H22.032ZM23.109 7.641C23.742 7.764 24 8.022 24 8.484C24 9.8385 23.5905 10.6755 23.2035 11.2035C22.8165 11.73 22.5465 11.859 22.5465 11.859L22.0305 12.141L21.8445 12.75L20.9535 16.125L20.484 18H40.5C41.349 18 42 18.651 42 19.5C42 20.349 41.349 21 40.5 21H32.718L32.4375 22.1715L29.766 34.8285C29.688 35.1661 29.4965 35.4666 29.2235 35.6799C28.9504 35.8931 28.6124 36.0061 28.266 36H13.5V17.109L23.109 7.641ZM6 18H10.5V36H6V18Z" fill="white" />
                                    </svg>
                                    <h3 className="lg:text-desktop/h5/medium text-mobile/h7 text-grey/grey/1 tracking-[0.12px]">
                                        {item}
                                    </h3>
                                </div>
                            } />
                        </div>
                    </div>
                    <div className="lg:translate-y-20">
                        <img src="/featurephone/it2175p/Backgrounds/doublephone.webp" alt="double phone it2175 p" className='lg:max-w-[724px] max-w-[328px]' />
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="156" height="32" className='absolute hidden xl:block top-[480px] left-1/2' viewBox="0 0 156 32" fill="none">
                        <path d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM92 6L92.3624 5.068L92.1876 5H92V6ZM6 7H92V5H6V7ZM91.6376 6.932L154.638 31.432L155.362 29.568L92.3624 5.068L91.6376 6.932Z" fill="white" />
                    </svg>
                </div>
            </div>

            {/* Second Section */}

            <div className="bg-[url('/featurephone/it2175p/Backgrounds/powermobile.webp')] overflow-hidden lg:bg-[url('/featurephone/it2175p/Backgrounds/power.jpg')] bg-cover font-markot px-4 md:px-0 ">
                <div className="content relative flex flex-col items-center justify-between lg:flex-col xl:flex-row lg:pt-10 min-h-[683px] lg:min-h-[800px] pt-8 xl:pt-0">
                    <div className="max-w-[530px]">
                        <div className="flex flex-col gap-5">
                            <h3 className="text-mobile/h4 md:text-mobile/h3 lg:text-[60px] lg:leading-[72px] lg:font-medium lg:-tracking-[1.2px]">The 2.0” Display Advantage</h3>
                            <h4 className="lg:text-desktop/h4 text-mobile/h6 text-grey/grey/1">1200 mAh Battery </h4>
                            <p className="text-mobile/body/2 lg:text-[16px] font-normal lg:leading-[22px] text-grey/grey/1">Experience a bigger view and elevated style with itel it2175 Pro&apos;s big and bright 5.1cm (2”) Display. Ergonomically designed for your comfort.</p>
                        </div>
                        <div className="flex justify-between lg:mt-[62px] mt-5">
                            <div className="flex gap-2 md:gap-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="33" className='size-8 lg:size-16 md:size-12' viewBox="0 0 34 33" fill="none">
                                    <path d="M17 32.5C8.17591 32.5 1 25.3241 1 16.5C1 7.67591 8.17591 0.5 17 0.5C25.8241 0.5 33 7.67591 33 16.5C33 25.3241 25.8241 32.5 17 32.5ZM17 1.0062C8.45533 1.0062 1.5062 7.95533 1.5062 16.5C1.5062 25.0447 8.45533 31.9938 17 31.9938C25.5447 31.9938 32.4938 25.0447 32.4938 16.5C32.4938 7.95533 25.5447 1.0062 17 1.0062Z" fill="white" stroke="white" strokeWidth="0.5" />
                                    <path d="M6.89315 13.8185H7.14315V13.5685V11.2886V11.2845C7.14315 11.0681 7.30868 10.8906 7.53705 10.8906H27.5259C27.7361 10.8906 27.9198 11.0743 27.9198 11.2845V21.7001C27.9198 21.9103 27.7361 22.094 27.5259 22.094H7.53705C7.32685 22.094 7.14315 21.9103 7.14315 21.7001V19.4202V19.1702H6.89315H6.07812V13.8185H6.89315ZM27.0834 11.9325V11.6825H26.8334H8.18095H7.93095V11.9325V21.0603V21.3103H8.18095H26.8334H27.0834V21.0603V11.9325Z" fill="white" stroke="white" strokeWidth="0.5" />
                                    <path d="M22.625 19.9704V13.0312H25.5226V19.9704H22.625Z" fill="white" stroke="white" strokeWidth="0.5" />
                                    <path d="M18.25 19.9704V13.0312H21.1476V19.9704H18.25Z" fill="white" stroke="white" strokeWidth="0.5" />
                                    <path d="M13.8906 19.9704V13.0312H16.7883V19.9704H13.8906Z" fill="white" stroke="white" strokeWidth="0.5" />
                                    <path d="M9.52344 19.9704V13.0312H12.4211V19.9704H9.52344Z" fill="white" stroke="white" strokeWidth="0.5" />
                                </svg>
                                <h4 className="text-mobile/h7 lg:text-[20px] lg:font-bold lg:leading-6 lg:-tracking-[0.2px] lg:text-grey/grey/2  text-grey/grey/1">25 Days* Standby</h4>
                            </div>
                            <div className="flex gap-2 md:gap-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="33" className='size-8 lg:size-16 md:size-12' viewBox="0 0 34 33" fill="none">
                                    <path d="M17 32.5C8.17591 32.5 1 25.3241 1 16.5C1 7.67591 8.17591 0.5 17 0.5C25.8241 0.5 33 7.67591 33 16.5C33 25.3241 25.8241 32.5 17 32.5ZM17 1.0062C8.45533 1.0062 1.5062 7.95533 1.5062 16.5C1.5062 25.0447 8.45533 31.9938 17 31.9938C25.5447 31.9938 32.4938 25.0447 32.4938 16.5C32.4938 7.95533 25.5447 1.0062 17 1.0062Z" fill="white" stroke="white" strokeWidth="0.5" />
                                    <path d="M6.89315 13.8185H7.14315V13.5685V11.2886V11.2845C7.14315 11.0681 7.30868 10.8906 7.53705 10.8906H27.5259C27.7361 10.8906 27.9198 11.0743 27.9198 11.2845V21.7001C27.9198 21.9103 27.7361 22.094 27.5259 22.094H7.53705C7.32685 22.094 7.14315 21.9103 7.14315 21.7001V19.4202V19.1702H6.89315H6.07812V13.8185H6.89315ZM27.0834 11.9325V11.6825H26.8334H8.18095H7.93095V11.9325V21.0603V21.3103H8.18095H26.8334H27.0834V21.0603V11.9325Z" fill="white" stroke="white" strokeWidth="0.5" />
                                    <path d="M22.625 19.9704V13.0312H25.5226V19.9704H22.625Z" fill="white" stroke="white" strokeWidth="0.5" />
                                    <path d="M18.25 19.9704V13.0312H21.1476V19.9704H18.25Z" fill="white" stroke="white" strokeWidth="0.5" />
                                    <path d="M13.8906 19.9704V13.0312H16.7883V19.9704H13.8906Z" fill="white" stroke="white" strokeWidth="0.5" />
                                    <path d="M9.52344 19.9704V13.0312H12.4211V19.9704H9.52344Z" fill="white" stroke="white" strokeWidth="0.5" />
                                </svg>
                                <h4 className="text-mobile/h7 lg:text-[20px] lg:font-bold lg:leading-6 lg:-tracking-[0.2px] lg:text-grey/grey/2  text-grey/grey/1">12* Hours Talktime</h4>
                            </div>
                        </div>
                    </div>
                    <div className="relative ">
                        <img src="/featurephone/it2175p/Backgrounds/powerphone.webp" className='max-w-[223px] lg:max-w-[450px] lg:translate-y-10 lg:-translate-x-16' alt="it2175p" />
                        <div className="absolute right-44 bottom-16 lg:flex items-center hidden ">
                            <h3 className="text-[20px] font-bold text-grey/grey/2 leading-6 tracking-[0.2px] text-nowrap mx-5">Super Battery Mode</h3>
                            <div className="h-[2px] w-[calc(100vw_-_900px)] max-w-[700px] bg-white "></div>
                            <div className="size-2 bg-white rounded-full"></div>
                        </div>
                        <div className="w-[50px] h-[313px] border-r-2 border-b-2 border-white absolute top-0 -right-4 lg:hidden">
                            <div className="size-2 bg-white rounded-full absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"></div>
                            <h6 className="text-mobile/h7 text-grey/grey/1 text-nowrap -translate-x-20 -translate-y-8">Super Battery mode</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtherSections