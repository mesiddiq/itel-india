import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { HotPicksData } from '../../../../data/HomePage'
import AnimatedBuyButton from '../ProductListing/Product Section/AnimatedBuyButton'
import './HotPicks.css'

const LabelData = [
    { id: 'all', label: 'All' },
    { id: 'bestdeals', label: 'Best Deals' },
    { id: 'smartphone', label: 'Smartphone' },
    { id: 'featurephone', label: 'Feature Phone' },
    { id: 'smarttv', label: 'Smart Tv' },
]


const Card = ({ name, image, description, path, price, comingSoon }) => {
    
    return (
        <div className="rounded-[8px] lg:rounded-[16px] p-3 lg:px-[85px] lg:pt-[86px] lg:max-w-max bg-dark/card/bg flex gap-3 flex-col h-[235px] md:py-10 md:h-auto lg:h-[526px] min-w-[156px] ">
            <img src={image} alt="" className='h-[100px] lg:h-[230px] max-w-[250px] object-contain' />
            <div className="text-center max-w-[243px]">
                <h3 className="text-mobile/h6 lg:text-desktop/h4">{name}</h3>
                <p className="text-mobile/small/body text-grey/grey/3 lg:text-desktop/body/2/regular mt-1 lg:mt-2">
                    {`${description.substring(0, 50)}...`}
                </p>
                <div className="mt-4 mx-auto">
                    {
                        comingSoon ?
                            <Link to='/coming-soon'>
                                <button
                                    className={`cursor-pointer md:rounded-3xl text-mobile/button lg:text-desktop/button md:border-[0.5px] w-full md:border-solid flex flex-row justify-center items-center gap-[6px] md:gap-3 md:py-2 px-6 md:bg-[#2C2C2C] uppercase font-bold`}
                                >
                                    coming soon
                                </button>
                            </Link>
                            :
                            <Link to={path} >
                                <AnimatedBuyButton price={price} />
                            </Link>
                    }
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

        <>

            <div className='content flex flex-col gap-10 px-4 md:px-0 font-markot overflow-hidden'>
                <div className="flex gap-4 items-center">
                    <img src="/static_page/Hotstar.gif" alt="" className='max-w-16' />
                    <h3 className="lg:text-desktop/h2 text-mobile/h4">Hot Picks: Snag ‘Em Now!</h3>
                </div>
                <Tabs>
                    <TabList className={'flex gap-2 lg:gap-4 pb-4 overflow-x-scroll navbarmobile'}>
                        {
                            LabelData.map((tab) => (
                                <Tab key={tab.id}>
                                    <button onClick={() => handleClick(tab.id)} className={`px-3 text-nowrap lg:px-5 lg:py-3 py-[6px] text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/3 rounded-full border-[1.5px] border-white/10 ${tab.id === selectedCategory.id ? 'bg-white/10' : ''}`}>{tab.label}</button>
                                </Tab>
                            ))
                        }
                    </TabList>

                    {
                        HotPicksData.map(({ id, products }) => (
                            <TabPanel key={id}>
                                <div className="flex justify-between overflow-x-scroll navbarmobile gap-4">
                                    {
                                        products.map((card) => (
                                            <Card {...card} key={card.id} />
                                        ))
                                    }
                                </div>
                            </TabPanel>
                        ))
                    }
                </Tabs>
            </div>
        </>
    )
}

export default HotPicks