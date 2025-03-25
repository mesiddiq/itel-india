function Signal_performance() {
    return (
        <>
            <div className="h-[580px] lg:h-[720px] bg-[#041721] relative  overflow-hidden flex items-center justify-center">
                <div className="content flex lg:items-center relative justify-center lg:justify-between  h-full pt-12 lg:pt-0">
                    <img src="/featurephone/king_signal/product/signal_itel.png" alt="Signal Itel" className="absolute lg:static bottom-0 max-w-[190px] left-0 lg:max-w-max -translate-x-10 " />
                    <p className="lg:text-[14px] absolute -bottom-20 right-0 lg:leading-4 text-xs text-bg/primary/1/70">
                        *Signal strength also depends on the operator's network
                    </p>
                    <div className="lg:-[427px] space-y-5 lg:space-y-10 flex items-center flex-col text-center">
                        <img src="/featurephone/king_signal/product/signal1.png" alt="Number 1" className="max-w-[131px] lg:max-w-max" />
                        <div className="">
                            <h3 className="uppercase text-[20px] lg:text-[48px] leading-6 lg:leading-[62px] text-grey/grey/1">signal <br /> performance</h3>
                            <p className="text-[10px] lg:text-[24px] lg:leading-8 uppercase text-grey/grey/1 leading-4">in feature phone</p>
                        </div>
                    </div>
                    <img src="/featurephone/king_signal/product/signal_other.png" alt="Signal Other" className="absolute lg:static bottom-0 right-0 max-w-[190px] lg:max-w-max translate-x-10 " />
                    {/* <img src="/featurephone/king_signal/product/signal_other.png" alt="Signal Other" /> */}
                </div>
            </div>
        </>
    );
}

export default Signal_performance;
