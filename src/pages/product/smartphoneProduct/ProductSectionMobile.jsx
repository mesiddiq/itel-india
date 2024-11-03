/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import FilterTags from "../Filter Section/FilterTags";
// import ProductCard from "./ProductCard";
// import life from '../../assets/life.svg';
// import subtract from '/product-listing/Group 1973339759.png';
// import arrowLeftCarousel from '/product-listing/arrow-left-carousel.svg';
// import arrowRightCarousel from '/product-listing/arrow-right-carousel.svg';
import Compare from "./Compare";
import SeriesTags from "./SeriesTags";
// import Enjoy from "./Enjoy";
// import PhoneBanner from "./PhoneBanner";
import { useState } from "react";

import { AllPhonesData } from '../../../data/AllPhoneData'
// import { seriesStylishTextContent } from '../../../../../data/seriesStylishTextContent'
// import FilterHeading from "../Filter Section/FilterHeading";
import Filters from "./Filters";
import ProductList from "./ProductList";
import PhoneBanner from "./PhoneBanner";
import { useDispatch, useSelector } from "react-redux";

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
    
    // const phonesPerPageMobile = 8;

    // const filteredPhones = activeSeries === 'ALL' 
    // ? AllPhonesData 
    // : AllPhonesData.filter(phone => phone.category === activeSeries);

    
    // const handleSeriesChange = (series) => {
    //     setActiveSeries(series);
    //     setCurrentPage(1);
    // };
    
    // const totalPagesPerCategory = Math.ceil(filteredPhones.length / phonesPerPageMobile);
    // const indexOfLastPhone = currentPage * phonesPerPageMobile;
    // const indexOfFirstPhone = indexOfLastPhone - phonesPerPageMobile;
    // const currentPhones = filteredPhones.slice(indexOfFirstPhone, indexOfLastPhone);
    
    // const nextPage = () => {
    //     if (currentPage < totalPagesPerCategory) setCurrentPage(prev => prev + 1);
    // };

    // const prevPage = () => {
    //     if (currentPage > 1) setCurrentPage(prev => prev - 1);
    // };

    const [currentPage, setCurrentPage] = useState(1);
    const phonesPerPageLaptop = 8;

    const filteredPhones = selectedSeries[0] === 'All'
        ? smartPhonesData
        : smartPhonesData.filter(phone => phone.category === selectedSeries[0]);

    const totalPagesPerCategory = Math.ceil(filteredPhones.length / phonesPerPageLaptop);
    const indexOfLastPhone = currentPage * phonesPerPageLaptop;
    const indexOfFirstPhone = indexOfLastPhone - phonesPerPageLaptop;
    const currentPhones = filteredPhones.slice(indexOfFirstPhone, indexOfLastPhone);

    const nextPage = () => {
        if (currentPage < totalPagesPerCategory) setCurrentPage(prev => prev + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

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
                        <ProductList phones={currentPhones}/>
                            {/* <div className="productCards flex flex-row gap-5">
                                {
                                    currentPhones.slice(0, 2).map(phone => (
                                        <ProductCard key={phone.id} {...phone} />
                                    ))
                                }
                            </div>
                            
                            {currentPhones.length >= 1 && (
                                <>
                                    {activeSeries === 'ALL' && <Enjoy part1="OY" part2="ENJOY" part3="EN" />}
                                    {activeSeries === 'S Series' && <Enjoy part1="SH" part2="STYLISH" part3="SH" />}
                                    {activeSeries === 'P Series' && <Enjoy part1="UL" part2="POWERFUL" part3="PO" />}
                                    {activeSeries === 'A Series' && <Enjoy part1="VE" part2="ACTIVE" part3="AC" />}
                                </>
                            )}

                            <div className="productCards flex flex-row gap-5">
                                {
                                    currentPhones.slice(2, 4).map(phone => (
                                        <ProductCard key={phone.id} {...phone} />
                                    ))
                                }
                            </div>

                            {currentPhones.length > 4 && (
                                <>
                                    { activeSeries == 'ALL' && ( <Enjoy part1="ER" part2="BETTER" part3="ER"/> )} 
                                    { activeSeries == 'S Series' && ( <Enjoy part1="SE" part2="FINNESE" part3="FI"/> )} 
                                    { activeSeries == 'P Series' && ( <Enjoy part1="IC" part2="ENERGETIC" part3="EN"/> )} 
                                    { activeSeries == 'A Series' && ( <Enjoy part1="UL" part2="PLAYFUL" part3="PL"/> )} 
                                </>
                            )}

                            <div className="productCards flex flex-row gap-5">
                                {
                                    currentPhones.slice(4, 6).map(phone => (
                                        <ProductCard key={phone.id} {...phone} />
                                    ))
                                }
                            </div>

                            {currentPhones.length > 6 && (
                                <>
                                    { activeSeries == 'ALL' && ( <Enjoy part1="LIFE" part2="LIFE" part3="LIFE"/> )} 
                                    { activeSeries == 'S Series' && ( <Enjoy part1="OLD" part2="BOLD" part3="BOL"/> )} 
                                    { activeSeries == 'P Series' && ( <Enjoy part1="NT" part2="PROFICIENT" part3="PR"/> )} 
                                    { activeSeries == 'A Series' && ( <Enjoy part1="KY" part2="FUNKY" part3="FU"/> )} 
                                </>
                            )}

                            <div className="productCards flex flex-row gap-5">
                                {
                                    currentPhones.slice(6, 8).map(phone => (
                                        <ProductCard key={phone.id} {...phone} />
                                    ))
                                }
                            </div> */}
                    </div>

                    {/* Explore More */}

                    {/* <div className="sliderCounter cursor-pointer flex flex-row gap-2 justify-center items-center w-full">
                        <img src={arrowLeftCarousel} className="p-3" onClick={prevPage} disabled={currentPage === 1}/>
                        <span className="text-sm leading-[22.4px] tracking-[-0.02em] text-[#F8F6F3]">{currentPage} of {totalPagesPerCategory}</span>
                        <img src={arrowRightCarousel} className="p-3" onClick={nextPage} disabled={currentPage === totalPagesPerCategory}/>
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default ProductSectionMobile;
