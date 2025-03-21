function Tough_sleek() {
    const section1 = [
        "Tough, Sleek, and Stylish",
        "-Inspired by military-",
        "grade toughness"
    ];

    const section2 = [
        "Engineered for a secure grip, the rugged, durable yet sleek finish ensures",
        "fewer slips and better handling, making your phone feel as tough as it",
        "looks."
    ];

    const section3 = [
        "Inspired by military-grade durability, the Kevlar-textured design isn't just",
        "about looks - it's built for grip, resilience, and everyday toughness"
    ];

    const mob_section2 = [
        "Engineered for a secure grip, the rugged",
        "durable yet sleek finish ensures fewer slips and",
        "better handling, making your phone feel as to..."
    ];

    return (
        <div
            className="w-full bg-no-repeat bg-cover bg-bottom-right flex relative"
            style={{
                backgroundColor: '#041721',
                backgroundImage: "url('/featurephone/king_signal/product/tough_sleek.webp')",
                backgroundPosition: 'bottom right',
                height: '600px'
            }}
        >
            {/* Desktop Layout */}
            <div
                className="absolute flex-col gap-[22px] hidden md:flex"
                style={{
                    top: '50%',
                    left: '55%',
                    transform: 'translateY(-50%)'
                }}
            >
                {/* Section 1 */}
                <div className="flex flex-col">
                    {section1.map((text, idx) => (
                        <p key={idx} style={{ fontSize: '48px', color: 'white', lineHeight: '1.2' }}>
                            {text}
                        </p>
                    ))}
                </div>

                {/* Section 2 */}
                <div className="flex flex-col">
                    {section2.map((text, idx) => (
                        <p key={idx} style={{ fontSize: '16px', color: 'white', lineHeight: '1.5' }}>
                            {text}
                        </p>
                    ))}
                </div>

                {/* Section 3 */}
                <div className="flex flex-col">
                    {section3.map((text, idx) => (
                        <p key={idx} style={{ fontSize: '16px', color: 'white', lineHeight: '1.5' }}>
                            {text}
                        </p>
                    ))}
                </div>
            </div>

            {/* Mobile Layout */}
            <div
                className="absolute flex flex-col md:hidden"
                style={{
                    width: '309px',
                    top: '48px',
                    left: '24px',
                    gap: '24px'
                }}
            >
                {/* Section 1 */}
                <div className="flex flex-col">
                    {section1.map((text, idx) => (
                        <p key={idx} style={{ fontSize: '24px', color: 'white', lineHeight: '1.2' }}>
                            {text}
                        </p>
                    ))}
                </div>

                {/* Mobile Section 2 */}
                <div className="flex flex-col">
                    {mob_section2.map((text, idx) => (
                        <p key={idx} style={{ fontSize: '14px', color: 'white', lineHeight: '1.5' }}>
                            {text}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tough_sleek;
