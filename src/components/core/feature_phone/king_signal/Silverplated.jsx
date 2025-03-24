function Silverplated() {
    const section1 = [
        "Silver-Plated Signal",
        "Enhancement Technology"
    ];

    const section2 = [
        "Our self-developed Silver-Plated Signal Enhancement",
        "Technology boosts signal strength and network speed for",
        "clearer calls and seamless connectivity"
    ];

    const sections3 = [
        "With enhanced antenna protection, enjoy stable",
        "communication anytime, anywhere—even in remote or",
        "congested areas"
    ];

    return (
        <>
            <div className="bg-[#041721] w-full h-auto flex relative px-[100px] pt-[49px] gap-[70px] items-start max-sm:flex-col max-sm:gap-[10px] max-sm:pt-[20px] max-sm:px-[20px] max-sm:min-h-[700px]">
                {/* First Div (Text Section) */}
                <div className="flex flex-col gap-[70px] max-sm:gap-[10px]" style={{ width: "518px" }}>
                    {/* Section 1 */}
                    <div>
                        {section1.map((line, i) => (
                            <p key={i} className="text-white text-[48px] font-bold leading-tight max-sm:text-[24px] text-left">
                                {line}
                            </p>
                        ))}
                    </div>

                    {/* Section 2 */}
                    <div>
                        {section2.map((line, i) => (
                            <p key={i} className="text-white text-[18px] max-sm:text-[14px] text-left">
                                {line}
                            </p>
                        ))}
                    </div>

                    {/* Section 3 (Hidden on mobile) */}
                    <div className="max-sm:hidden">
                        {sections3.map((line, i) => (
                            <p key={i} className="text-white text-[18px] text-left">
                                {line}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Second Div (Image Section) */}
                <div
                    className="relative max-sm:absolute"
                    style={{
                        width: "464px",
                        height: "620px",
                        left: "0px",
                        ...(window.innerWidth <= 640 && {
                            top: "239.6px",
                            left: "42.38px"
                        })
                    }}
                >
                    <img
                        src="/featurephone/king_signal/product/silver_plate.webp"
                        alt="Silver Plated Technology"
                        className="w-full h-full object-contain max-sm:h-[400px]"
                    />
                </div>
            </div>
        </>
    );
}

export default Silverplated;
