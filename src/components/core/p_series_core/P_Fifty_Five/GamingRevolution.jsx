const GamingRevolution = () => {
return (
    <>
        <div style={{ 
            backgroundImage: 'url(/smartphone/P55/gamingRevolution.png)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
        }}
        className="hidden md:block w-full h-screen">
            <div className="content relative">
                <div className="absolute top-40 font-markot  flex flex-col justify-center items-start gap-[19px] max-w-[500px]">
                    <h1 className="text-desktop/h2 text-[#D4DDF0]">Gaming Revolution: Unleash Supercharged Gameplay</h1>
                    <h2 className="text-white text-base font-normal leading-[22.72px] text-left max-w-[400px]">Discover unparalleled performance with cutting-edge display and processing power. Dominate every battle with lightning-fast responsiveness.</h2>
                </div>
            </div>
        </div>
        

        <div style={{ 
            backgroundImage: 'url(/smartphone/P55/gamingRevolutionMobile.png)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'right', 
        }}
        className="md:hidden w-full h-[500px] border border-itel-red flex flex-col justify-start pt-10 items-center">
            
                <div className="font-markot flex flex-col justify-center items-center text-center gap-[19px]">
                    <h1 className="text-mobile/h4 text-[#D4DDF0] max-w-[310px]">Gaming Revolution: Unleash Supercharged Gameplay</h1>
                    <h2 className="text-white text-mobile/body/2 max-w-[277px]">Discover unparalleled performance with cutting-edge display and processing power. Dominate every battle with lightning-fast responsiveness.</h2>
                </div>

        </div>
    </>
    )
}

export default GamingRevolution