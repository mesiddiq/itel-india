import React, { useEffect, useState } from 'react'
import { MdCurrencyRupee } from "react-icons/md"
import { Link } from 'react-router-dom'
import { HotPicksData } from '../../../../data/HomePage'

const LabelData = [
    { id: 'all', label: 'All' },
    { id: 'bestdeals', label: 'Best Deals' },
    { id: 'smartphone', label: 'Smartphone' },
    { id: 'featurephone', label: 'Feature Phone' },
    { id: 'smarttv', label: 'Smart Tv' },
]


const Card = ({ card }) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <div className="rounded-[8px] lg:rounded-[16px] p-3 lg:px-[85px] lg:pt-[86px] lg:max-w-max bg-dark/card/bg flex gap-3 flex-col h-[227px] lg:h-[526px] min-w-[156px] ">
            <img src={card.image} alt="" className='h-[100px] lg:h-[230px] object-contain' />
            <div className="text-center max-w-[243px]">
                <h1 className="text-mobile/h6 lg:text-desktop/h4">{card.name}</h1>
                <p className="text-mobile/small/body text-grey/grey/3 lg:text-desktop/body/2/regular mt-1 lg:mt-2">
                    {readMore ? card.descriptoin : `${card.descriptoin.substring(0, 50)}...`} 
                    <span onClick={() => setReadMore(!readMore)} className='cursor-pointer text-itel-red'>{readMore ? ' Read Less' : ' Read More'}</span>
                </p>
                <Link to={card.path} className="flex gap-[6px] items-center justify-center mx-auto lg:py-2 lg:px-5 lg:rounded-[24px] lg:bg-[#2c2c2c] lg:border-[#4f4f4f] lg:border w-full lg:mt-3">
                    <span>
                        <MdCurrencyRupee />
                    </span>
                    <span className="text-mobile/small/button lg:text-desktop/button">
                        {card.price}
                    </span>
                    <span className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M16.6186 9.1784C16.2927 9.05157 16.0741 8.73866 16.0741 8.35212V8.26762C16.0741 7.76057 15.865 7.54933 15.364 7.54933H15.2806C14.779 7.54933 14.4031 7.16901 14.4031 6.66195V6.57746C14.4031 6.0704 14.194 5.85916 13.6924 5.85916H13.609C13.1081 5.85916 12.7316 5.47885 12.7316 4.97187V4.88729C12.7316 4.38031 13.1081 4 13.609 4H13.6924C14.194 4 14.5699 4.38031 14.5699 4.88729V4.97187C14.5699 5.47885 14.779 5.69017 15.2806 5.69017H15.364C15.865 5.69017 16.2415 6.0704 16.2415 6.57746V6.66195C16.2415 7.16901 16.45 7.38025 16.9516 7.38025H17.035C17.5366 7.38025 17.9124 7.76057 17.9124 8.26762V8.35212C17.9124 8.81693 18.1632 9.15492 18.6642 9.15492H18.7059C19.1443 9.15492 19.5 9.51439 19.5 9.95771V10.0423C19.5 10.4856 19.1443 10.8451 18.7059 10.8451H18.6642C18.1632 10.8451 17.9124 11.1831 17.9124 11.6479V11.7324C17.9124 12.2394 17.5366 12.6197 17.035 12.6197H16.9516C16.45 12.6197 16.2415 12.831 16.2415 13.338V13.4225C16.2415 13.9296 15.865 14.3098 15.364 14.3098H15.2806C14.779 14.3098 14.5699 14.5212 14.5699 15.0281V15.1127C14.5699 15.6197 14.194 16 13.6924 16H13.609C13.1081 16 12.7316 15.6197 12.7316 15.1127V15.0281C12.7316 14.5212 13.1081 14.1408 13.609 14.1408H13.6924C14.194 14.1408 14.4031 13.9296 14.4031 13.4225V13.338C14.4031 12.831 14.779 12.4507 15.2806 12.4507H15.364C15.865 12.4507 16.0741 12.2394 16.0741 11.7324V11.6479C16.0741 11.2533 16.3015 10.9356 16.6389 10.814H3.16577C2.71913 10.814 2.35714 10.4478 2.35714 9.99621C2.35714 9.54457 2.71913 9.1784 3.16577 9.1784H16.6186Z" fill="#FF0037" />
                        </svg>
                    </span>
                </Link>
            </div>
        </div>
    )
}

const HotPicks = () => {


    const [selectedCategory, setselectedCategory] = useState(HotPicksData[0])

    const handleClick = (id) => {
        const selCatergory = HotPicksData.find((item) => item.id === id)
        setselectedCategory(selCatergory)
    }

    return (
        <div className='content flex flex-col gap-10 px-4 md:px-0 font-markot'>
            <div className="flex gap-4 items-center">
                <img src="/static_page/Hotstar.gif" alt="" className='max-w-16' />
                <h1 className="lg:text-desktop/h2 text-mobile/h4">Hot Picks: Snag ‘Em Now!</h1>
            </div>
            <div className="">
                <div className="flex gap-3 items-center overflow-x-scroll navbarmobile">
                    {/* Tabs */}
                    {
                        LabelData.map((tab) => (
                            <button key={tab.id} onClick={() => handleClick(tab.id)} className={`px-3 text-nowrap lg:px-5 lg:py-3 py-[6px] text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/3 rounded-full border-[1.5px] border-white/10 ${tab.id === selectedCategory.id ? 'bg-white/10' : ''}`}>{tab.label}</button>
                        ))}
                </div>
                <div className="lg:mt-6 mt-4 flex  justify-around overflow-scroll items-center gap-4 overflowHidden">
                    {
                        selectedCategory?.products?.map((card) => (
                            <Card card={card} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HotPicks