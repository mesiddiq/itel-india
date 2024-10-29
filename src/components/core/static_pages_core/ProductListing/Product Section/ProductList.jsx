import { useState, useEffect } from 'react';
import FilterHeading from "../Filter Section/FilterHeading";
import FilterSection from "../Filter Section/FilterSection";
import Compare from "./Compare";
import Enjoy from "./Enjoy";
import PhoneBanner from "./PhoneBanner";
import ProductCard from "./ProductCard";
import ProductSection from "./ProductSection";
import SeriesTags from "./SeriesTags";

/**
 * This component renders the product listing page. It contains a filter section
 * on the left and a product section on the right. The filter section is sticky
 * and remains on the top of the page when the user scrolls down.
 *
 * There are two versions of the component, one for laptop and one for mobile.
 * The laptop version has a filter section on the left and a product section on
 * the right. The mobile version has a filter heading and a compare button on
 * top, followed by a series of tags, a phone banner, and a list of products.
 *
 * The list of products is rendered using the ProductCard component. The
 * ProductCard component accepts a product object as a prop and renders the
 * product details.
 *
 * The component also renders an "Enjoy" component after every 4 products.
 */
const ProductList = () => {
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
            {/* Laptop */}
            <section className="hidden lg:block py-10 text-white">
                <div className="flex flex-row gap-8">
                    <div
                        id="filter-section"
                        className={`hidden md:block md:w-1/4 h-1/4 mt-2 mb-10 pr-5 sticky top-0 ${isAligned ? 'relative' : ''}`}
                        style={{ overflowY: isAligned ? 'scroll' : 'hidden' }}
                    >
                        <FilterSection />
                    </div>
                    <div id="product-section" className="w-3/4 overflow-y-auto">
                        <ProductSection />
                    </div>
                </div>
            </section>

            {/* Mobile */}
            <section className="px-4 overflow-hidden lg:hidden py-10 text-white flex flex-col gap-7">
                <div className="filterCompare flex flex-row justify-between items-center">
                    <FilterHeading />
                    <Compare />
                </div>
                <div className="flex flex-col gap-5">
                    <SeriesTags />
                    <PhoneBanner />
                    {/* List of Products */}
                    <div className="allProducts flex flex-col gap-5">
                        <div className="productCards flex flex-row gap-4">
                            <ProductCard />
                            <ProductCard />
                        </div>
                        <Enjoy />
                        <div className="productCards flex flex-row gap-4">
                            <ProductCard />
                            <ProductCard />
                        </div>
                        <Enjoy />
                        <div className="productCards flex flex-row gap-4">
                            <ProductCard />
                            <ProductCard />
                        </div>
                        <Enjoy />
                        <div className="productCards flex flex-row gap-4">
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductList;