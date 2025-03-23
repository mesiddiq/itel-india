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

    return (
        <>
            <div className="h-screen flex items-start justify-start gap-[22px]" style={{ backgroundColor: '#041721', padding: '50px' }}>
                <div
                    style={{
                        width: '570px',
                        height: '207px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '22px',
                        position: 'relative'
                    }}
                >
                    {/* First div (sections1) */}
                    <div
                        className="flex flex-col text-white"
                        style={{ width: '601px', height: '116px' }}
                    >
                        {sections1.map((text, index) => (
                            <p
                                key={index}
                                className="font-medium text-[48px] leading-[120%] tracking-[-0.04em]"
                            >
                                {text}
                            </p>
                        ))}
                    </div>

                    {/* Second div (sections2) */}
                    <div
                        className="flex flex-col text-white"
                        style={{ width: '480px', height: '69px' }}
                    >
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
        </>
    );
}

export default Touch_switch;
