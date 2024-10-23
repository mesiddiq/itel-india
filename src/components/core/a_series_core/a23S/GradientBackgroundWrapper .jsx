/* eslint-disable react/prop-types */
const GradientBackgroundWrapper = ({ 
    children, 
    bgImage, 
    mobileBgImage, 
    paddingStart = '88px', 
    padding = '15px', 
    borderRadius = '56px',
    backgroundSize = 'cover',
    backgroundPosition = 'center',
    overflow = 'hidden',
    mobileBackgroundSize = 'cover',
    mobileBackgroundPosition = 'center',
    mobileOverflow = 'hidden',
    mobilePadding = '15px'
}) => {
    return (
        <div className={`md:rounded-[${borderRadius}] border-[#00000033] rounded-[16px]`}>
            {/* Desktop view */}
            <div
                className={`bg-white lg:block hidden md:rounded-[${borderRadius}] border-[#00000033] border-2 rounded-[16px] pb-0 ps-2`}
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: backgroundSize,
                    backgroundPosition: backgroundPosition,
                    overflow: overflow,
                    paddingLeft: paddingStart,
                    paddingRight: padding,
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {children}
            </div>

            {/* Mobile view */}
            <div
                className={`bg-white lg:hidden md:rounded-[56px] rounded-[16px] border-[#00000033] border-2 pb-0 ps-2 block`}
                style={{
                    backgroundImage: `url(${mobileBgImage})`,
                    backgroundSize: mobileBackgroundSize,
                    backgroundPosition: mobileBackgroundPosition,
                    overflow: mobileOverflow,
                    padding: mobilePadding,
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default GradientBackgroundWrapper;
