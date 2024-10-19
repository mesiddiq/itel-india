const HeroSectionOfPage = () => {
    const commonTextContent = (
        <div className="lg:gap-16 gap-4 flex flex-col justify-center px-4 pt-14 lg:pt-0 md:ps-[88px]">
            <div className="flex flex-col gap-4">
                <div className="border-2 flex items-center px-1 gap-2 font-bold border-[#3A3358] text-[#3A3358] text-center rounded-full max-w-[156px]">
                    <span>Awesome series</span>
                    <img src="/smartphone/a70/UpArrow.svg" alt="A70Badge" className="w-[12px] h-[12px]" />
                </div>
                <div>
                    <h1 className="text-mobile/h1 md:text-desktop/large/h py-4">A70</h1>
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

    return (
        <div>
            {/* Desktop View */}
            <div
                style={{
                    backgroundImage: `url('/a70/A70Banner.webp')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className="hidden md:block overflow-hidden"
            >
                <div className="md:h-[800px] h-[521px] flex flex-col lg:flex-row md:justify-between">
                    {commonTextContent}
                    <img src="/a70/HritikPhotoDashb.png" alt="A70Banner" className="h-[1409px] w-[849px]" />
                </div>
            </div>

            {/* Mobile View */}
            <div
                style={{
                    backgroundImage: `url('/a70/A70bannermobile.webp')`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className="md:hidden overflow-hidden"
            >
                <div className="w-[360px] h-[480px] flex flex-col">
                    {commonTextContent}
                    <img src="/a70/HritikPhotoDashb.png" alt="A70Banner" className="h-[480px] w-[289px] m-auto " />
                </div>
            </div>
        </div>
    );
};

export default HeroSectionOfPage;
