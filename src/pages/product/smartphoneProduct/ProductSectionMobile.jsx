/* eslint-disable no-unused-vars */
import Compare from "./Compare";
import SeriesTags from "./SeriesTags";
import { useState } from "react";

import { AllPhonesData } from '../../../data/AllPhoneData'
import Filters from "./Filters";
import ProductList from "./ProductList";
import PhoneBanner from "./PhoneBanner";
import { useDispatch, useSelector } from "react-redux";
import BuyNowSquareBG from "../../../components/common/smartphone_common/BuyNowSquareBG";

const seriesBannerData = {
    "All": '/product-listing/banners/allProductsBanner.gif',
    "S Series": '/product-listing/banners/sSeriesBanner.png',
    "P Series": '/product-listing/banners/pSeriesBanner.png',
    "A Series": '/product-listing/banners/aSeriesBanner.png',
}


const ProductSectionMobile = () => {
    const dispatch = useDispatch()
    const smartPhonesData = useSelector(state=>state.smartPhone.smartPhones)
    const selectedSeries = useSelector(state => state.filters.filters.series.length ? state.filters.filters.series : ['All'])

    const [currentPage, setCurrentPage] = useState(1);
    const phonesPerPageLaptop = 8;

    const filteredPhones = selectedSeries[0] === 'All'
        ? smartPhonesData
        : smartPhonesData.filter(phone => phone.category === selectedSeries[0]);

    const indexOfLastPhone = currentPage * phonesPerPageLaptop;
    const indexOfFirstPhone = indexOfLastPhone - phonesPerPageLaptop;
    const currentPhones = filteredPhones.slice(indexOfFirstPhone, indexOfLastPhone);

    return (
        <>  

            {/* Mobile */}
            <section className="px-4 overflow-hidden lg:hidden py-10 text-white flex flex-col gap-7">
                <div className="filterCompare flex flex-row justify-between items-center">
                    <Filters />
                    <Compare />
                </div>
                <div className="flex flex-col gap-5">
                    <SeriesTags />

                    <PhoneBanner source={seriesBannerData[selectedSeries[0]]}/>

                    {/* List of Products */}
                    <div className="allProducts flex flex-col gap-5">
                        {/* Product card + Pagination */}
                        <ProductList phones={currentPhones}/>
                    </div>

                    {/* Explore More */}
                    <div className='content lg:px-[119px] relative w-full h-[462px] lg:min-h-[350px] lg:h-full flex flex-col justify-center items-center'>
                        <div className='flex flex-col-reverse lg:flex-row justify-between items-center z-20'>
                            <div className='flex flex-col lg:items-start items-center text-white max-w-[296px] text-center lg:text-left lg:max-w-[463px] z-20 '>
                                <h2 className='lg:text-[36px] font-bold lg:leading-[46.8px] text-desktop/h4 '>Stay Plugged into Your<br />Go-to Socials with itel</h2>
                                <p className='mb-8 lg:text-desktop/body/1 lg:leading-6 text-[14px] leading-4 -tracking-[0.14px] text-white/80 mt-2 lg:mt-4 '>Get all the must-have accessories for your fav itel mobile, like the itel power bank and itel earphone.</p>
                                <BuyNowSquareBG purchaseLink="https://www.instagram.com/itel_india/" content="EXPLORE"/>
                            </div>
                            <div className=' max-w-[302px] lg:max-w-[517px] z-20'>
                                <img src={'/static_page/homepage/selfie.png'} />
                            </div>
                            <img src="/product-listing/exploreBannerLaptop.png" className='absolute top-0 left-0 z-10 hidden lg:block' />
                            <img src="/product-listing/exploreBannerMobile.png" className='absolute left-1/2 -translate-x-1/2 z-10 top-0 lg:hidden' />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default ProductSectionMobile;
