import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AccessoriesData, PhoneData, TvData, SupportData } from '../data/NavbarData'

const ArrowSvg = ({ isActive }) => {
    return (
        isActive ?
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8.46737 7.11222C8.0648 7.11222 7.86351 7.38061 7.86351 7.74963L7.86351 7.81673C7.86351 8.21931 7.56157 8.52124 7.159 8.52124L7.0919 8.52124C6.68933 8.52124 6.52159 8.68898 6.52159 9.09155L6.52159 9.15865C6.52159 9.56123 6.21965 9.86316 5.81708 9.86316L5.74998 9.86316C5.34741 9.86316 5.17967 10.0309 5.17967 10.4335L5.17967 10.5006C5.17967 10.9031 4.87773 11.2051 4.47516 11.2051L4.40806 11.2051C4.00548 11.2051 3.70355 10.9031 3.70355 10.5006L3.70355 10.4335C3.70355 10.0309 4.00548 9.72897 4.40806 9.72897L4.47516 9.72897C4.87773 9.72897 5.04547 9.56123 5.04547 9.15865L5.04547 9.09155C5.04547 8.68898 5.34741 8.38704 5.74998 8.38704L5.81708 8.38704C6.21965 8.38704 6.38739 8.21931 6.38739 7.81673L6.38739 7.74963C6.38739 7.34706 6.68933 7.04512 7.0919 7.04512L7.159 7.04512C7.52803 7.04512 7.79641 6.84384 7.79641 6.44126L7.79641 6.40771C7.79641 6.05568 8.08179 5.7703 8.43382 5.7703L8.50092 5.7703C8.85295 5.7703 9.13833 6.05568 9.13833 6.40771L9.13833 6.44126C9.13833 6.84384 9.40672 7.04512 9.77574 7.04512L9.84284 7.04512C10.2454 7.04512 10.5473 7.34706 10.5473 7.74963L10.5473 7.81673C10.5473 8.21931 10.7151 8.38704 11.1177 8.38704L11.1848 8.38704C11.5873 8.38705 11.8893 8.68898 11.8893 9.09155L11.8893 9.15865C11.8893 9.56123 12.057 9.72897 12.4596 9.72897L12.5267 9.72897C12.9293 9.72897 13.2312 10.0309 13.2312 10.4335L13.2312 10.5006C13.2312 10.9031 12.9293 11.2051 12.5267 11.2051L12.4596 11.2051C12.057 11.2051 11.7551 10.9031 11.7551 10.5006L11.7551 10.4335C11.7551 10.0309 11.5873 9.86316 11.1848 9.86316L11.1177 9.86316C10.7151 9.86316 10.4132 9.56123 10.4132 9.15865L10.4132 9.09155C10.4132 8.68898 10.2454 8.52124 9.84284 8.52124L9.77574 8.52124C9.37317 8.52124 9.07124 8.21931 9.07124 7.81673L9.07124 7.74963C9.07124 7.38061 8.86995 7.11222 8.46737 7.11222Z" fill="#FF0037" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8.46738 9.86336C8.86996 9.86336 9.07125 9.59498 9.07125 9.22595L9.07125 9.15886C9.07125 8.75628 9.37318 8.45435 9.77575 8.45435L9.84285 8.45435C10.2454 8.45435 10.4132 8.28661 10.4132 7.88403L10.4132 7.81694C10.4132 7.41436 10.7151 7.11243 11.1177 7.11243L11.1848 7.11243C11.5873 7.11243 11.7551 6.94469 11.7551 6.54211L11.7551 6.47502C11.7551 6.07244 12.057 5.77051 12.4596 5.77051L12.5267 5.77051C12.9293 5.77051 13.2312 6.07244 13.2312 6.47502L13.2312 6.54211C13.2312 6.94469 12.9293 7.24662 12.5267 7.24662L12.4596 7.24662C12.057 7.24662 11.8893 7.41436 11.8893 7.81694L11.8893 7.88403C11.8893 8.28661 11.5873 8.58854 11.1848 8.58854L11.1177 8.58854C10.7151 8.58854 10.5474 8.75628 10.5474 9.15886L10.5474 9.22595C10.5474 9.62853 10.2454 9.93046 9.84285 9.93046L9.77575 9.93046C9.40673 9.93046 9.13834 10.1317 9.13834 10.5343L9.13834 10.5679C9.13834 10.9199 8.85296 11.2053 8.50093 11.2053L8.43383 11.2053C8.0818 11.2053 7.79642 10.9199 7.79642 10.5679L7.79642 10.5343C7.79642 10.1317 7.52804 9.93046 7.15901 9.93046L7.09191 9.93046C6.68934 9.93046 6.3874 9.62853 6.3874 9.22595L6.3874 9.15886C6.3874 8.75628 6.21966 8.58854 5.81709 8.58854L5.74999 8.58854C5.34742 8.58854 5.04548 8.28661 5.04548 7.88403L5.04548 7.81694C5.04548 7.41436 4.87775 7.24662 4.47517 7.24662L4.40807 7.24662C4.0055 7.24662 3.70356 6.94469 3.70356 6.54211L3.70356 6.47502C3.70356 6.07244 4.0055 5.77051 4.40807 5.77051L4.47517 5.77051C4.87775 5.77051 5.17968 6.07244 5.17968 6.47502L5.17968 6.54211C5.17968 6.94469 5.34742 7.11243 5.74999 7.11243L5.81709 7.11243C6.21966 7.11243 6.5216 7.41436 6.5216 7.81694L6.5216 7.88403C6.5216 8.28661 6.68934 8.45435 7.09191 8.45435L7.15901 8.45435C7.56159 8.45435 7.86352 8.75628 7.86352 9.15886L7.86352 9.22595C7.86352 9.59498 8.06481 9.86336 8.46738 9.86336Z" fill="white" />
            </svg>
    )
}


const ArrowRight = ({ isActive }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className='min-w-4 max-w-4 max-h-4 min-h-4' viewBox="0 0 25 24" fill="none">
            <path d="M18.992 11.0415C18.6117 10.8935 18.3567 10.5284 18.3567 10.0775V9.9789C18.3567 9.38733 18.1127 9.14088 17.5283 9.14088H17.431C16.8458 9.14088 16.4072 8.69718 16.4072 8.10561V8.00703C16.4072 7.41547 16.1633 7.16902 15.5781 7.16902H15.4808C14.8963 7.16902 14.4571 6.72532 14.4571 6.13385V6.03517C14.4571 5.4437 14.8963 5 15.4808 5H15.5781C16.1633 5 16.6018 5.4437 16.6018 6.03517V6.13385C16.6018 6.72532 16.8458 6.97186 17.431 6.97186H17.5283C18.1127 6.97186 18.552 7.41547 18.552 8.00703V8.10561C18.552 8.69718 18.7952 8.94363 19.3804 8.94363H19.4777C20.0629 8.94363 20.5014 9.38733 20.5014 9.9789V10.0775C20.5014 10.6198 20.794 11.0141 21.3785 11.0141H21.4271C21.9386 11.0141 22.3536 11.4334 22.3536 11.9507V12.0493C22.3536 12.5666 21.9386 12.9859 21.4271 12.9859H21.3785C20.794 12.9859 20.5014 13.3802 20.5014 13.9225V14.0211C20.5014 14.6127 20.0629 15.0564 19.4777 15.0564H19.3804C18.7952 15.0564 18.552 15.3028 18.552 15.8944V15.993C18.552 16.5845 18.1127 17.0281 17.5283 17.0281H17.431C16.8458 17.0281 16.6018 17.2747 16.6018 17.8662V17.9648C16.6018 18.5563 16.1633 19 15.5781 19H15.4808C14.8963 19 14.4571 18.5563 14.4571 17.9648V17.8662C14.4571 17.2747 14.8963 16.831 15.4808 16.831H15.5781C16.1633 16.831 16.4072 16.5845 16.4072 15.993V15.8944C16.4072 15.3028 16.8458 14.8591 17.431 14.8591H17.5283C18.1127 14.8591 18.3567 14.6127 18.3567 14.0211V13.9225C18.3567 13.4622 18.622 13.0916 19.0156 12.9497H3.29697C2.77589 12.9497 2.35358 12.5225 2.35358 11.9956C2.35358 11.4687 2.77589 11.0415 3.29697 11.0415H18.992Z" fill={isActive ? "#FF0037" : "#fff"} />
        </svg>
    )
}

/**
 * @description
 * This component is used to render the navbar on mobile devices. It contains
 * a hamburger menu button that when clicked, toggles the visibility of the
 * navbar. The navbar contains a list of links to different pages on the website.
 * The component also handles the state of the navbar, keeping track of whether
 * it is visible or not.
 * @param {object} props - The component props.
 * @returns {JSX.Element} - The rendered navbar component.
 */
const NavbarMobile = () => {

    const [isNavActive, setIsNavActive] = useState(false)

    const [smartphoneActive, setSmartphoneActive] = useState(false)
    const [smartTvActive, setSmartTvActive] = useState(false)
    const [accessoriesActive, setAccessoriesActive] = useState(false)
    const [supportActive, setSupportActive] = useState(false)


    const handleNavbar = () => {
        setIsNavActive(prev => !prev)
        setSmartphoneActive(false)
        setSmartTvActive(false)
        setAccessoriesActive(false)
        setSupportActive(false)
    }

    const handleSmartPhone = () => {
        setSmartphoneActive(prev => !prev)
        setSmartTvActive(false)
        setAccessoriesActive(false)
        setSupportActive(false)
    }

    const handleSmartTv = () => {
        setSmartTvActive(prev => !prev)
        setSmartphoneActive(false)
        setAccessoriesActive(false)
        setSupportActive(false)
    }

    const handleAccessories = () => {
        setAccessoriesActive(prev => !prev)
        setSmartphoneActive(false)
        setSmartTvActive(false)
        setSupportActive(false)
    }

    const handleSupport = () => {
        setSupportActive(prev => !prev)
        setSmartphoneActive(false)
        setSmartTvActive(false)
        setAccessoriesActive(false)
    }

    function toggleNavActive(){
        setIsNavActive(false)
        setSmartphoneActive(false)
        setAccessoriesActive(false)
        setSupportActive(false)
        setSmartTvActive(false)
    }

    useEffect(() => {
        if (isNavActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isNavActive]);

    return (
        <>
            <nav className='p-4 bg-brand/black flex justify-between items-center font-markot z-[2000] lg:hidden'>
                <Link to={'/'} >
                    <img src="/static_page/homepage/itel.png" alt="Itel Logo" className="max-w-[51px] md:max-w-16 lg:hidden" />
                </Link>

                <button className="flex gap-4" onClick={handleNavbar} >
                    {
                        isNavActive ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6.34326 6.34473L17.657 17.6584" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.34303 17.6584L17.6567 6.34473" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4 18H20M4 6H20H4ZM4 12H20H4Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                    }
                </button>

            </nav>
            <div className={`${isNavActive ? 'top-16' : '-top-[5000px]'} transition-[top] navbarmobile duration-700 py-5 px-4 flex flex-col gap-5 bg-[#1f1f1f] font-markot max-h-screen h-screen fixed left-0 w-full z-[1000] overflow-y-scroll`}>

                {/***************************Smartphone Dropdown********************** */}

                <button className="flex items-center gap-0.5" onClick={handleSmartPhone}>
                    <span className="text-desktop/body/2/regular text-white">Smartphones</span>
                    <ArrowSvg />
                </button>

                {
                    smartphoneActive &&
                    <div className="pl-6 flex flex-col gap-5 text-white">
                        {
                            PhoneData.map(({ id, title }) => (
                                <Link to={'/products'} key={id}>
                                    <div className="flex items-center gap-2" onClick={toggleNavActive}>
                                        <span className="text-desktop/button uppercase">{id}</span>
                                        <ArrowRight />
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                }

                {/* ***************************Feature Phone********************** */}
                <Link to={'/featurephones'}>
                    <button className="flex items-center gap-0.5" onClick={toggleNavActive}>
                        <span className="text-desktop/body/2/regular text-white">Feature Phones</span>
                    </button>
                </Link>

                {/* ***************************TV Dropdown********************** */}

                <button className="flex items-center gap-0.5" onClick={handleSmartTv}>
                    <span className="text-desktop/body/2/regular text-white">Smart TVs</span>
                    <ArrowSvg />
                </button>

                {
                    smartTvActive &&
                    <div className="pl-6 flex flex-col gap-5 text-white">
                        {
                            TvData.map(({ id, title }) => (
                                <Link to={'/coming-soon'} key={id}>
                                    <div className="flex items-center gap-2" onClick={toggleNavActive}>
                                        <span className="text-desktop/button uppercase">{id}</span>
                                        <ArrowRight />
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                }

                {/* ***************************Accessories Dropdown********************** */}

                <button className="flex items-center gap-0.5" onClick={handleAccessories}>
                    <span className="text-desktop/body/2/regular text-white">Smart Gadgets</span>
                    <ArrowSvg />
                </button>

                {
                    accessoriesActive &&
                    <div className="pl-6 flex flex-col gap-5 text-white">
                        {
                            AccessoriesData.map(({ id, title }) => (
                                <Link to={'/coming-soon'} key={id} onClick={toggleNavActive}>
                                    <div className="flex items-center gap-2">
                                        <span className="text-desktop/button uppercase">{id}</span>
                                        <ArrowRight />
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                }

                {/* ***************************Home Care********************** */}
                <Link to={'/coming-soon'}>
                    <button className="flex items-center gap-0.5" onClick={toggleNavActive}>
                        <span className="text-desktop/body/2/regular text-white">Home Care</span>
                    </button>
                </Link>

                {/* ***************************Personal Care********************** */}

                <Link to={'/coming-soon'}>
                    <button className="flex items-center gap-0.5" onClick={toggleNavActive}>
                        <span className="text-desktop/body/2/regular text-white">Personal Care</span>
                    </button>
                </Link>

                {/* ***************************About Us********************** */}
                <Link to={'/about-us-itel-mobile-india'}>
                    <button className="flex items-center gap-0.5" onClick={toggleNavActive}>
                        <span className="text-desktop/body/2/regular text-white">About Us</span>
                    </button>
                </Link>

                {/* ***************************Support Dropdown********************** */}

                <button className="flex items-center gap-0.5" onClick={handleSupport}>
                    <span className="text-desktop/body/2/regular text-white">Support</span>
                    <ArrowSvg />
                </button>

                {
                    supportActive &&
                    <div className="pl-6 flex flex-col gap-5 text-white">
                        {
                            SupportData.map(({ id, label,path }) => (
                                <Link to={path} key={id}>
                                    <div className="flex items-center gap-2" onClick={toggleNavActive}>
                                        <span className="text-desktop/button uppercase">{label}</span>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                }

                <div className="mt-5 flex gap-2 text-white items-center font-markot">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M21.97 18.83C21.97 19.19 21.89 19.56 21.72 19.92C21.55 20.28 21.33 20.62 21.04 20.94C20.55 21.48 20.01 21.87 19.4 22.12C18.8 22.37 18.15 22.5 17.45 22.5C16.43 22.5 15.34 22.26 14.19 21.77C13.04 21.28 11.89 20.62 10.75 19.79C9.6 18.95 8.51 18.02 7.47 16.99C6.44 15.95 5.51 14.86 4.68 13.72C3.86 12.58 3.2 11.44 2.72 10.31C2.24 9.17 2 8.08 2 7.04C2 6.36 2.12 5.71 2.36 5.11C2.6 4.5 2.98 3.94 3.51 3.44C4.15 2.81 4.85 2.5 5.59 2.5C5.87 2.5 6.15 2.56 6.4 2.68C6.66 2.8 6.89 2.98 7.07 3.24L9.39 6.51C9.57 6.76 9.7 6.99 9.79 7.21C9.88 7.42 9.93 7.63 9.93 7.82C9.93 8.06 9.86 8.3 9.72 8.53C9.59 8.76 9.4 9 9.16 9.24L8.4 10.03C8.29 10.14 8.24 10.27 8.24 10.43C8.24 10.51 8.25 10.58 8.27 10.66C8.3 10.74 8.33 10.8 8.35 10.86C8.53 11.19 8.84 11.62 9.28 12.14C9.73 12.66 10.21 13.19 10.73 13.72C11.27 14.25 11.79 14.74 12.32 15.19C12.84 15.63 13.27 15.93 13.61 16.11C13.66 16.13 13.72 16.16 13.79 16.19C13.87 16.22 13.95 16.23 14.04 16.23C14.21 16.23 14.34 16.17 14.45 16.06L15.21 15.31C15.46 15.06 15.7 14.87 15.93 14.75C16.16 14.61 16.39 14.54 16.64 14.54C16.83 14.54 17.03 14.58 17.25 14.67C17.47 14.76 17.7 14.89 17.95 15.06L21.26 17.41C21.52 17.59 21.7 17.8 21.81 18.05C21.91 18.3 21.97 18.55 21.97 18.83Z" stroke="#FF073C" stroke-width="1.5" stroke-miterlimit="10" />
                    </svg>
                    <div className="">
                        <h1 className="text-desktop/overline">itel Customer Care</h1>
                        <a href="tel:1800-4190-525" className='text-desktop/caption'>1800-4190-525</a>
                    </div>
                </div>
                <p className='text-transparent'>.</p>
                <p className='text-transparent'>.</p>
                <p className='text-transparent'>.</p>
                <p className='text-transparent'>.</p>
                <p className='text-transparent'>.</p>
            </div>
        </>
    )
}

export default NavbarMobile