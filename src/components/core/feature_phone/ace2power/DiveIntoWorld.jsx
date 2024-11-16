import React from 'react'
import { For } from 'react-haiku'

const CardData = [
    { id: 1, icon: '/featurephone/Ace2Power/icons/display.svg', label: '4.57cm (1.8") Bright Display' },
    { id: 2, icon: '/featurephone/Ace2Power/icons/game.svg', label: '5 Preloaded Game' },
    { id: 3, icon: '/featurephone/Ace2Power/icons/recording.svg', label: 'Auto Call Recording' },
    { id: 4, icon: '/featurephone/Ace2Power/icons/notification.svg', label: 'Smart Notification' },
    { id: 5, icon: '/featurephone/Ace2Power/icons/torch.svg', label: 'Big LED Torch' },
    { id: 5, icon: '/featurephone/Ace2Power/icons/speaker.svg', label: '3D Stereo Speaker' },
]

const DiveIntoWorld = () => {
    return (
        <div className="bg-[url('/featurephone/Ace2Power/Backgrounds/dive_into_mobile.webp')] bg-cover bg-center bg-no-repeat lg:bg-[url('/featurephone/Ace2Power/Backgrounds/dive_into.webp')] px-4 md:px-0 font-markot lg:h-[800px] h-[579px] md:h-[700px] lg:pt-[157px] pt-4 overflow-hidden">
            <div className="content relative h-full">
                <div className="max-w-[548px] ">

                    <h1 className=" text-mobile/h4 lg:text-desktop/h2 ">Dive into a World of Entertainment</h1>

                    <p className="lg:text-desktop/body/large text-mobile/body/2 lg:mt-5 mt-3">
                        Enjoy the world of entertainment with features like wireless FM recording, Autocall Recording, a vivid 4.57cm (1.8") QQVGA Display, and the immersive KingVoice experience.
                    </p>

                    <div className="grid grid-cols-2 gap-y-5 gap-x-4 lg:gap-6 mt-5 lg:mt-10">
                        <For each={CardData} render={({ id, icon, label }) =>
                            <div className="flex gap-4 items-center">
                                <img src={icon} alt={label} className='size-8 lg:size-[54px] md:size-11' />
                                <h5 className="text-mobile/h7 lg:text-desktop/h6/medium">
                                    {label}
                                </h5>
                            </div>
                        } />
                    </div>
                </div>
                <img src="/featurephone/Ace2Power/Backgrounds/dive_into_phone.webp" alt="Ace 2 Power" className='bottom-0 absolute max-h-[253px] md:max-h-[350px] lg:max-h-[680px] lg:left-[75%] left-1/2 -translate-x-1/2 lg:w-7/12 xl:w-9/12 object-contain ' />
            </div>
        </div>
    )
}

export default DiveIntoWorld