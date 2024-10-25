const CommunicationPage = () => {
    return (
        <div className="py-[42px] lg:py-[73px] font-markot content">
            <div className="content relative bg-center bg-[url('/featurephone/Power_120/Backgrounds/CommunicateLanguageBGMobile.webp')] md:bg-[url('/featurephone/Power_120/Backgrounds/CommunicateLanguageBG.webp')] bg-contain bg-no-repeat h-[739px]">
                <div className="space-y-5 lg:space-y-6 max-w-[380px] absolute left-[25px] top-[6rem] md:left-[5rem] md:top-[17rem]  custom-md-style">
                    <div className="space-y-3 lg:space-y-2">
                        <h1 className="text-[24px] custom-lg-h1 custom-md-h1">
                            Communicate in your own language
                        </h1>
                        <p className="text-mobile/body/2 text-[#FFE8CB] lg:text-desktop/body/1">
                            Available in 9 Local Languages.
                        </p>
                        <p className="text-mobile/body/2 lg:text-desktop/body/1">
                            Message reading support available in Indian languages - English, Hindi, Gujarati, Punjabi, Bengali, Tamil, Telugu, Kannada & Malayalam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunicationPage;
