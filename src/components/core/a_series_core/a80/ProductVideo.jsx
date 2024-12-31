import React from 'react'
import ReactPlayer from 'react-player'

const ProductVideo = () => {
    return (
        <div className=''>
            <div className="max-h-[880px]">

                <ReactPlayer
                    url='/smartphone/A80/ProductVideo/video.webm'
                    width='100%'
                    height='100%'
                    loop
                    playing={true}
                />
            </div>
            <img src="/smartphone/A80/ProductVideo/Patterns.svg" alt="Pattern" className='h-6 md:h-10 lg:h-1/6 w-full object-cover' />
        </div>
    )
}

export default ProductVideo


