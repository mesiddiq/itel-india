/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Compare from "./Compare";
import SeriesTags from "./SeriesTags";
import { useEffect, useState } from "react";
import { AllPhonesData } from '../../../data/AllPhoneData'
import { useDispatch, useSelector } from "react-redux";
import { setSmartPhones } from "../../../redux/slice/smartPhoneSlice";
import Filters from "./Filters";
import ProductList from "./ProductList";
import FilterTags from "./FilterTags";
import PhoneBanner from "./PhoneBanner";

const seriesBannerData = {
    "All": '/product-listing/banners/allProductsBanner.gif',
    "S Series": '/product-listing/banners/sSeriesBanner.png',
    "P Series": '/product-listing/banners/pSeriesBanner.png',
    "A Series": '/product-listing/banners/aSeriesBanner.png',
}

const ProductSectionLaptop = () => {
    const dispatch = useDispatch();
    const smartPhonesData = useSelector(state => state.smartPhone.smartPhones);
    const selectedSeries = useSelector(state => state.filters.filters.series.length ? state.filters.filters.series : ['All']);

    const [currentPage, setCurrentPage] = useState(1);
    const phonesPerPageLaptop = 6;

    useEffect(() => {
        dispatch(setSmartPhones(AllPhonesData));
    }, [dispatch]);

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
            <section className="hidden lg:flex flex-col gap-8 ">
                <div className="hidden md:flex flex-row justify-between items-center">
                    <SeriesTags />
                    <Compare />
                </div>

                <PhoneBanner source={seriesBannerData[selectedSeries[0]]} />

                <div className="tagPlusCards flex flex-col gap-8">
                    <FilterTags />

                    <div className="hidden md:flex flex-col gap-12">
                        <div className="flex flex-col gap-5">
                            <ProductList phones={currentPhones} />
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div className="w-full pl-[6px]">
                                <img src='/product-listing/exploreBannerLaptop.png' className="w-full" />
                            </div>
                        </div>
                        {/* 
                        <div className="sliderCounter cursor-pointer flex flex-row gap-2 justify-center items-center w-full">
                            <img src='/product-listing/arrow-left-carousel.svg' className="p-3" onClick={prevPage} disabled={currentPage === 1} />
                            <span className="text-sm leading-[22.4px] tracking-[-0.02em] text-[#F8F6F3]">{currentPage} of {totalPagesPerCategory}</span>
                            <img src='/product-listing/arrow-right-carousel.svg' className="p-3" onClick={nextPage} disabled={currentPage === totalPagesPerCategory} />
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductSectionLaptop;
