import React, { useEffect, useState } from 'react'
import { MdCurrencyRupee } from "react-icons/md"
import { Link } from 'react-router-dom'
import { HotPicksData } from '../../../../data/HomePage'
import AnimatedBuyButton from '../ProductListing/Product Section/AnimatedBuyButton'

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
        <div className="rounded-[8px] lg:rounded-[16px] p-3 lg:px-[85px] lg:pt-[86px] lg:max-w-max bg-dark/card/bg flex gap-3 flex-col h-[235px] lg:h-[526px] min-w-[156px] ">
            <img src={card.image} alt="" className='h-[100px] lg:h-[230px] object-contain' />
            <div className="text-center max-w-[243px]">
                <h1 className="text-mobile/h6 lg:text-desktop/h4">{card.name}</h1>
                <p className="text-mobile/small/body text-grey/grey/3 lg:text-desktop/body/2/regular mt-1 lg:mt-2">
                    {readMore ? card.descriptoin : `${card.descriptoin.substring(0, 50)}...`}
                    {/* <span onClick={() => setReadMore(!readMore)} className='cursor-pointer text-itel-red'>{readMore ? ' Read Less' : ' Read More'}</span> */}
                </p>
                <div className="mt-4">
                    <Link to={card.path} >
                        <AnimatedBuyButton price={card.price} />
                    </Link>
                </div>
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