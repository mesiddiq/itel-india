/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import FilterHeading from "../Filter Section/FilterHeading";
import FilterSection from "../Filter Section/FilterSection";
import Compare from "./Compare";
import Enjoy from "./Enjoy";
import PhoneBanner from "./PhoneBanner";
import ProductCard from "./ProductCard";
import ProductSection from "./ProductSectionLaptop";
import SeriesTags from "./SeriesTags";
import ProductSectionMobile from './ProductSectionMobile';

const ProductListMobile = ({activeSeries, setActiveSeries, currentPage, setCurrentPage}) => {
    const [isAligned, setIsAligned] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const leftPane = document.getElementById('filter-section');
            const rightPane = document.getElementById('product-section');
            
            const leftPaneBottom = leftPane.getBoundingClientRect().bottom;
            const rightPaneBottom = rightPane.getBoundingClientRect().bottom;

            if (rightPaneBottom <= leftPaneBottom) {
                setIsAligned(true);
            } else {
                setIsAligned(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Mobile */}
            <ProductSectionMobile activeSeries={activeSeries} setActiveSeries={setActiveSeries} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </>
    );
};

export default ProductListMobile;