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
            <section className="bg-king-signal-dark">
                <div className="content lg:py-[120px] py-12 space-y-3 lg:space-y-[30px]">
                    <div className="lg:h-[677px] p-6 lg:p-[80px] lg:rounded-3xl rounded-xl flex items-center bg-[url('/featurephone/king_signal/product/seamless_connectivity.webp')] bg-cover bg-center relative">
                        <div className="flex flex-col gap-3 lg:gap-5 max-w-[500px] ">
                            <h3 className="text-bg/primary/1 lg:text-[48px] font-medium lg:leading-[57px] lg:tracking-[-0.96px] ">
                                Seamless Connectivity, even for the busiest streets.
                            </h3>
                            <p className="text-white/70 lg:text-[16px] font-medium lg:leading-[22px] text-desktop/body/2/regular">
                                Never lose signal, even in packed markets, busy streets, or crowded stadiums—just strong, reliable connectivity, anytime, anywhere.
                            </p>
                        </div>
                        <span className="absolute w-full h-full text-white/50 lg:left-20 left-6 top-[90%]">*Signal strength also depends on the operator's network.</span>
                    </div>
                    <div className="lg:h-[677px] p-6 lg:p-[80px] lg:rounded-3xl rounded-xl flex items-center bg-[url('/featurephone/king_signal/product/signal_connectivity.webp')] bg-cover bg-center relative">
                        <div className="flex flex-col gap-3 lg:gap-5 translate-x-full max-w-[530px] ">
                            <h3 className="text-bg/primary/1 lg:text-[48px] font-medium lg:leading-[57px] lg:tracking-[-0.96px] ">
                                Seamless Connectivity, even for the busiest streets.
                            </h3>
                            <p className="text-white/70 lg:text-[16px] font-medium lg:leading-[22px] text-desktop/body/2/regular">
                                Never lose signal, even in packed markets, busy streets, or crowded stadiums—just strong, reliable connectivity, anytime, anywhere.
                            </p>
                        </div>
                        <span className="absolute w-full h-full text-white/50 lg:left-20 left-6 top-[90%]">*Signal strength also depends on the operator's network.</span>
                    </div>
                    <div className="lg:h-[677px] p-6 lg:p-[80px] lg:rounded-3xl rounded-xl flex items-center bg-[url('/featurephone/king_signal/product/even_underground.webp')] bg-cover bg-center relative">
                        <div className="flex flex-col gap-3 lg:gap-5 max-w-[500px] ">
                            <h3 className="text-bg/primary/1 lg:text-[48px] font-medium lg:leading-[57px] lg:tracking-[-0.96px] ">
                                Even underground, your connection stays strong.
                            </h3>
                            <p className="text-white/70 lg:text-[16px] font-medium lg:leading-[22px] text-desktop/body/2/regular">
                                Make and receive calls effortlessly in low-network zones like basements, metro stations, tunnels, or parking lots.
                            </p>
                        </div>
                        <span className="absolute w-full h-full text-white/50 lg:left-20 left-6 top-[90%]">*Signal strength also depends on the operator's network.</span>
                    </div>
                </div>
            </section>
        </>
    );
}

export default King_signal_section1;
