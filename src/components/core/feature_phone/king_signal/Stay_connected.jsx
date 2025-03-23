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
            <div className="p-[100px] h-auto bg-[#041721] flex flex-col justify-center items-center md:p-[100px] md:h-auto">
                {/* DESKTOP VIEW */}
                <div
                    className="hidden md:flex rounded-[48px] relative"
                    style={{
                        width: "1240px",
                        height: "693px",
                        background: "linear-gradient(90deg, #061F40 0%, #073421 100%)"
                    }}
                >
                    {/* text div */}
                    <div
                        className="absolute flex flex-col justify-center items-center text-center"
                        style={{
                            width: "788px",
                            height: "215px",
                            top: "70px",
                            left: "226px",
                            gap: "24px"
                        }}
                    >
                        <div>
                            {section1.map((line, i) => (
                                <p key={i} className="text-white text-[48px] font-bold leading-tight">{line}</p>
                            ))}
                        </div>

                        <div>
                            {sections2.map((line, i) => (
                                <p key={i} className="text-white text-[16px] leading-normal">{line}</p>
                            ))}
                        </div>

                        <div className="flex gap-[24px]">
                            <div
                                className="flex items-center justify-center text-white rounded-[12px]"
                                style={{
                                    width: "298px",
                                    height: "65px",
                                    gap: "4px",
                                    background: "rgba(255, 255, 255, 0.1)"
                                }}
                            >
                                <p className="text-[36px] font-bold leading-tight">2000</p>
                                <p className="text-[20px] leading-tight">Phone Book</p>
                            </div>

                            <div
                                className="flex items-center justify-center text-white rounded-[12px]"
                                style={{
                                    width: "256px",
                                    height: "65px",
                                    gap: "4px",
                                    background: "rgba(255, 255, 255, 0.1)"
                                }}
                            >
                                <p className="text-[36px] font-bold leading-tight">500</p>
                                <p className="text-[20px] leading-tight">Messages</p>
                            </div>
                        </div>
                    </div>

                    {/* image div */}
                    <div
                        className="absolute"
                        style={{
                            top: "344px",
                            left: "243.27px",
                            height: "289.13px"
                        }}
                    >
                        <img
                            src="/featurephone/king_signal/product/stay_connected.webp"
                            alt="Stay Connected"
                            className="h-full w-auto object-contain"
                        />
                    </div>
                </div>

                {/* MOBILE VIEW */}
                <div
                    className="flex flex-col gap-[12px] p-[48px_16px] md:hidden relative rounded-[24px]"
                    style={{
                        width: "359px",
                        height: "576px",
                        background: "linear-gradient(90deg, #061F40 0%, #073421 100%)"
                    }}
                >
                    {/* Text */}
                    <div
                        className="absolute flex flex-col text-center"
                        style={{
                            width: "281px",
                            height: "213px",
                            top: "24px",
                            left: "24.5px",
                            gap: "24px"
                        }}
                    >
                        <div>
                            {section1.map((line, i) => (
                                <p key={i} className="text-white text-[28px] font-bold leading-tight">
                                    {line}
                                </p>
                            ))}
                        </div>
                        <div>
                            {mob_section2.map((line, i) => (
                                <p key={i} className="text-white text-[14px] leading-normal">
                                    {line}
                                </p>
                            ))}
                        </div>
                        <div className="flex gap-[16px] justify-center">
                            <div
                                className="flex items-center justify-center text-white rounded-[12px]"
                                style={{
                                    width: "140px",
                                    height: "50px",
                                    background: "rgba(255, 255, 255, 0.1)"
                                }}
                            >
                                <p className="text-[24px] font-bold leading-tight">2000</p>
                                <p className="text-[14px] leading-tight ml-[4px]">Phone Book</p>
                            </div>
                            <div
                                className="flex items-center justify-center text-white rounded-[12px]"
                                style={{
                                    width: "120px",
                                    height: "50px",
                                    background: "rgba(255, 255, 255, 0.1)"
                                }}
                            >
                                <p className="text-[24px] font-bold leading-tight">500</p>
                                <p className="text-[14px] leading-tight ml-[4px]">Messages</p>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div
                        className="absolute"
                        style={{
                            width: "auto",
                            height: "129px",
                            top: "285px",
                            left: "8.5px"
                        }}
                    >
                        <img
                            src="/featurephone/king_signal/product/stay_connected.webp"
                            alt="Stay Connected"
                            className="h-full w-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Stay_connected;

