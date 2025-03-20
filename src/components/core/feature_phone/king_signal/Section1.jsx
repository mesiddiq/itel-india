function King_signal_section1() {
    const section1 = [
        "Seamless",
        "Connectivity, even for",
        "the busiest streets."
    ];
    const section2 = [
        "Signal connectivity",
        "that reaches the",
        "unreachable."
    ];
    const section3 = [
        "Even underground,",
        "your connection",
        "stays strong"
    ];

    return (
        <>
            <div
                className="relative w-full bg-gradient-to-r overflow-hidden px-[80px] pt-[120px] pb-[30px] flex flex-col gap-[30px] 
                max-sm:px-0 max-sm:pt-[63px] max-sm:gap-[60px]"
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
                    <div className="absolute inset-0 flex flex-col justify-center pl-[80px] text-white space-y-2 
                    max-sm:pl-0 max-sm:items-center max-sm:justify-start max-sm:pt-4 max-sm:text-center">
                        {section1.map((line, i) => (
                            <p key={i} className="text-[48px] font-bold max-sm:text-[24px]">{line}</p>
                        ))}
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
                    <div className="absolute inset-0 flex flex-col justify-center pr-[80px] text-white space-y-2 items-end text-right 
                    max-sm:pr-0 max-sm:items-center max-sm:justify-start max-sm:pt-4 max-sm:text-center max-sm:text-white">
                        {section2.map((line, i) => (
                            <p key={i} className="text-[48px] font-bold max-sm:text-[24px]">{line}</p>
                        ))}
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
                    <div className="absolute inset-0 flex flex-col justify-center pl-[80px] text-white space-y-2 
                    max-sm:pl-0 max-sm:items-center max-sm:justify-start max-sm:pt-4 max-sm:text-center">
                        {section3.map((line, i) => (
                            <p key={i} className="text-[48px] font-bold max-sm:text-[24px]">{line}</p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default King_signal_section1;
