const HighIntensityTourch = () => {
    return (
        <div className="bg-center lg:h-[906px] w-full bg-[url('/featurephone/Power_120/Backgrounds/TorchBG-Mobile.webp')] md:bg-[url('/featurephone/Power_120/Backgrounds/TorchBG.webp')] bg-cover bg-no-repeat">
            <div className="content">
                <div className="flex justify-between gap-2 lg:flex-row flex-col-reverse">
                    <div className="flex flex-col justify-evenly lg:h-[120vh] items-center ">
                        <div className="hidden lg:block">
                            <img src="/featurephone/Power_120/Backgrounds/Tourch3.png" alt="Torch Icon" className="w-[400px]" />
                        </div>


                        <div className="md:w-[450px] lg:-[518px] p-5">
                            <p className="text-[14px] font-medium leading-[16.8px] tracking-[0.06em]">LED LIGHT</p>
                            <h1 className="text-mobile/h1 lg:text-desktop/h2 ">High Intensity LED Torch</h1>
                            <p className="text-mobile/body lg:text-desktop/body/large  lg:px-0">Navigate the darkest paths with ease using the itel Power 120s special LED light, designed to provide high-intensity focus.</p>
                        </div>

                    </div>
                    <div className="w-1/2 hidden lg:block relative">
                        <img src="/featurephone/Power_120/Backgrounds/TorchGraphic1.webp" alt="Torch Icon" className="h-[829px] w-auto absolute top-[50px] left-[60px]" />
                    </div>
                    <div className="lg:hidden relative mx-auto">
                        <img src="/featurephone/Power_120/Backgrounds/TorchGraphic-Mobile.webp" alt="Torch Icon" className="h-[350px] relative top-[-51px] left-[8px] md:h-[503.59px] " />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default HighIntensityTourch

