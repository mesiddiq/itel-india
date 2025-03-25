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
        <>
            <section className="lg:h-[720px] h-[620px] bg-[url('/featurephone/king_signal/product/tough_sleek.webp')] bg-cover relative bg-right-top -mt-1">
                <div className="content h-full flex items-center justify-end">
                    <div className="max-w-[580px] space-y-[10px] lg:space-y-[20px]">
                        <h3 className="text-bg/primary/1 lg:text-[48px] font-medium lg:leading-[57px] lg:tracking-[-0.96px] ">
                            Tough, Sleek, and Stylish—Inspired by military-grade toughness.
                        </h3>
                        <p className="text-white/70 lg:text-[16px] font-medium lg:leading-[22px] text-desktop/body/2/regular max-w-[440px]">
                        Engineered for a secure grip, the rugged, durable yet sleek finish ensures fewer slips and better handling, making your phone feel as tough as it looks. <br /><br />Inspired by military-grade durability, the Kevlar-textured design isn’t just about looks—it’s built for grip, resilience, and everyday toughness.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Tough_sleek;
