function Signal_performance() {
    return (
        <>
            {/* Desktop Background */}
            <div className="hidden md:flex w-full h-screen bg-cover bg-center relative justify-center items-center text-white"
                style={{ backgroundImage: "url('/featurephone/king_signal/product/signal_performance.png')" }}
            >
                <div className="flex flex-col justify-center items-center gap-[8px] h-[167px] w-[579px]">
                    <div className="font-medium text-[48px] leading-[130%] tracking-[-0.01em] uppercase text-center">
                        SIGNAL
                    </div>
                    <div className="font-medium text-[48px] leading-[130%] tracking-[-0.01em] uppercase text-center">
                        PERFORMANCE
                    </div>
                    <div className="font-medium text-[16px] leading-[130%] tracking-[-0.01em] uppercase text-center">
                        IN FEATURE PHONES
                    </div>
                </div>
            </div>

            {/* Mobile Background */}
            {/* Mobile Background */}
            <div className="flex md:hidden w-full h-screen bg-cover bg-center relative text-white bg-[url('/featurephone/king_signal/product/Signal_Performance_Phone.png')]">
                <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-[8px] h-[130px] w-[312px]">
                    <div className="font-medium text-[24px] leading-[130%] tracking-[-0.01em] uppercase text-center">
                        SIGNAL
                    </div>
                    <div className="font-medium text-[24px] leading-[130%] tracking-[-0.01em] uppercase text-center">
                        PERFORMANCE
                    </div>
                    <div className="font-medium text-[14px] leading-[130%] tracking-[-0.01em] uppercase text-center">
                        IN FEATURE PHONES
                    </div>
                </div>
            </div>

        </>
    );
}

export default Signal_performance;
