function Type_C() {
    const section1 = [
        "Type-C Charging",
        "Onboard"
    ];
    const section2 = [
        "With Type-C charging support, experience universal",
        "compatibility - just one reversible, fast, and efficient",
        "solution for all your charging and data transfer needs"
    ];

    return (
        <>
            <div className="bg-[#041721] p-[100px] w-full h-auto flex items-center justify-center">
                <div
                    style={{
                        width: '1240px',
                        height: '693px',
                        borderRadius: '48px',
                        background: 'linear-gradient(90deg, #061F40 0%, #073421 100%)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                    className="flex"
                >
                    {/* Left Text Section */}
                    <div
                        style={{
                            width: '437px',
                            height: '312px',
                            top: '182.5px',
                            left: '80px',
                            gap: '22px'
                        }}
                        className="absolute flex flex-col"
                    >
                        {/* Section 1 */}
                        <div className="flex flex-col text-white">
                            {section1.map((text, index) => (
                                <p
                                    key={index}
                                    className="font-medium text-[48px] leading-[120%] tracking-[-0.04em]"
                                >
                                    {text}
                                </p>
                            ))}
                        </div>

                        {/* Section 2 */}
                        <div className="flex flex-col text-white">
                            {section2.map((text, index) => (
                                <p
                                    key={index}
                                    className="font-normal text-[16px] leading-[160%] tracking-normal"
                                >
                                    {text}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '64.44px',
                            left: '523px'
                        }}
                    >
                        <img
                            src="/featurephone/king_signal/product/type_c.webp"
                            alt="Type-C"
                            style={{
                                height: '628.56px',
                                width: 'auto'
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Type_C;
