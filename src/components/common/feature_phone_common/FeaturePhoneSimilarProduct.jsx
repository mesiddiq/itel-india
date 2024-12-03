import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function FeaturePhoneSimilarProduct({ theme = 'light' }) {
    const isLightTheme = theme === 'light';

    const products = [
        {
            name: 'it5027',
            price: '1,099.00',
            image: '/featurephone/it5027/Backgrounds/it5027.webp',
            link: '/product/it5027'
        },
        {
            name: 'it5330',
            price: '1,499.00',
            image: '/featurephone/it5330/Backgrounds/techspecs.webp',
            link: '/product/it5330'
        },
        {
            name: 'Circle 1',
            price: '1,499.00',
            image: '/featurephone/Circle_1/Backgrounds/circle+1.webp',
            link: '/product/circle-1'
        },
        {
            name: 'Power 120',
            price: '1,249.00',
            image: '/featurephone/Power_120/Backgrounds/Power+120.webp',
            link: '/product/power-120'
        },
    ];

    return (
        <section className={`flex font-markot flex-col items-center px-4 md:px-0 lg:pb-[120px] ${isLightTheme ? 'bg-white' : 'bg-neutral-900'}`}>
            {/* <div className="flex flex-col justify-center items-center py-10 w-full"> */}
            <div className="flex flex-col content lg:gap-9 gap-6">
                <h2 className={`text-mobile/h4 md:text-desktop/h3 ${isLightTheme ? 'text-black' : 'text-white'} `}>
                    Similar Products
                </h2>
                <div className="grid lg:grid-cols-4 grid-cols-2 place-items-center lg:gap-5 gap-x-3 gap-y-5">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className={`lg:h-[452px] h-[200px] w-[156px] lg:max-w-[302px] md:w-full bg-bg/primary/1 lg:rounded-[16px] rounded-[8px] p-3 lg:p-[56px_30px_40px_30px]`}
                        >
                            <div className="flex justify-center mb-4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="object-contain max-h-[100px] lg:max-h-[200px]"
                                />
                            </div>
                            <div className="flex flex-col mt-4 lg:mt-11">
                                <div className="flex flex-col items-center whitespace-nowrap">
                                    <h3 className={`${isLightTheme ? 'text-black' : 'text-zinc-100'} text-mobile/h6 lg:text-desktop/h4`}>
                                        {product.name}
                                    </h3>
                                    <div className="flex gap-2 items-center lg:mt-3 mt-1">
                                        <p className={`lg:text-desktop/h6/medium font-bold text-[10px] leading-4 text-dark/card/bg `}>
                                            {product.price}
                                        </p>
                                    </div>
                                </div>
                                <Link to={product.link}>
                                    <button
                                        className={`flex gap-3 justify-center items-center mt-1 lg:mt-4 w-full text-mobile/small/button md:text-desktop/button text-center uppercase ${isLightTheme ? 'text-black' : 'text-stone-100'
                                            }`}
                                    >
                                        <span className="flex overflow-hidden gap-2 items-center">
                                            <span>Buy Now</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" className="size-3 lg:size-6" viewBox="0 0 24 25" fill="none">
                                                <path d="M18.1384 11.9477C17.7581 11.7998 17.5031 11.4347 17.5031 10.9837V10.8851C17.5031 10.2936 17.2591 10.0471 16.6747 10.0471H16.5774C15.9922 10.0471 15.5537 9.60343 15.5537 9.01186V8.91328C15.5537 8.32172 15.3097 8.07527 14.7245 8.07527H14.6272C14.0427 8.07527 13.6035 7.63157 13.6035 7.0401V6.94142C13.6035 6.34995 14.0427 5.90625 14.6272 5.90625H14.7245C15.3097 5.90625 15.7482 6.34995 15.7482 6.94142V7.0401C15.7482 7.63157 15.9922 7.87811 16.5774 7.87811H16.6747C17.2591 7.87811 17.6984 8.32172 17.6984 8.91328V9.01186C17.6984 9.60343 17.9416 9.84988 18.5268 9.84988H18.6241C19.2093 9.84988 19.6478 10.2936 19.6478 10.8851V10.9837C19.6478 11.526 19.9404 11.9203 20.5249 11.9203H20.5736C21.0851 11.9203 21.5 12.3397 21.5 12.8569V12.9556C21.5 13.4728 21.0851 13.8922 20.5736 13.8922H20.5249C19.9404 13.8922 19.6478 14.2865 19.6478 14.8288V14.9274C19.6478 15.5189 19.2093 15.9626 18.6241 15.9626H18.5268C17.9416 15.9626 17.6984 16.2091 17.6984 16.8006V16.8992C17.6984 17.4908 17.2591 17.9344 16.6747 17.9344H16.5774C15.9922 17.9344 15.7482 18.1809 15.7482 18.7724V18.8711C15.7482 19.4626 15.3097 19.9062 14.7245 19.9062H14.6272C14.0427 19.9062 13.6035 19.4626 13.6035 18.8711V18.7724C13.6035 18.1809 14.0427 17.7372 14.6272 17.7372H14.7245C15.3097 17.7372 15.5537 17.4908 15.5537 16.8992V16.8006C15.5537 16.2091 15.9922 15.7654 16.5774 15.7654H16.6747C17.2591 15.7654 17.5031 15.5189 17.5031 14.9274V14.8288C17.5031 14.3685 17.7684 13.9978 18.162 13.8559H2.4434C1.92232 13.8559 1.5 13.4287 1.5 12.9018C1.5 12.3749 1.92232 11.9477 2.4434 11.9477H18.1384Z" fill="#FF0037" />
                                            </svg>
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* </div> */}
        </section>
    );
}

export default FeaturePhoneSimilarProduct;
