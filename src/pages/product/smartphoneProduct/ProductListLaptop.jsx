import { useState, useEffect } from 'react';
import ProductSectionLaptop from './ProductSectionLaptop';
import Filters from './Filters'
import SupportChannels from '../../../components/common/smartphone_common/SupportChannels'

const ProductListLaptop = () => {
    const [isAligned, setIsAligned] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const leftPane = document.getElementById('filter-section');
            const rightPane = document.getElementById('product-section');

            if (leftPane && rightPane) { // Check if elements exist
                const leftPaneBottom = leftPane.getBoundingClientRect().bottom;
                const rightPaneBottom = rightPane.getBoundingClientRect().bottom;

                if (rightPaneBottom <= leftPaneBottom) {
                    setIsAligned(true);
                } else {
                    setIsAligned(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            {/* Laptop */}
            <section className="hidden lg:block py-10 text-white relative">
                <div className="flex flex-row gap-8">
                    <div
                        id="filter-section"
                        className={`hidden md:block md:w-1/4 h-1/4 sticky top-0 ${isAligned ? 'relative' : ''}`}
                        style={{ overflowY: isAligned ? 'hidden' : 'hidden' }}
                    >
                        <Filters />
                    </div>
                    <div id="product-section" className="w-3/4 overflow-y-auto">
                        <ProductSectionLaptop />
                        <div className='lg:pt-12'>
                            <SupportChannels theme='dark' />

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductListLaptop;