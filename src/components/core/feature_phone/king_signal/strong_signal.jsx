function Strong_Signal() {
    const section1 = [
        "Super strong signal with",
        "Signal Enhancement",
        "Technology"
    ];
    const section2 = [
        "Super strong signal with Signal",
        "Enhancement Technology"
    ];
    const section3 = [
        "No more signal struggles-just seamless, uninterrupted",
        "communication! Stay connected wherever you can go with",
        "advance Signal Enhancement Technology"
    ];
    const section_3_mob = [
        "No more signal struggles-just seamless,",
        "uninterrupted communication! Stay connected",
        "wherever you can go with advance Signal",
        "Enhancement Technology"
    ];

    return (
        <>
            <div className="w-full relative" style={{
                background: 'linear-gradient(to right, #073421, #061F40, #073421)'
            }}>
                {/* Desktop Layout */}
                <div className="hidden md:flex relative h-[700px]">
                    {/* Image */}
                    <div className="absolute bottom-0 left-[93px]">
                        <img
                            src="/featurephone/king_signal/product/strong_signal.webp"
                            alt="Strong Signal"
                            className="w-auto h-auto max-w-[500px]"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="flex flex-col text-white ml-[773px] justify-center h-full">
                        <div className="flex flex-col gap-[40px]">
                            <div>
                                {section1.map((line, idx) => (
                                    <p key={idx} className="text-[48px] font-semibold leading-tight">{line}</p>
                                ))}
                            </div>
                            <div>
                                {section2.map((line, idx) => (
                                    <p key={idx} className="text-[24px] font-medium leading-snug">{line}</p>
                                ))}
                            </div>
                            <div>
                                {section3.map((line, idx) => (
                                    <p key={idx} className="text-[18px] leading-relaxed">{line}</p>
                                ))}
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="flex flex-col gap-[24px] mt-[40px]">
                            <div className="rounded-[24px] h-[65px] flex items-center gap-[10px] px-[18px] py-[9px] w-[395px]" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                                <p className="text-[20px] font-medium">510% Longer Call Duration*</p>
                            </div>
                            <div className="rounded-[24px] h-[65px] flex items-center gap-[10px] px-[18px] py-[9px] w-[523px]" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                                <p className="text-[20px] font-medium">61.98% Better Average Network Speed</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="flex flex-col md:hidden text-white px-[24px] pt-[48px] gap-[24px]">
                    {/* Text */}
                    <div className="flex flex-col gap-[24px]" style={{ width: '100%' }}>
                        <div>
                            {section1.map((line, idx) => (
                                <p key={idx} className="text-[24px] font-semibold leading-tight">{line}</p>
                            ))}
                        </div>
                        {/* Removed section 2 for mobile */}
                        <div>
                            {section_3_mob.map((line, idx) => (
                                <p key={idx} className="text-[14px] leading-relaxed">{line}</p>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="flex flex-col gap-[16px] mt-[24px]">
                            <div className="rounded-[16px] h-[50px] flex items-center gap-[10px] px-[14px] py-[7px] w-fit" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                                <p className="text-[12px] font-medium whitespace-nowrap">510% Longer Call Duration*</p>
                            </div>
                            <div className="rounded-[16px] h-[50px] flex items-center gap-[10px] px-[14px] py-[7px] w-fit" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                                <p className="text-[12px] font-medium whitespace-nowrap">61.98% Better Average Network Speed</p>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="mt-[24px] flex justify-center">
                        <img
                            src="/featurephone/king_signal/product/strong_signal.webp"
                            alt="Strong Signal"
                            className="w-[282px] h-[329px] object-contain"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Strong_Signal;


