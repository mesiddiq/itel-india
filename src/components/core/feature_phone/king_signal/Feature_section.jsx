function Feature_Section() {
    return (
        <>
            <div
                className="relative w-full bg-[#041721] bg-no-repeat bg-center bg-cover"
                style={{
                    height: '720px',
                    backgroundImage: "url('/featurephone/king_signal/product/feature_section.png')"
                }}
            >
                {/* Desktop Layout */}
                <div
                    className="absolute hidden md:flex justify-between text-white"
                    style={{
                        width: '1200px',
                        height: '116px',
                        top: '533px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderRadius: '24px',
                        padding: '20px',
                        background: 'linear-gradient(to bottom, #061F40, #073421)'
                    }}
                >
                    {/* left section with opacity */}
                    <div
                        className="flex items-center backdrop-blur-sm"
                        style={{
                            width: '532.18px',
                            height: '76px',
                            gap: '20px',
                            padding: '9px 18px',
                            borderRadius: '12px',
                            background: 'linear-gradient(to bottom, #061F40, #073421)',
                            opacity: 0.9
                        }}
                    >
                        {/* both text blocks in same background */}
                        <div className="flex items-center gap-[20px] w-full rounded-[12px] py-[8px]"
                            style={{
                                background: "rgba(255, 255, 255, 0.1)"
                            }}
                        >
                            {/* First text */}
                            <div
                                className="text-[#05FE04]"
                                style={{
                                    fontWeight: 700,
                                    fontSize: '48px',
                                    lineHeight: '120%',
                                    letterSpacing: '-2%',
                                }}
                            >
                                -40 C to 70 C
                            </div>

                            {/* Second text block */}
                            <div className="flex flex-col">
                                <div
                                    style={{
                                        fontFamily: 'Mark OT',
                                        fontWeight: 400,
                                        fontSize: '18px',
                                        lineHeight: '130%',
                                        letterSpacing: '-1%',
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    Extreme Weather
                                </div>
                                <div
                                    style={{
                                        fontFamily: 'Mark OT',
                                        fontWeight: 400,
                                        fontSize: '18px',
                                        lineHeight: '130%',
                                        letterSpacing: '-1%',
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    Resistance Tested
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right section */}
                    <div
                        style={{
                            width: '399.41px',
                            height: '66px',
                        }}
                    >
                        <p
                            style={{
                                fontWeight: 500,
                                fontSize: '18px',
                                lineHeight: '120%',
                                letterSpacing: '-2%',
                            }}
                        >
                            From the icy mountain peaks to the blazing summer heat, King Signal is built to last, no matter where your journey takes you.
                        </p>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div
                    className="absolute flex flex-col md:hidden text-white items-center gap-[20px]"
                    style={{
                        width: 'calc(100% - 48px)',
                        top: 'calc(533px - 80px)',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderRadius: '20px',
                        padding: '16px',
                        background: 'linear-gradient(to bottom, #061F40, #073421)',
                        opacity: 0.9
                    }}
                >
                    {/* -40 C to 70 C */}
                    <div
                        className="text-[#05FE04]"
                        style={{
                            fontWeight: 700,
                            fontSize: '32px',
                            lineHeight: '120%',
                            letterSpacing: '-2%',
                        }}
                    >
                        -40 C to 70 C
                    </div>

                    {/* Extreme Weather Resistance */}
                    <div className="flex flex-col items-center">
                        <div
                            style={{
                                fontFamily: 'Mark OT',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '130%',
                                letterSpacing: '-1%',
                                textTransform: 'capitalize'
                            }}
                        >
                            Extreme Weather
                        </div>
                        <div
                            style={{
                                fontFamily: 'Mark OT',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '130%',
                                letterSpacing: '-1%',
                                textTransform: 'capitalize'
                            }}
                        >
                            Resistance Tested
                        </div>
                    </div>

                    {/* Description */}
                    <p
                        style={{
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '120%',
                            letterSpacing: '-2%',
                            textAlign: 'center'
                        }}
                    >
                        From the icy mountain peaks to the blazing summer heat, King Signal is built to last, no matter where your journey takes you.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Feature_Section;
