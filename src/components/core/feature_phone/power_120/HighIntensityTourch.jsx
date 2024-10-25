const HighIntensityTourch = () => {
    return (
        <div className="bg-center px-4 md:px-0 font-markot lg:h-[906px] overflow-hidden w-full bg-[url('/featurephone/Power_120/Backgrounds/TorchBG-Mobile.webp')] md:bg-[url('/featurephone/Power_120/Backgrounds/TorchBG.webp')] bg-cover bg-no-repeat">
            <div className="content h-[566px] pb-9  flex flex-col justify-between relative">
                <div className="max-w-[550px] relative">
                    
                    {/* <img src="/featurephone/Power_120/Backgrounds/TorchGraphic2.webp" alt="torch" className="max-w-[239px] absolute top-20 z-10 mix-blend-screen" /> */}
                    <img src="/featurephone/Power_120/Backgrounds/torch2.png" alt="torch" className="max-w-[352px] absolute -left-10 -top-10 z-10 " />
                    {/* <img src="/featurephone/Power_120/Backgrounds/TorchGraphic1.webp" alt="torch graphic" className="max-h-[374px] object-contain absolute top-0 z-20 left-20 " /> */}
                    <h5 className="text-mobile/h7 absolute top-1/2">Torch Switch </h5>
                </div>
                <div className="max-w-[609px] space-y-3 lg:space-y-5">
                    <p className="text-[14px] font-medium leading-[16.8px] tracking-[0.06em]">LED LIGHT</p>
                    <h1 className="text-mobile/h4 lg:text-desktop/h1 ">High Intensity LED Torch</h1>
                    <p className="text-mobile/body/2 lg:text-desktop/body/large">Navigate the darkest paths with ease using the itel Power 120s special LED light, designed to provide high-intensity focus.</p>
                </div>

            </div>
        </div>
    )
}

export default HighIntensityTourch

