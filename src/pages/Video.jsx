import React from 'react'
import ReactPlayer from 'react-player'

const Video = () => {
    return (
        <div className='w-full relative'>
            <ReactPlayer
                playing
                controls={false} 
                playing={true} 
                loop={true}
                muted={true}
                width='100%'
                height='100%'
                muted
                url={[{src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4', type: 'video/mp4'}]}
            />
            <div className='absolute w-full bottom-[16px] text-center'>
                <h3 className='text-[12px] md:text-[36px] text-white font-[500]'>Dream Big with itel: Join Us in Sparking India's Digital Revolution</h3>
            </div>
        </div>
    )
}

export default Video