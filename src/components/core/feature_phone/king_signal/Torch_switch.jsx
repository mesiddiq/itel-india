function Touch_switch() {
    const sections1 = [
        "Brighten up your world",
        "instantly with torch switch"
    ];
    const sections2 = [
        "No more fumbling in the dark! With the One-toggle switch",
        "Torch Button, instantly turn on the flashlight without",
        "unlocking your phone. Always ready when you need it!"
    ];

    const phonesection1 = [
        "Brighten up your world",
        "instantly with torch",
        "switch."
    ];

    const phonesection2 = [
        "No more fumbling in the dark! With the",
        "One-toggle switch Torch Button, instantly",
        "turn on the flashlight without unlocking your",
        "phone. Always ready when you need it!"
    ];

    return (
        <>
            {/* Desktop Layout */}
            <div
                className="relative w-full min-h-screen items-start justify-start bg-[#041721] hidden md:flex"
                style={{
                    backgroundImage: "url('/featurephone/king_signal/product/Torch_Background.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}
            >
                <div
                    className="flex flex-col gap-[22px] text-white absolute top-[256px] left-[120px]"
                    style={{ width: '570px', height: '207px' }}
                >
                    {/* Section 1 */}
                    <div className="flex flex-col" style={{ width: '601px', height: '116px' }}>
                        {sections1.map((text, index) => (
                            <p
                                key={index}
                                className="font-medium text-[48px] leading-[120%] tracking-[-0.04em]"
                            >
                                {text}
                            </p>
                        ))}
                    </div>

                    {/* Section 2 */}
                    <div className="flex flex-col" style={{ width: '480px', height: '69px' }}>
                        {sections2.map((text, index) => (
                            <p
                                key={index}
                                className="font-normal text-[16px] leading-[142%] tracking-normal"
                            >
                                {text}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div
                className="relative w-full min-h-screen flex md:hidden flex-col gap-[24px] text-white px-[24px] pt-[40px]"
                style={{
                    backgroundImage: "url('/featurephone/king_signal/product/Torch_Phone_Screen.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}
            >
                {/* Phone Section 1 */}
                <div className="flex flex-col gap-[8px]" style={{ width: '312px', height: '183px' }}>
                    {phonesection1.map((text, index) => (
                        <p
                            key={index}
                            className="font-medium text-[24px] leading-[130%] tracking-[-0.01em]"
                        >
                            {text}
                        </p>
                    ))}
                </div>

                {/* Phone Section 2 */}
                <div className="flex flex-col gap-[4px]">
                    {phonesection2.map((text, index) => (
                        <p
                            key={index}
                            className="font-normal text-[14px] leading-[140%] tracking-[-0.02em]"
                        >
                            {text}
                        </p>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Touch_switch;
