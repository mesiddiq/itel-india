import React from 'react'
import ReactPlayer from 'react-player'

const OurCoolGadgets = () => {
    return (
        <section className="px-4 md:px-0">

            <div className='content'>
                <h1 className="text-mobile/h4 lg:text-desktop/h2">Peep into Our Cool Gadgets</h1>
                <p className="text-desktop/body/2/regular lg:hidden mt-[14px]">Check out our lineup of dope gadgets, from itel smartwatches to itel earbuds, blending connectivity with style. Stay ahead of the curve with itel's smart gear—perfect for your vibe!</p>

                <img src="https://res.cloudinary.com/djwj42mic/image/upload/v1729920395/CoolGAdgets_yszjct.gif" alt="Our Cool Gadgets" className='w-full lg:hidden mt-9 rounded-[16px] overflow-hidden' />

                <ReactPlayer
                    url={['/videos/homepage/gadgets.webm']}
                    width={"100%"}
                    height={"100%"}
                    playing
                    loop
                    muted
                    className='hidden lg:block mt-10 rounded-[20px] overflow-hidden'
                />

                <p className="text-desktop/body/1 text-white/90 hidden lg:block mt-10">Check out our lineup of dope gadgets, from itel smartwatches to itel earbuds, blending connectivity with style. Stay ahead of the curve with itel's smart gear—perfect for your vibe!</p>

            </div>
        </section>
    )
}

export default OurCoolGadgets