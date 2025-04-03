const HeroSectionOfA23SPage = () => {
    const commonTextContent = (
        <div className="lg:gap-16 gap-4 flex flex-col justify-center pt-12 lg:pt-0 ">
            <div className="flex flex-col gap-4">
                <div className="border-2  flex items-center bg-[#F8F6F3] px-[6px] py-[3px] gap-2 font-bold border-[#3A3358] text-[#3A3358] text-center rounded-full max-w-[156px]">
                    <span className="uppercase text-[14px]">Awesome series</span>
                    <img src="/smartphone/A23s/UpArrow.svg" alt="A23sBadge" className="w-[12px] h-[12px]" />
                </div>
                <div className="w-[330px] md:w-[528px] pe-6">
                    <h3 className="text-mobile/h1 md:text-desktop/large/h py-4">A23S</h3>
                    <p className="text-mobile/title md:text-desktop/title text-[#181818] uppercase ">
                        4GB*(2GB+2GB*) RAM + 32GB ROM | Smart Face Unlock | 3020 mAh battery
                    </p>
                </div>
            </div>
     

            <p className="text-[20px] font-normal leading-[24px] tracking-[0.01em]">
                Available at  <span className="text-mobile/h5 md:text-desktop/h5">₹4,799/-</span>
            </p>
            
        </div>
    );

    return (
        <div>
            {/* Desktop View */}
            <div
                style={{
                    backgroundImage: `url('/smartphone/A23s/Backgrounds/A23S-Hero.webp')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                }}
                className="hidden md:block overflow-hidden"
            >
                <div className="md:h-[800px] flex flex-col lg:flex-row md:justify-between md:px-[88px] max-w-[1440px] mx-auto">
                    {commonTextContent}
                    <div className="flex items-end pb-[44px] justify-center">
                        <img src="/smartphone/A23s/DesktopImg.png" alt="A23Banner" className="lg:w-[527.08px] md:h-[410px] lg:h-[680px]" />

                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div
                style={{
                    backgroundImage: `url('/smartphone/A23s/Backgrounds/A23sbannermobile.webp')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                }}
                className="md:hidden overflow-hidden"
            >
                <div className="w-[360px] h-[521px] flex flex-col">
                    {commonTextContent}
                    <div className="flex items-end  justify-end">
                    <img src="/smartphone/A23s/mobImga23.png" alt="A23Banner" className="h-[270px] pb-[22px] mx-auto w-[209px]" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSectionOfA23SPage;
