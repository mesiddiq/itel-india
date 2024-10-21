import GradientBackgroundWrapper from "./GradientBackgroundWrapper "

const Section5MultiLanguageSupport = () => {
    return (
        <GradientBackgroundWrapper bgImage={'/smartphone/A23s/Backgrounds/multilang.webp'}
            paddingStart="57px"
            padding="0"
            mobileBgImage={'/smartphone/A23s/Backgrounds/multiLang-Mobile.png'}
            mobileBackgroundSize={'contain'}
            mobileBackgroundPosition={'bottom'}
        >
            <div className=" lg:h-[739px]  h-[409px] flex justify-end  ">
                <div className="lg:w-[435px] md:w-[200px] lg:py-14  md:flex md:flex-col md:gap-5">
                    <p className="text-mobile/h4 lg:text-desktop/h2 text-center md:text-left">Multi-Language Support</p>
                    <span className="text-mobile/body/2 lg:text-desktop/body/large text-center  md:text-left text-[#6F7384]">Use your device in any language you prefer</span>
                    <span className="text-mobile/body/2 lg:text-desktop/body/large text-center md:text-left text-[#6F7384]">
                        15 Languages Supported: English, Hindi, Gujarati, Tamil, Telugu, Punjabi, Assamese, Bengali, Kannada, Malayalam, Kashmiri, Urdu, Nepali, Marathi, Oriya.
                    </span>
                </div>


            </div>

        </GradientBackgroundWrapper>
    )
}

export default Section5MultiLanguageSupport
