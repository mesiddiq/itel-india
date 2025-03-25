function Type_C() {
    return (
        <>
            <section className="bg-[rgb(4,23,33)] py-12 lg:py-[100px]">
                <div className="h-[580px] relative lg:h-[693px] lg:p-20 p-6 content rounded-xl lg:rounded-3xl bg-king-signal-dark flex lg:items-center">
                    <div className="max-w-[440px] lg:space-y-8 space-y-6 ">
                        <h3 className="text-bg/primary/1 lg:text-[48px] font-medium lg:leading-[57px] lg:tracking-[-0.96px] ">
                            Type-C Charging Onboard
                        </h3>
                        <p className="text-white/70 lg:text-[16px] font-medium lg:leading-[22px] text-desktop/body/2/regular">
                            With Type-C charging support, experience universal compatibility—just one reversible, fast, and efficient solution for all your charging and data transfer needs
                        </p>
                        <div className="p-2 lg:p-[9px_18px] w-fit bg-white/10 rounded-xl flex items-center gap-[10px]">
                            <img src="/featurephone/king_signal/icons/battery.svg" alt="" />
                            <h3 className="text-grey/grey/1 lg:text-[24px] text-[18px] leading-4 font-medium">33 Days</h3>
                            <p className="text-xs font-normal leading-4 text-grey/grey/1">Standby with  <br />
                                Super Battery Mode</p>
                        </div>
                    </div>
                    <img src="/featurephone/king_signal/product/type_c.webp" alt="Type c king singal" className="absolute lg:max-w-[625px] max-w-[300px] bottom-0 lg:right-20 " />
                </div>
            </section>
        </>
    );
}

export default Type_C;
