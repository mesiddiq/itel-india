function Feature_Section() {
    return (
        <>
            <div
                className="relative w-full bg-[#041721] bg-no-repeat bg-center bg-cover"
                style={{
                    height: '720px',
                    backgroundImage: "url('/featurephone/king_signal/product/feature_section.png')"
                }}
            >
                <div
                    className="absolute flex justify-between text-white"
                    style={{
                        width: '1200px',
                        height: '116px',
                        top: '533px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderRadius: '24px',
                        padding: '20px',
                        background: 'linear-gradient(to bottom, #061F40, #073421)'
                    }}
                >
                    {/* Content goes here */}
                </div>
            </div>
        </>
    );
}

export default Feature_Section;
