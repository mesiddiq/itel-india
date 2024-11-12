import React from 'react'

const Loading = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center overflow-hidden bg-brand/black">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66" height="100px" width="100px" className="spinner animate-spin size-[250px] rounded-s-full">
                <circle stroke="url(#gradient)" r="20" cy="33" cx="33" strokeWidth="1" fill="transparent" className="path"></circle>
                <linearGradient id="gradient">
                    <stop stopOpacity="1" stopColor="#fe0000" offset="0%"></stop>
                    <stop stopOpacity="0" stopColor="#af3dff" offset="100%"></stop>
                </linearGradient>

            </svg>
        </div>
    )
}

export default Loading