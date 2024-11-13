import React from 'react'
import ReactPlayer from 'react-player'

const Loading = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center overflow-hidden">
            <ReactPlayer
                loop
                muted
                playing
                width="100%"
                height="100%"
                url="/videos/loading.webm"
            />
        </div>
    )
}

export default Loading