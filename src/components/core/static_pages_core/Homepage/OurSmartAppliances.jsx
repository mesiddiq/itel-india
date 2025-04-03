import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
const OurSmartAppliances = () => {
    return (
        <section className='px-4 md:px-0'>
            <div className='content space-y-6 lg:space-y-10'>
                <h3 className=' text-mobile/h4  lg:text-desktop/h2 text-white'>Our Smart Appliances</h3>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 ">

                   <Link to={"/coming-soon"}>
                      <div className="rounded-2xl relative  overflow-hidden">
                        <div className="absolute z-50 max-w-[394px] space-y-3 top-9 left-4 lg:left-[44px]">
                            <h3 className='lg:text-desktop/h3 text-desktop/h4'>Home Care</h3>
                            <p className='lg:text-desktop/body/1 text-desktop/body/2/regular text-white/90'>Enhance home care by automating tasks, improving efficiency, and ensuring convenience</p>
                        </div>
                        <ReactPlayer
                            url={['/videos/homepage/vcleaner.webm']}
                            width={"100%"}
                            height={"100%"}
                            playing
                            loop
                            muted
                            className='h-full w-full hidden lg:block z-20 '
                        />
                        <div className="rounded-[16px] overflow-hidden">
                            <ReactPlayer
                                url={['/videos/homepage/vcleaner_mobile.mp4']}
                                width={"100%"}
                                height={"100%"}
                                playing
                                loop
                                muted
                                className='lg:hidden rounded-[16px] overflow-hidden w-full object-cover'
                            />
                        </div>
                    </div>
                   </Link>


                   <Link to={"/coming-soon"}>
                   <div className="rounded-2xl relative overflow-hidden">
                        <div className="absolute z-50 max-w-[394px] space-y-3 top-9 left-4 lg:left-[44px]">
                            <h3 className='lg:text-desktop/h3 text-desktop/h4'>Personal Care</h3>
                            <p className='lg:text-desktop/body/1 text-desktop/body/2/regular text-white/90'>Innovative smart hair dryers feature AI temperature control and customizable settings</p>
                        </div>
                        <ReactPlayer
                            url={['/videos/homepage/trimmer.webm']}
                            width={"100%"}
                            height={"100%"}
                            playing
                            loop
                            muted
                            className='h-full w-full hidden lg:block'
                        />
                        <ReactPlayer
                            url={['/videos/homepage/trimmer_mobile.mp4']}
                            width={"100%"}
                            height={"100%"}
                            playing
                            loop
                            muted
                            className='lg:hidden rounded-[16px] overflow-hidden w-full object-cover' />
                    </div>
                   </Link>
                 
                    
                </div>
            </div>
        </section>
    )
}

export default OurSmartAppliances