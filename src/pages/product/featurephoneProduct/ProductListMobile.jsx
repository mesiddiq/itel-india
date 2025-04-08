/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import ProductSectionMobile from './ProductSectionMobile';
import SupportChannels from '../../../components/common/smartphone_common/SupportChannels';

const ProductListMobile = () => {
    
    return (
        <>
            {/* Mobile */}
            <ProductSectionMobile />
            <SupportChannels theme='dark'/>
        </>
    );
};

export default ProductListMobile;