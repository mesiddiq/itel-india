/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import FilterTags from "../Filter Section/FilterTags";
import ProductCard from "./ProductCard";
// import life from '../../assets/life.svg';
import { useEffect } from "react";
import Compare from "./Compare";
import Enjoy from "./Enjoy";
import PhoneBanner from "./PhoneBanner";
import SeriesTags from "./SeriesTags";
import arrowLeftCarousel from '/product-listing/arrow-left-carousel.svg';
import arrowRightCarousel from '/product-listing/arrow-right-carousel.svg';

import { useDispatch, useSelector } from "react-redux";
import { AllPhonesData } from '../../../../../data/AllPhoneData';
import { setSmartPhones } from "../../../../../redux/slice/smartPhoneSlice";

const seriesBannerData = {
    "ALL": '/product-listing/banners/allProductsBanner.gif',
    "S Series": '/product-listing/banners/sSeriesBanner.png',
    "P Series": '/product-listing/banners/pSeriesBanner.png',
    "A Series": '/product-listing/banners/aSeriesBanner.png',
}


const ProductSectionLaptop = ({ activeSeries, setActiveSeries, currentPage, setCurrentPage }) => {

    const dispatch = useDispatch()
    const smartPhonesData = useSelector(state=>state.smartPhone.smartPhones)

    const phonesPerPageLaptop = 6;

    const filteredPhones = activeSeries === 'ALL'
        ? AllPhonesData
        : AllPhonesData.filter(phone => phone.category === activeSeries);


    const handleSeriesChange = (series) => {
        setActiveSeries(series);
        setCurrentPage(1);
    };

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

    useEffect(() => {
        dispatch(setSmartPhones(AllPhonesData))
    })


    return (
        <>
            {/* Laptop */}
            <section className="hidden lg:flex flex-col gap-8 ">
                <div className="hidden md:flex flex-row justify-between items-center">
                    <SeriesTags activeSeries={activeSeries} onSeriesChange={handleSeriesChange} />
                    <Compare />
                </div>

                <PhoneBanner source={seriesBannerData[activeSeries]} />

                <div className="tagPlusCards flex flex-col gap-8">
                    {/* Best Camera, Music, Entertainment, Talk Time */}
                    <FilterTags />

                    {/* Laptop */}
                    <div className="hidden md:flex flex-col gap-12">
                        <div className="flex flex-col gap-5">

                            {/* Upper 3 Cards */}
                            <div className="productCards flex flex-row gap-5">
                                {
                                    currentPhones.slice(0, 3).map(phone => (
                                        <ProductCard key={phone.id} {...phone} />
                                    ))
                                }
                            </div>

                            {/* Enjoy Section */}
                            <div className="flex flex-row gap-5">
                                {activeSeries == 'ALL' && (
                                    <>
                                        <Enjoy part1="OY" part2="ENJOY" part3="EN" />
                                        <Enjoy part1="ER" part2="BETTER" part3="ER" />
                                        <Enjoy part1="LIFE" part2="LIFE" part3="LIFE" />
                                    </>
                                )}
                                {activeSeries == 'S Series' && (
                                    <>
                                        <Enjoy part1="SH" part2="STYLISH" part3="SH" />
                                        <Enjoy part1="SE" part2="FINNESE" part3="FI" />
                                        <Enjoy part1="OLD" part2="BOLD" part3="BOL" />
                                    </>
                                )}
                                {activeSeries == 'P Series' && (
                                    <>
                                        <Enjoy part1="UL" part2="POWERFUL" part3="PO" />
                                        <Enjoy part1="IC" part2="ENERGETIC" part3="EN" />
                                        <Enjoy part1="NT" part2="PROFICIENT" part3="PR" />
                                    </>
                                )}
                                {activeSeries == 'A Series' && (
                                    <>
                                        <Enjoy part1="VE" part2="ACTIVE" part3="AC" />
                                        <Enjoy part1="UL" part2="PLAYFUL" part3="PL" />
                                        <Enjoy part1="KY" part2="FUNKY" part3="FU" />
                                    </>
                                )}
                            </div>

                            {/* Lower 3 Cards */}
                            <div className="productCards flex flex-row gap-5">
                                {
                                    currentPhones.slice(3, 6).map(phone => (
                                        <ProductCard key={phone.id} {...phone} />
                                    ))
                                }
                            </div>

                        </div>

                        {/* Purple Card */}
                        <div className="flex flex-col justify-center items-center">
                            <div className="w-full pl-[6px]">
                                <img src='/product-listing/exploreBannerLaptop.png' className="w-full" />
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="sliderCounter cursor-pointer flex flex-row gap-2 justify-center items-center w-full">
                            <img src={arrowLeftCarousel} className="p-3" onClick={prevPage} disabled={currentPage === 1} />
                            <span className="text-sm leading-[22.4px] tracking-[-0.02em] text-[#F8F6F3]">{currentPage} of {totalPagesPerCategory}</span>
                            <img src={arrowRightCarousel} className="p-3" onClick={nextPage} disabled={currentPage === totalPagesPerCategory} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductSectionLaptop;
