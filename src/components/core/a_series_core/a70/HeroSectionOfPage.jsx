const HeroSectionOfPage = () => {
    const commonTextContent = (
        <div className="lg:gap-16 gap-4 flex flex-col justify-center px-4 pt-14 lg:pt-0 md:ps-[0px]">
            <div className="flex flex-col gap-4">
                <div className="border-2 flex items-center px-1 gap-2 font-bold border-[#3A3358] text-[#3A3358] text-center rounded-full max-w-[156px]">
                    <span>Awesome series</span>
                    <img src="/smartphone/a70/UpArrow.svg" alt="A70Badge" className="w-[12px] h-[12px]" />
                </div>
                <div>
                    <h3 className="text-mobile/h1 md:text-desktop/large/h py-4">A70</h3>
                    <p className="text-mobile/title md:text-desktop/title text-[#181818] uppercase">
                        12GB* (4GB+8GB*) RAM + 256GB ROM <br /> | Dynamic bar | 13MP AI Dual Rear Camera
                    </p>
                </div>
            </div>
            <p className="text-mobile/small/body md:text-desktop/h5/medium">
                Starting from <span className="text-mobile/h5 md:text-desktop/h5">₹6,299/-</span>
            </p>
        </div>
    );

    const renderSection = (bgImage, imgSize, imgSrc, containerClass) => (
        <div
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: imgSize,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className={containerClass}
        >
            <div className={containerClass.includes("md:hidden") ? "w-[360px] h-[480px] flex flex-col" : "md:h-[800px] flex flex-col lg:flex-row md:justify-between md:px-[88px] max-w-[1440px] mx-auto"}>
                {commonTextContent}
                <img src={imgSrc} alt="A70Banner" className={containerClass.includes("md:hidden") ? "h-[480px] w-[289px] m-auto" : "h-[1409px] w-[849px]"} />
            </div>
        </div>
    );

    return (
        <div>
            {/* Desktop View */}
            {renderSection('/smartphone/a70/A70Banner.webp', 'cover', '/smartphone/a70/HritikPhotoDashb.png', 'hidden md:block overflow-hidden')}
            
            {/* Mobile View */}
            {renderSection('/smartphone/a70/A70bannermobile.webp', 'contain', '/smartphone/a70/HritikPhotoDashb.png', 'md:hidden overflow-hidden')}
        </div>
    );
};

export default HeroSectionOfPage;
