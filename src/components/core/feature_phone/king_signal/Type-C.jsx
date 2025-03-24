function Type_C() {
    const section1 = [
        "Type-C Charging",
        "Onboard"
    ];
    const section2 = [
        "With Type-C charging support, experience universal",
        "compatibility - just one reversible, fast, and efficient",
        "solution for all your charging and data transfer needs"
    ];

    return (
        <>
            <div className="bg-[#041721] p-[100px] w-full h-auto flex items-center justify-center sm:p-[30px]">
                {/* Desktop Layout */}
                <div
                    className="hidden sm:hidden md:flex"
                    style={{
                        width: '1240px',
                        height: '693px',
                        borderRadius: '48px',
                        background: 'linear-gradient(90deg, #061F40 0%, #073421 100%)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* Left Text Section */}
                    <div
                        style={{
                            width: '437px',
                            height: '312px',
                            top: '182.5px',
                            left: '80px',
                            gap: '22px'
                        }}
                        className="absolute flex flex-col"
                    >
                        <div className="flex flex-col text-white">
                            {section1.map((text, index) => (
                                <p
                                    key={index}
                                    className="font-medium text-[48px] leading-[120%] tracking-[-0.04em]"
                                >
                                    {text}
                                </p>
                            ))}
                        </div>

                        <div className="flex flex-col text-white">
                            {section2.map((text, index) => (
                                <p
                                    key={index}
                                    className="font-normal text-[16px] leading-[160%] tracking-normal"
                                >
                                    {text}
                                </p>
                            ))}
                        </div>

                        <div
                            className="w-[316px] h-[54px] flex justify-center items-center rounded-[12px] text-white gap-[10px]"
                            style={{
                                background: 'rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            <img
                                src="/featurephone/king_signal/product/Frame.png"
                                alt="icon"
                                width={32}
                                height={32}
                            />
                            <div
                                style={{
                                    fontWeight: 500,
                                    fontSize: '24px',
                                    lineHeight: '130%',
                                    letterSpacing: '-1%',
                                }}
                            >
                                33 days
                            </div>
                            <div className="flex flex-col">
                                <div
                                    style={{
                                        fontWeight: 400,
                                        fontSize: '14px',
                                        lineHeight: '130%',
                                        letterSpacing: '-1%',
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    Standby With
                                </div>
                                <div
                                    style={{
                                        fontWeight: 400,
                                        fontSize: '14px',
                                        lineHeight: '130%',
                                        letterSpacing: '-1%',
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    Super Battery Mode
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '64.44px',
                            left: '523px'
                        }}
                    >
                        <img
                            src="/featurephone/king_signal/product/type_c.webp"
                            alt="Type-C"
                            style={{
                                height: '628.56px',
                                width: 'auto'
                            }}
                        />
                    </div>
                </div>

                {/* Mobile Layout */}
                <div
                    className="flex-col w-full bg-gradient-to-r from-[#061F40] to-[#073421] rounded-[24px] p-6 gap-6 sm:flex md:hidden"
                >
                    {/* Text */}
                    <div className="flex flex-col items-center text-white gap-3">
                        {section1.map((text, index) => (
                            <p
                                key={index}
                                className="font-medium text-[32px] leading-[120%] tracking-[-0.04em] text-center"
                            >
                                {text}
                            </p>
                        ))}
                        {section2.map((text, index) => (
                            <p
                                key={index}
                                className="font-normal text-[14px] leading-[160%] tracking-normal text-center"
                            >
                                {text}
                            </p>
                        ))}
                        <div
                            className="w-[250px] h-[50px] flex justify-center items-center rounded-[12px] text-white gap-[10px] mt-4"
                            style={{
                                background: 'rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            <img
                                src="/featurephone/king_signal/product/Frame.png"
                                alt="icon"
                                width={28}
                                height={28}
                            />
                            <div className="text-[20px] font-medium">33 days</div>
                            <div className="flex flex-col text-[12px] font-normal">
                                <div>Standby With</div>
                                <div>Super Battery Mode</div>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src="/featurephone/king_signal/product/type_c.webp"
                            alt="Type-C"
                            className="h-[300px] w-auto"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Type_C;
