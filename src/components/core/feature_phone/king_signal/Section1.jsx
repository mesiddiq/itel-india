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
                className="relative w-full bg-gradient-to-r overflow-hidden px-[80px] pt-[120px] pb-[30px] flex flex-col gap-[30px]"
                style={{ backgroundImage: "linear-gradient(to right, #061F40, #073421)" }}
            >
                {/* section 1 */}
                <div
                    className="w-full bg-no-repeat bg-contain bg-center relative"
                    style={{ backgroundImage: "url('/featurephone/king_signal/product/seamless_connectivity.webp')" }}
                >
                    <div className="pt-[calc(100%*var(--aspect-ratio))]" style={{ '--aspect-ratio': '0.5' }}></div>
                    <div className="absolute inset-0 flex flex-col justify-center pl-[80px] text-white space-y-2">
                        {section1.map((line, i) => (
                            <p key={i} className="text-3xl font-bold">{line}</p>
                        ))}
                    </div>
                </div>

                {/* section 2 */}
                <div
                    className="w-full bg-no-repeat bg-contain bg-center relative"
                    style={{ backgroundImage: "url('/featurephone/king_signal/product/signal_connectivity.webp')" }}
                >
                    <div className="pt-[calc(100%*var(--aspect-ratio))]" style={{ '--aspect-ratio': '0.5' }}></div>
                    <div className="absolute inset-0 flex flex-col justify-center pr-[80px] text-white space-y-2 items-end text-right">
                        {section2.map((line, i) => (
                            <p key={i} className="text-3xl font-bold">{line}</p>
                        ))}
                    </div>
                </div>

                {/* section 3 */}
                <div
                    className="w-full bg-no-repeat bg-contain bg-center relative"
                    style={{ backgroundImage: "url('/featurephone/king_signal/product/even_underground.webp')" }}
                >
                    <div className="pt-[calc(100%*var(--aspect-ratio))]" style={{ '--aspect-ratio': '0.5' }}></div>
                    <div className="absolute inset-0 flex flex-col justify-center pl-[80px] text-white space-y-2">
                        {section3.map((line, i) => (
                            <p key={i} className="text-3xl font-bold">{line}</p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
export default King_signal_section1;
