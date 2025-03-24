function King_signal_section1() {
    const section1 = [
        "Seamless",
        "Connectivity, even for",
        "the busiest streets."
    ];
    const subsection1 = [
        "Never lose signal, even in packed markets, busy streets",
        "or crowded stadiums - just strong, reliable connectivity,",
        "anytime, anywhere."
    ];
    const section2 = [
        "Signal connectivity",
        "that reaches the",
        "unreachable."
    ];
    const subsection2 = [
        "Stay connected even in high-altitude mountains and",
        "towering high-rises, where most signals fade."
    ];
    const section3 = [
        "Even underground,",
        "your connection",
        "stays strong"
    ];
    const subsection3 = [
        "Make and receive calls effortlessly in low-network zones",
        "like basements, metro stations, tunnels, or parking lots."
    ];

    const smallsection1 = [
        "*Signal strength also depends on the operator's network."
    ]

    const smallsection2 = [
        "*Signal strength also depends on the operator's network."
    ]

    const smallsection3 = [
        "*Signal strength also depends on the operator's network."
    ]

    return (
        <>
            <div
                className="relative w-full bg-gradient-to-r overflow-hidden px-[80px] pt-[120px] pb-[30px] flex flex-col gap-[20px] 
                max-sm:px-0 max-sm:pt-[63px] max-sm:gap-[20px]"
                style={{ backgroundImage: "linear-gradient(to right, #061F40, #073421)" }}
            >
                {/* section 1 */}
                <div className="w-full relative">
                    <div
                        className="pt-[calc(100%*var(--aspect-ratio))] sm:block hidden"
                        style={{ '--aspect-ratio': '0.5' }}
                    ></div>

                    <div className="sm:hidden block">
                        <img src="/featurephone/king_signal/product/seamless_mob.webp" alt="seamless mobile" className="w-full h-auto object-cover" />
                    </div>

                    {/* Desktop Background */}
                    <div className="absolute inset-0 bg-[url('/featurephone/king_signal/product/seamless_connectivity.webp')] bg-center bg-contain bg-no-repeat sm:block hidden"></div>

                    {/* Text */}
                    <div className="absolute inset-0 flex flex-col justify-center pl-[80px] text-white 
                    max-sm:pl-0 max-sm:items-center max-sm:justify-start max-sm:pt-4 max-sm:text-center">
                        <div className="space-y-2">
                            {section1.map((line, i) => (
                                <p key={i} className="font-medium text-[48px] leading-[120%] tracking-[-0.02em] max-sm:text-[24px] max-sm:leading-[1.2]">{line}</p>
                            ))}
                        </div>
                        <div className="space-y-1 mt-[20px]">
                            {subsection1.map((line, i) => (
                                <p key={i} className="text-[16px] max-sm:text-[14px]">{line}</p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* section 2 */}
                <div className="w-full relative">
                    <div
                        className="pt-[calc(100%*var(--aspect-ratio))] sm:block hidden"
                        style={{ '--aspect-ratio': '0.5' }}
                    ></div>

                    <div className="sm:hidden block">
                        <img src="/featurephone/king_signal/product/signal_mob.webp" alt="signal mobile" className="w-full h-auto object-cover" />
                    </div>

                    {/* Desktop Background */}
                    <div className="absolute inset-0 bg-[url('/featurephone/king_signal/product/signal_connectivity.webp')] bg-center bg-contain bg-no-repeat sm:block hidden"></div>

                    {/* Text */}
                    <div className="absolute top-[218.5px] left-[701px] w-[448px] h-[240px] flex flex-col justify-center items-start text-white gap-[20px]">

                        <div className="space-y-2 text-left w-full">
                            {section2.map((line, i) => (
                                <p key={i} className="font-medium text-[48px] leading-[120%] tracking-[-0.02em]">{line}</p>
                            ))}
                        </div>

                        <div className="space-y-1 text-left w-full">
                            {subsection2.map((line, i) => (
                                <p key={i} className="text-[16px]">{line}</p>
                            ))}
                        </div>

                    </div>




                </div>

                {/* section 3 */}
                <div className="w-full relative">
                    <div
                        className="pt-[calc(100%*var(--aspect-ratio))] sm:block hidden"
                        style={{ '--aspect-ratio': '0.5' }}
                    ></div>

                    <div className="sm:hidden block">
                        <img src="/featurephone/king_signal/product/even_mob.webp" alt="even underground mobile" className="w-full h-auto object-cover" />
                    </div>

                    {/* Desktop Background */}
                    <div className="absolute inset-0 bg-[url('/featurephone/king_signal/product/even_underground.webp')] bg-center bg-contain bg-no-repeat sm:block hidden"></div>

                    {/* Text */}
                    <div className="absolute inset-0 flex flex-col justify-center pl-[80px] text-white 
                    max-sm:pl-0 max-sm:items-center max-sm:justify-start max-sm:pt-4 max-sm:text-center">
                        <div className="space-y-2">
                            {section3.map((line, i) => (
                                <p key={i} className="font-medium text-[48px] leading-[120%] tracking-[-0.02em] max-sm:text-[24px] max-sm:leading-[1.2]">{line}</p>
                            ))}
                        </div>
                        <div className="space-y-1 mt-[20px]">
                            {subsection3.map((line, i) => (
                                <p key={i} className="text-[16px] max-sm:text-[14px]">{line}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default King_signal_section1;
