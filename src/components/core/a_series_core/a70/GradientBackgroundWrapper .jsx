/* eslint-disable react/prop-types */

const GradientBackgroundWrapper = ({ children, bgImage, mobileBgImage, paddingStart = '88px',padding="15px",borderRadius="56px" }) => {
    return (
        <div
            style={{
                background: 'linear-gradient(to right, #08E488, #00C6FF)',
                padding: '1px',
                overflow:'hidden',
                // borderRadius:borderRadius
                
            }}
                className={`md:rounded-[${borderRadius}] rounded-[16px] p-5 `}
        >
            <div
                className={`bg-white  lg:block hidden  md:rounded-[${borderRadius}] rounded-[16px]  pb-0 ps-2 `}
                style={{
                    backgroundImage: `url(${bgImage || '/public/a70/AmpleStorageBG.webp'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    overflow:'hidden',
                    paddingLeft:paddingStart,
                    paddingRight:padding,
                    
                    
                }}
            >
                {children}
            </div>
            <div
                className={`bg-white lg:hidden  md:rounded-[56px] rounded-[16px]  pb-0 ps-2 block `}
                style={{
                    backgroundImage: `url(${mobileBgImage || '/public/a70/Background/AmpleStorageBG.webp'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    overflow:'hidden',
                    padding:padding,
                                        
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default GradientBackgroundWrapper;
