function King_signal_section1() {
    const sections = [
        {
            title: ["Seamless", "Connectivity, even for", "the busiest streets."],
            subtitle: [
                "Never lose signal, even in packed markets, busy streets",
                "or crowded stadiums - just strong, reliable connectivity,",
                "anytime, anywhere."
            ],
            desktopBg: "/featurephone/king_signal/product/seamless_connectivity.webp",
            mobileImg: "/featurephone/king_signal/product/seamless_mob.webp"
        },
        {
            title: ["Signal connectivity", "that reaches the", "unreachable."],
            subtitle: [
                "Stay connected even in high-altitude mountains and",
                "towering high-rises, where most signals fade."
            ],
            desktopBg: "/featurephone/king_signal/product/signal_connectivity.webp",
            mobileImg: "/featurephone/king_signal/product/signal_mob.webp"
        },
        {
            title: ["Even underground,", "your connection", "stays strong"],
            subtitle: [
                "Make and receive calls effortlessly in low-network zones",
                "like basements, metro stations, tunnels, or parking lots."
            ],
            desktopBg: "/featurephone/king_signal/product/even_underground.webp",
            mobileImg: "/featurephone/king_signal/product/even_mob.webp"
        }
    ];

    return (
        <>
            <div
                className="relative w-full bg-gradient-to-r overflow-hidden px-[80px] pt-[120px] pb-[30px] flex flex-col gap-[20px] 
                max-sm:px-0 max-sm:pt-[63px] max-sm:gap-[20px]"
                style={{ backgroundImage: "linear-gradient(to right, #061F40, #073421)" }}
            >
                {sections.map((section, idx) => (
                    <div key={idx} className="w-full relative">
                        {/* Maintain aspect ratio for desktop */}
                        <div
                            className="pt-[calc(100%*var(--aspect-ratio))] sm:block hidden"
                            style={{ '--aspect-ratio': '0.5' }}
                        ></div>

                        {/* Mobile Image */}
                        <div className="sm:hidden block">
                            <img src={section.mobileImg} alt={`section ${idx + 1} mobile`} className="w-full h-auto object-cover" />
                        </div>

                        {/* Desktop Background */}
                        <div
                            className="absolute inset-0 bg-center bg-contain bg-no-repeat sm:block hidden"
                            style={{ backgroundImage: `url('${section.desktopBg}')` }}
                        ></div>

                        {/* Text */}
                        {/* Desktop Text */}
                        <div
                            className={`absolute ${idx === 1
                                    ? "top-[218.5px] left-[701px] w-[448px] h-[240px] hidden sm:flex"
                                    : "inset-0 hidden sm:flex pl-[80px] justify-center"
                                } flex-col text-white gap-[20px]`}
                        >
                            <div className="space-y-2 text-left w-full">
                                {section.title.map((line, i) => (
                                    <p key={i} className="font-medium text-[48px] leading-[120%] tracking-[-0.02em]">{line}</p>
                                ))}
                            </div>
                            <div className="space-y-1 text-left w-full">
                                {section.subtitle.map((line, i) => (
                                    <p key={i} className="text-[16px]">{line}</p>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Text */}
                        <div className="sm:hidden absolute inset-0 flex flex-col justify-start items-center pt-4 text-white text-center">
                            <div className="space-y-2">
                                {section.title.map((line, i) => (
                                    <p key={i} className="font-medium text-[24px] leading-[120%] tracking-[-0.02em]">{line}</p>
                                ))}
                            </div>
                            <div className="space-y-1 mt-[10px]">
                                {section.subtitle.map((line, i) => (
                                    <p key={i} className="text-[14px]">{line}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default King_signal_section1;
