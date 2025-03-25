function Feature_Section() {
    return (
        <>
            <div className="lg:h-[720px] h-[790px] bg-[url('/featurephone/king_signal/product/feature_section.webp')] bg-cover bg-center relative">
                <div className="content h-full flex items-end px-4 md:px-0">
                    <div className="lg:p-5 p-4 bg-king-signal-dark mb-20 rounded-[12px] lg:rounded-[24px] flex justify-between items-center flex-col-reverse gap-4 lg:flex-row w-full ">
                        <div className="p-[8px_16px] lg:p-[9px_18px] rounded-[12px] lg:rounded-[24px] bg-white/10 flex flex-col lg:items-center lg:w-fit w-full lg:flex-row gap-[10px] lg:gap-[20px]">
                            <h4 className="lg:text-king-signal text-grey/grey/1 lg:text-[48px] text-[24px] font-medium lg:font-bold font-markot ">
                                -40&deg;C to 70&deg;C
                            </h4>
                            <p className="text-[14px] leading-5 lg:leading-6 text-grey/grey/1 lg:text-[24px]">
                                Extreme Weather <br className="hidden lg:block" /> Resistance Tested</p>
                        </div>
                        <p className="text-grey/grey/1 lg:text-[18px] lg:leading-6 leading-5 text-[14px] max-w-[400px] ">
                            From the icy mountain peaks to the blazing summer heat, King Signal is built to last, no matter where your journey takes you.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Feature_Section;
