/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import { ArrowRight } from 'lucide-react'
import { useState, useRef, useEffect, } from 'react'
import { useClickOutside } from "react-haiku"
import { Link } from 'react-router-dom'
import { AccessoriesData, PhoneData, TvData, SupportData, PhonesData } from '../data/NavbarData'
import { MdCurrencyRupee, MdKeyboardArrowRight } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import { IoCloseSharp } from 'react-icons/io5'
// import { useSelector } from 'react-redux'


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
        <svg xmlns="http://www.w3.org/2000/svg" className='min-w-6 max-w-6 max-h-6 min-h-6' viewBox="0 0 25 24" fill="none">
            <path d="M18.992 11.0415C18.6117 10.8935 18.3567 10.5284 18.3567 10.0775V9.9789C18.3567 9.38733 18.1127 9.14088 17.5283 9.14088H17.431C16.8458 9.14088 16.4072 8.69718 16.4072 8.10561V8.00703C16.4072 7.41547 16.1633 7.16902 15.5781 7.16902H15.4808C14.8963 7.16902 14.4571 6.72532 14.4571 6.13385V6.03517C14.4571 5.4437 14.8963 5 15.4808 5H15.5781C16.1633 5 16.6018 5.4437 16.6018 6.03517V6.13385C16.6018 6.72532 16.8458 6.97186 17.431 6.97186H17.5283C18.1127 6.97186 18.552 7.41547 18.552 8.00703V8.10561C18.552 8.69718 18.7952 8.94363 19.3804 8.94363H19.4777C20.0629 8.94363 20.5014 9.38733 20.5014 9.9789V10.0775C20.5014 10.6198 20.794 11.0141 21.3785 11.0141H21.4271C21.9386 11.0141 22.3536 11.4334 22.3536 11.9507V12.0493C22.3536 12.5666 21.9386 12.9859 21.4271 12.9859H21.3785C20.794 12.9859 20.5014 13.3802 20.5014 13.9225V14.0211C20.5014 14.6127 20.0629 15.0564 19.4777 15.0564H19.3804C18.7952 15.0564 18.552 15.3028 18.552 15.8944V15.993C18.552 16.5845 18.1127 17.0281 17.5283 17.0281H17.431C16.8458 17.0281 16.6018 17.2747 16.6018 17.8662V17.9648C16.6018 18.5563 16.1633 19 15.5781 19H15.4808C14.8963 19 14.4571 18.5563 14.4571 17.9648V17.8662C14.4571 17.2747 14.8963 16.831 15.4808 16.831H15.5781C16.1633 16.831 16.4072 16.5845 16.4072 15.993V15.8944C16.4072 15.3028 16.8458 14.8591 17.431 14.8591H17.5283C18.1127 14.8591 18.3567 14.6127 18.3567 14.0211V13.9225C18.3567 13.4622 18.622 13.0916 19.0156 12.9497H3.29697C2.77589 12.9497 2.35358 12.5225 2.35358 11.9956C2.35358 11.4687 2.77589 11.0415 3.29697 11.0415H18.992Z" fill={isActive ? "#FF0037" : "#fff"} />
        </svg>
    )
}


const CommonCard = ({ thumbnail, label, price, link, fn }) => {
    return (
        <Link key={label} to={link} onClick={() => fn(prev => !prev)}>
            <div className="xl:w-[290px] text-white h-[163px] p-6 flex gap-4 bg-dark/card/bg  rounded-[8px]">
                <img src={thumbnail} alt={label} className='h-[114px] w-[120px] object-contain' />
                <div className="flex flex-col gap-4">
                    <h1 className="text-desktop/body/large">{label}</h1>
                    <h1 className="text-desktop/button text-left flex items-center">
                        {
                            price == '0' ?
                                'Coming Soon'
                                :
                                <>
                                    <MdCurrencyRupee />
                                    {price}
                                </>
                        }
                    </h1>
                </div>
            </div>
        </Link>
    )
}

const Support = ({ support, setSupport }) => {

    return (
        <div className={`bg-[#1a1a1a] absolute top-0 w-full overflow-hidden transition-all duration-500 ${support ? 'h-[330px] z-[100]' : 'h-0'}`}>
            <div className='py-12 max-w-[741px] w-full mx-auto flex flex-wrap gap-6 font-markot'>
                {
                    SupportData.map(({ id, label, path }) => (
                        <Link to={path} key={id}>
                            <div onClick={() => setSupport(prev => !prev)} className="py-[7px] flex flex-col justify-center px-6 space-y-4 w-[230px] h-[106px] rounded-[8px] text-white bg-gradient-to-r from-[rgba(255,7,60,0.2)] to-[rgba(55,63,65,0.2)]">
                                <h1 className="text-white text-desktop/h5">{label}</h1>
                                <div className="flex gap-2 items-center">
                                    <h4 className="text-desktop/button">READ MORE</h4>
                                    <ArrowRight />
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div >
    )
}

const SmartPhoneDropdown = ({ smartPhone, setSmartPhone, handleOutside }) => {

    const [selectedCategory, setSetselectedCategory] = useState(PhoneData[0])

    const handleClick = (id) => {
        const selCatergory = PhoneData.find((item) => item.id === id)
        setSetselectedCategory(selCatergory)
    }

    return (
        <div className={`bg-[#1a1a1a] absolute top-0 w-full overflow-hidden transition-all duration-500 ${smartPhone ? 'h-[330px] py-12 z-[100]' : 'h-0'}`}>
            <div className="max-w-[1065px] w-full mx-auto flex lg:gap-6 pl-4 xl:pl-0 xl:gap-11">
                <div className="flex flex-col gap-3">
                    {
                        PhoneData.map(({ id }) => (
                            <button key={id} onClick={() => handleClick(id)} className={`flex w-[114px] justify-between gap-2 items-center`}>
                                <h1 className="text-desktop/button text-left uppercase text-white">
                                    {id}
                                </h1>
                                <ArrowRight isActive={selectedCategory.id == id} />
                            </button>
                        ))
                    }

                    <Link to="/smartphones">
                        <button className="flex w-[114px] justify-between gap-2 items-center" onClick={handleOutside}>
                            <h1 className=" text-desktop/button text-left uppercase text-white">view all</h1>
                            <ArrowRight />
                        </button>
                    </Link>
                </div>
                <div className="flex flex-col gap-5 w-full">
                    <h1 className="text-desktop/h6/medium text-blue/blue/5">
                        Feature Product
                    </h1>
                    {/* All products will here */}
                    <div className="flex gap-4">
                        {
                            selectedCategory.products.map((item) => (
                                <CommonCard key={item.id} {...item} fn={setSmartPhone} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const AccessoriesDropDown = ({ Accessories }) => {

    const [selectedCategory, setSetselectedCategory] = useState(AccessoriesData[0])

    const handleClick = (id) => {
        const selCatergory = AccessoriesData.find((item) => item.id === id)
        setSetselectedCategory(selCatergory)
    }

    return (
        <div className={`bg-[#1a1a1a] absolute top-0 w-full overflow-hidden transition-all duration-500 ${Accessories ? 'h-[330px] py-12 z-[100] ' : 'h-0'}`}>
            <div className="max-w-[1065px] w-full mx-auto flex lg:gap-6 pl-4 xl:pl-0 xl:gap-11">
                <div className="flex flex-col gap-3">
                    {
                        AccessoriesData.map(({ id }) => (
                            <button key={id} onClick={() => handleClick(id)} className={`flex w-[114px] justify-between gap-2 items-center`}>
                                <h1 className="text-desktop/button text-left uppercase text-white">
                                    {id}
                                </h1>
                                <ArrowRight isActive={selectedCategory.id == id} />
                            </button>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-5 w-full">
                    <h1 className="text-desktop/h6/medium text-blue/blue/5">
                        Feature Product
                    </h1>
                    {/* All products will here */}
                    <div className="flex gap-4">
                        {
                            selectedCategory.products.map((item) => (
                                <CommonCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                    {/* <div className="flex gap-2 items-center justify-end">
                        <h1 className=" text-mobile/button text-white text-right uppercase">view all</h1>
                        <ArrowRight />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
const TvDropDown = ({ tv }) => {

    const [selectedCategory, setSetselectedCategory] = useState(TvData[0])

    const handleClick = (id) => {
        const selCatergory = TvData.find((item) => item.id === id)
        setSetselectedCategory(selCatergory)
    }

    return (
        <div className={`bg-[#1a1a1a] absolute top-0 w-full overflow-hidden transition-all duration-500 ${tv ? 'h-[330px] py-12 z-[100]' : 'h-0'}`}>
            <div className="max-w-[1065px] w-full mx-auto flex lg:gap-6 pl-4 xl:pl-0 xl:gap-11">
                <div className="flex flex-col gap-3">
                    {
                        TvData.map(({ id }) => (
                            <button key={id} onClick={() => handleClick(id)} className={`flex w-[114px] justify-between gap-2 items-center`}>
                                <h1 className="text-desktop/button text-left uppercase text-white">
                                    {id}
                                </h1>
                                <ArrowRight isActive={selectedCategory.id == id} />
                            </button>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-5 w-full">
                    <h1 className="text-desktop/h6/medium text-blue/blue/5">
                        Feature Product
                    </h1>
                    {/* All products will here */}
                    <div className="flex gap-4">
                        {
                            selectedCategory.products.map((item) => (
                                <CommonCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


/**
 * Highlights a given term in the given text
 * @param {{text: string, highlight: string}} props
 * @prop {string} text The text to highlight
 * @prop {string} highlight The term to highlight
 * @returns {React.ReactElement} A span with the highlighted text
 */
function HighlightedText({ text = "", highlight = "" }) {
    // If there's no highlight term, return the original text
    if (!highlight.trim()) {
        return <span>{text}</span>
    }

    // Split on highlight term and include term into parts array
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'))

    return (
        <span>
            {parts.map((part, i) =>
                part.toLowerCase() === highlight.toLowerCase() ? (
                    <span key={i} className="text-white font-medium">
                        {part}
                    </span>
                ) : (
                    <span key={i}>{part}</span>
                )
            )}
        </span>
    )
}


/**
 * @description This component renders the Navigation Bar at the top of the page.
 * It contains a search bar, a link to the homepage, and a dropdown menu with links to various pages.
 * The search bar is a full-text search of the phone database, and the results are displayed in a dropdown.
 * @returns {JSX.Element} The rendered Navigation Bar component.
 */
const Navbar = () => {

    // const {tvActive, smartPhoneActive, accessoriesActive, supportActive } = useSelector(state => state.navbar)

    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    const [results, setResults] = useState({ smartphones: [], featurephones: [] })

    useEffect(() => {
        if (searchTerm) {
            const filteredPhones = PhonesData.filter(phone =>
                phone.label.toLowerCase().includes(searchTerm.toLowerCase())
            )

            setResults({
                smartphones: filteredPhones.filter(phone => phone.type === 'smartphone'),
                featurephones: filteredPhones.filter(phone => phone.type === 'featurephone')
            })
        } else {
            setResults({ smartphones: [], featurephones: [] })
        }
    }, [searchTerm])

    const noResults = searchTerm && results.smartphones.length === 0 && results.featurephones.length === 0

    const [smartPhone, setSmartPhone] = useState(false)
    const [tv, setTv] = useState(false)
    const [Accessories, setAccessories] = useState(false)
    const [support, setSupport] = useState(false)

    const navRef = useRef(null)

    const handleOutside = () => {
        setSmartPhone(false)
        setTv(false)
        setAccessories(false)
        setSupport(false)
    }

    const NavigateToSearch = (path) => {
        navigate(path)
        setSearchTerm('')
    }

    useClickOutside(navRef, handleOutside)

    return (
        <>
            <div className='bg-brand/black py-4 hidden lg:block font-markot'>

                <div className="h-[50px] max-w-[1281px] w-11/12 mx-auto flex justify-between items-center ">
                    <Link to={'/'} >
                        <img src="/static_page/homepage/itel.png" alt="" className="" />
                    </Link>

                    <div className="xl:w-[712px] lg:w-[500px] relative h-full bg-white/10 py-[14px] px-5 flex gap-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22 22L20 20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <input
                            type="text"
                            placeholder='What you are looking for'
                            className='text-grey/grey/2 text-desktop/body/1 bg-transparent outline-none border-none w-full'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setTimeout(() => {
                                setIsFocused(false)
                            }, 200)}
                        />

                        {
                            searchTerm &&
                            <button onClick={() => setSearchTerm('')} className="text-white text-2xl">
                                <IoCloseSharp />
                            </button>
                        }

                        {/* Search Result */}

                        {searchTerm && (
                            <div className="absolute top-16 left-0 p-6 bg-black/1 z-[100] w-full  font-markot">
                                <div className="space-y-5">
                                    {noResults ? (
                                        <div className="p-4 text-center text-muted-foreground text-desktop/h5/medium text-grey/grey/4">
                                            No results found for "{searchTerm}"
                                        </div>
                                    ) : (
                                        <>
                                            {results.smartphones.length > 0 && (
                                                <div className="">
                                                    <h2 className="text-desktop/caption text-grey/grey/4">Smartphones</h2>
                                                    <ul className="space-y-2">
                                                        {results.smartphones.map(phone => (

                                                            <li onClick={() => NavigateToSearch(phone.link)} key={phone.id} className="text-desktop/h6/medium uppercase group cursor-pointer text-grey/grey/3 py-[6px] flex justify-between items-center">
                                                                <HighlightedText text={phone.label} highlight={searchTerm} />
                                                                <MdKeyboardArrowRight className='text-white text-2xl group-hover:text-itel-red' />
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {results.featurephones.length > 0 && (
                                                <div className="">
                                                    <h2 className="text-desktop/caption text-grey/grey/4">Featurephones</h2>
                                                    <ul className="space-y-2">
                                                        {results.featurephones.map(phone => (
                                                            <li onClick={() => NavigateToSearch(phone.link)} key={phone.id} className="text-desktop/h6/medium uppercase group cursor-pointer text-grey/grey/3 py-[6px] flex justify-between items-center">
                                                                <HighlightedText text={phone.label} highlight={searchTerm} />
                                                                <MdKeyboardArrowRight className='text-white text-2xl group-hover:text-itel-red' />
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        )}


                    </div>

                    <div className="flex gap-2 items-center relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="#FF073C" stroke-width="1.5" stroke-miterlimit="10" />
                        </svg>
                        <div className="text-white">
                            <h1 className="text-desktop/overline">itel Customer Care</h1>
                            <a href="tel:1800-4190-525" className="text-desktop/caption">1800-4190-525</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className='font-markot bg-[#1f1f1f] hidden lg:block' ref={navRef} >
                <div className="max-w-[1050px] mx-auto w-11/12 justify-between py-4 flex text-white ">
                    <button className="flex items-center gap-0.5" onClick={() => {
                        setSmartPhone(prev => !prev)
                        setTv(false)
                        setAccessories(false)
                        setSupport(false)
                    }}>
                        <span className="text-desktop/body/2/regular">
                            Smartphones
                        </span>
                        <ArrowSvg isActive={smartPhone} />
                    </button>
                    <Link to={'/featurephones'}>
                        <button className="flex items-center gap-0.5" onClick={handleOutside}>
                            <span className="text-desktop/body/2/regular">
                                Feature Phones
                            </span>
                        </button>
                    </Link>
                    <button className="flex items-center gap-0.5" onClick={() => {
                        setAccessories(prev => !prev)
                        setSupport(false)
                        setSmartPhone(false)
                        setTv(false)
                    }}>
                        <span className="text-desktop/body/2/regular">
                            Smart Gadgets
                        </span>
                        <ArrowSvg isActive={Accessories} />
                    </button>
                    <button className="flex items-center gap-0.5" onClick={() => {
                        setTv(prev => !prev)
                        setAccessories(false)
                        setSupport(false)
                        setSmartPhone(false)
                    }}>
                        <span className="text-desktop/body/2/regular">
                            Smart TVs
                        </span>
                        <ArrowSvg isActive={tv} />
                    </button>
                    <Link to={'/coming-soon'}>
                        <button className="flex items-center gap-0.5" onClick={handleOutside}>
                            <span className="text-desktop/body/2/regular">
                                Home Care
                            </span>
                        </button>
                    </Link>
                    <Link to={'/coming-soon'}>
                        <button className="flex items-center gap-0.5" onClick={handleOutside}>
                            <span className="text-desktop/body/2/regular">
                                Personal Care
                            </span>
                        </button>
                    </Link>
                    <Link to="/about-us-itel-mobile-india">
                        <button className="flex items-center gap-0.5" onClick={handleOutside}>
                            <span className="text-desktop/body/2/regular">
                                About Us
                            </span>
                        </button>
                    </Link>
                    <button className="flex items-center gap-0.5" onClick={() => {
                        setSupport(prev => !prev)
                        setTv(false)
                        setAccessories(false)
                        setSmartPhone(false)
                    }} >
                        <span className="text-desktop/body/2/regular">
                            Support
                        </span>
                        <ArrowSvg isActive={support} />
                    </button>
                </div>
                <div className="relative z-50">
                    <Support support={support} setSupport={setSupport} />
                    <SmartPhoneDropdown smartPhone={smartPhone} setSmartPhone={setSmartPhone} handleOutside={handleOutside} />
                    <AccessoriesDropDown Accessories={Accessories} setAccessories={setAccessories} />
                    <TvDropDown tv={tv} setTv={setTv} />
                </div>
            </div>
        </>
    )
}

export default Navbar
