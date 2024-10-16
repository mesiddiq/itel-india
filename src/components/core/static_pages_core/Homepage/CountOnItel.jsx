import React from 'react'

const CountOnItel = () => {
    return (
        <div className={`content relative`}>
            <div className="max-w-[577px] mx-auto absolute text-center bottom-[46px] left-1/2 -translate-x-1/2">
                <h3 className='text-desktop/h3 mx-auto max-w-[439px]'>
                    Count on itel: You, Your Phone: Our Priority
                </h3>
                <p className="text-desktop/body/1 mt-2">
                    At itel, we ensure top-notch quality through rigorous product testing. We're here to listen and help, ensuring you stay connected and worry-free.
                </p>
                <button className='uppercase flex items-center gap-2 rounded-[24px] bg-[#111111] py-[14px] px-6 mx-auto mt-5'>
                    <p className="text-desktop/button">get support</p>
                    <img src="./Union.svg" alt="" />
                </button>
            </div>
            <img src="./countonitel.webp" alt="" />
        </div>
    )
}

export default CountOnItel