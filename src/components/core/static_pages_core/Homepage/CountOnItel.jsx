import React from 'react'
import { Link } from 'react-router-dom'

const CountOnItel = () => {

    const CardData = [
        { id: 1, link: '/support/100-days-service-promise', label: '100 Days Promise' },
        { id: 1, link: '/support/1-time-screen-replacement', label: 'One-Time Screen Replacement' },
        { id: 1, link: '/support/service-center-locator', label: 'Service Center' },
    ]

    return (
        <div className="lg:space-y-[60px] space-y-8 px-4 md:px-0">
            <div className={`relative content h-[328px] lg:h-[653px] rounded-3xl overflow-hidden`}>
                <div className="max-w-[577px] mx-auto absolute text-center bottom-[46px] left-1/2 -translate-x-1/2 w-full">
                    <h3 className='lg:text-desktop/h3 text-mobile/h5/medium mx-auto max-w-[290px] lg:max-w-[439px] w-full'>
                        Count on itel: You, Your Phone: Our Priority
                    </h3>
                    <p className="lg:text-desktop/body/1 text-desktop/overline mt-1 lg:mt-2 max-w-[290px] mx-auto lg:max-w-max">
                        At itel, we ensure top-notch quality through rigorous product testing. We're here to listen and help, ensuring you stay connected and worry-free.
                    </p>
                    <button className='uppercase flex items-center gap-2 rounded-[24px] bg-[#111111] py-[6px] lg:py-[14px] px-[14px] lg:px-6 mx-auto mt-5'>
                        <p className=" text-mobile/button lg:text-desktop/button">get support</p>
                        <img src="/static_page/homepage/Union.svg" alt="Arrow" className='size-5 lg:size-6' />
                    </button>
                </div>
                <video className="object-cover w-full h-full" autoPlay loop muted>
                    <source src="https://res.cloudinary.com/djwj42mic/video/upload/v1729069051/-5f0c-433d-81e1-ac57b0c1c32c_rirml6.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="max-w-[1110px] mx-auto flex lg:justify-between flex-col lg:flex-row gap-6 md:gap-8 lg:gap-0">


                {CardData.map((card) => (
                    <div key={card.id} className="flex text-white gap-3 flex-col">
                        <img src="/static_page/Hotstar.gif" alt="" className="w-[59px] h-[45px]" />
                        <div className="flex flex-col justify-center gap-3">
                            <p className="md:text-desktop/h4 text-mobile/h5/medium">{card.label}</p>
                            <Link to={card.link} className="md:text-desktop/button text-desktop/body/2/medium text-grey/grey/100 flex items-center gap-2">
                                READ MORE
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M18.6384 11.7304C18.2581 11.5825 18.0031 11.2174 18.0031 10.7664V10.6679C18.0031 10.0763 17.7591 9.82985 17.1747 9.82985H17.0774C16.4922 9.82985 16.0537 9.38615 16.0537 8.79458V8.696C16.0537 8.10443 15.8097 7.85798 15.2245 7.85798H15.1272C14.5427 7.85798 14.1035 7.41429 14.1035 6.82281V6.72414C14.1035 6.13266 14.5427 5.68896 15.1272 5.68896H15.2245C15.8097 5.68896 16.2482 6.13266 16.2482 6.72414V6.82281C16.2482 7.41429 16.4922 7.66083 17.0774 7.66083H17.1747C17.7591 7.66083 18.1984 8.10443 18.1984 8.696V8.79458C18.1984 9.38615 18.4416 9.63259 19.0268 9.63259H19.1241C19.7093 9.63259 20.1478 10.0763 20.1478 10.6679V10.7664C20.1478 11.3087 20.4404 11.703 21.0249 11.703H21.0736C21.5851 11.703 22 12.1224 22 12.6396V12.7383C22 13.2555 21.5851 13.6749 21.0736 13.6749H21.0249C20.4404 13.6749 20.1478 14.0692 20.1478 14.6115V14.7101C20.1478 15.3016 19.7093 15.7453 19.1241 15.7453H19.0268C18.4416 15.7453 18.1984 15.9918 18.1984 16.5834V16.6819C18.1984 17.2735 17.7591 17.7171 17.1747 17.7171H17.0774C16.4922 17.7171 16.2482 17.9636 16.2482 18.5551V18.6538C16.2482 19.2453 15.8097 19.689 15.2245 19.689H15.1272C14.5427 19.689 14.1035 19.2453 14.1035 18.6538V18.5551C14.1035 17.9636 14.5427 17.5199 15.1272 17.5199H15.2245C15.8097 17.5199 16.0537 17.2735 16.0537 16.6819V16.5834C16.0537 15.9918 16.4922 15.5481 17.0774 15.5481H17.1747C17.7591 15.5481 18.0031 15.3016 18.0031 14.7101V14.6115C18.0031 14.1512 18.2684 13.7806 18.662 13.6387H2.9434C2.42232 13.6387 2 13.2114 2 12.6845C2 12.1576 2.42232 11.7304 2.9434 11.7304H18.6384Z" fill="#FF0037" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CountOnItel