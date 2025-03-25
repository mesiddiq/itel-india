function Stay_connected() {
    const section1 = ["Store More, Stay Connected"];
    const sections2 = [
        "Managing your connections is easier than ever, keep all your important",
        "contacts and message in one place, hassle-free"
    ];
    const mob_section2 = [
        "Managing your connections is easier than",
        "ever. keep all your important contacts and",
        "message in one place, hassle-free!"
    ];

    return (
        <>
            <section className="py-12 lg:py-[100px] bg-[#041721]">
                <div className="content lg:h-[693px] lg:py-20 rounded-3xl lg:rounded-[48px] bg-king-signal-dark flex flex-col items-center lg:gap-10 justify-between">
                    <div className="space-y-6 items-center flex-col flex text-center">
                        <div className="space-y-[10px] lg:space-y-5 flex flex-col items-center">
                            <h3 className="text-bg/primary/1 lg:text-[48px] font-medium lg:leading-[57px] lg:tracking-[-0.96px] ">
                                Store More, Stay Connected
                            </h3>
                            <p className="text-white/70 lg:text-[16px] font-medium lg:leading-[22px] text-desktop/body/2/regular max-w-[562px] ">
                                Managing your connections is easier than ever.  Keep all your important contacts and messages in one place, hassle-free!
                            </p>
                        </div>
                        <div className="flex items-center gap-3 lg:gap-6">
                            <div className="p-2 lg:p-[9px_18px] w-fit bg-white/10 rounded-xl lg:rounded-3xl flex gap-[10px]">
                                <img src="/featurephone/king_signal/icons/phone.svg" alt="icon" />
                                <div className="flex gap-0.5 lg:gap-[10px] flex-col lg:flex-row items-center ">
                                    <h3 className="text-grey/grey/1 lg:text-[36px] text-[18px] leading-6 lg:leading-[46px] font-medium">2000</h3>
                                    <p className="lg:text-[26px] font-normal leading-4 text-grey/grey/1 capitalize text-nowrap">Phone Book with contact icons</p>
                                </div>
                            </div>
                            <div className="p-2 lg:p-[9px_18px] w-fit bg-white/10 rounded-xl lg:rounded-3xl flex items-center gap-[10px]">
                                <img src="/featurephone/king_signal/icons/message.svg" alt="icon" />
                                <div className="flex gap-0.5 lg:gap-[10px] items-center flex-col lg:flex-row">
                                    <h3 className="text-grey/grey/1 lg:text-[36px] text-[18px] leading-6 lg:leading-[46px] font-medium">500</h3>
                                    <p className="lg:text-[26px] lg:leading-[26px] font-normal leading-4 text-grey/grey/1 capitalize">Messages</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="/featurephone/king_signal/product/phone_icons.webp" alt="Phone icons" className="" />
                </div>
            </section>
        </>
    );
}

export default Stay_connected;

