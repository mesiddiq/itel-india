import React from 'react'
import ReactPlayer from 'react-player'
import { useInView } from 'react-intersection-observer'

const ZenoText = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    })

    return (
        <section ref={ref} className="">
            <ReactPlayer
                url="/smartphone/zeno10/zenotextvideo/desktop.webm"
                width="100%"
                height="100%"
                muted={true}
                playsinline={true}
                playing={inView}
                controls={false}
                className="w-full max-h-screen object-cover lg:block hidden"
            />
            <ReactPlayer
                url="/smartphone/zeno10/zenotextvideo/mob.webm"
                width="100%"
                height="100%"
                muted={true}
                playsinline={true}
                playing={inView}
                controls={false}
                className="w-full max-h-screen object-cover lg:hidden"
            />
        </section>
    )
}

export default ZenoText

