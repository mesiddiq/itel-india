/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import ProductSectionMobile from './ProductSectionMobile';
import SupportChannels from '../../../components/common/smartphone_common/SupportChannels';

const ProductListMobile = () => {
    const [isAligned, setIsAligned] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const leftPane = document.getElementById('filter-section');
    //         const rightPane = document.getElementById('product-section');
            
    //         const leftPaneBottom = leftPane.getBoundingClientRect().bottom;
    //         const rightPaneBottom = rightPane.getBoundingClientRect().bottom;

    //         if (rightPaneBottom <= leftPaneBottom) {
    //             setIsAligned(true);
    //         } else {
    //             setIsAligned(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <>
            {/* Mobile */}
            <ProductSectionMobile />
            <SupportChannels theme='dark'/>
        </>
    );
};

export default ProductListMobile;