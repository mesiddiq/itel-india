import { useMemo, useState } from "react";
import BuyNowSquareBG from "../../../components/common/smartphone_common/BuyNowSquareBG";
import { AllPhonesData } from '../../../data/AllPhoneData';
import { useFilterStore } from "../../../zustandstore/store";
import Compare from "../Compare";
import FilterTags from "./FilterTags";
import SeriesTags from "./SeriesTags";
import ProductCard from "../ProductCard";

const PRODUCTS_PER_PAGE = 6;

const ProductSectionLaptop = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const {
        // screenSizes,
        // batteryTypes,
        // priceRanges,
        // networks,
        // features,
        // cameras,
        // storageOptions,
        smartPhoneActiveCategory,
    } = useFilterStore();

    const filteredProducts = useMemo(() => {
        return AllPhonesData.filter((product) => {
            // Filter by category
            if (smartPhoneActiveCategory !== 'ALL') {
                if (product.category !== smartPhoneActiveCategory) return false;
            }

            // Filter by screen size
            // if (screenSizes.length > 0 && !screenSizes.includes(product.screenSize)) {
            //     return false;
            // }

            // Filter by battery type
            // if (batteryTypes.length > 0 && !batteryTypes.includes(product.battery)) {
            //     return false;
            // }

            // Filter by price range
            // if (priceRanges.length > 0) {
            //     const priceInRange = priceRanges.some(range => {
            //         if (range === 'Under ₹5,000' && product.price < 5000) return true;
            //         if (range === '₹5,000 - ₹7,000' && product.price >= 5000 && product.price <= 7000) return true;
            //         if (range === '₹7,000 - ₹10,000' && product.price > 7000 && product.price <= 10000) return true;
            //         if (range === 'Above ₹10,000' && product.price > 10000) return true;
            //         return false;
            //     });

            //     if (!priceInRange) return false;
            // }

            // Filter by network
            // if (networks.length > 0 && !networks.some(net => product.network.includes(net))) {
            //     return false;
            // }

            // Filter by features
            // if (features.length > 0) {
            //     const hasFeatures = features.some(feature => product.features.includes(feature));
            //     if (!hasFeatures) return false;
            // }

            // Filter by camera
            // if (cameras.length > 0 && !cameras.includes(product.camera || '')) {
            //     return false;
            // }

            // Filter by storage
            // if (storageOptions.length > 0 && !storageOptions.includes(product.storage || '')) {
            //     return false;
            // }

            return true;
        });

    }, [smartPhoneActiveCategory]);
    // screenSizes, batteryTypes, priceRanges, networks, features, cameras, storageOptions, 

    // Calculate pagination
    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

    // Handle page changes
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };


    let seriesBannerData;
    switch (smartPhoneActiveCategory) {
        case "ALL":
            seriesBannerData = '/product-listing/banners/allProductsBanner.webm';
            break;
        case "S Series":
            seriesBannerData = '/product-listing/banners/sSeriesBanner.jpg';
            break;
        case "P Series":
            seriesBannerData = '/product-listing/banners/pSeriesBanner.jpg';
            break;
        case "A Series":
            seriesBannerData = '/product-listing/banners/aSeriesBanner.jpg';
            break;
        default:
            seriesBannerData = '/product-listing/banners/allProductsBanner.gif';
    }


    return (
        <>
            <section className="hidden lg:flex flex-col gap-8 ">
                <div className="hidden md:flex flex-row justify-between items-center">
                    <SeriesTags />
                    <Compare phoneData={AllPhonesData} />
                </div>

                <div className="banner">
                    {
                        smartPhoneActiveCategory === 'ALL' ? (
                            <video src="/product-listing/banners/allProductsBanner.webm" autoPlay loop muted />
                        ) : (
                            <img src={seriesBannerData} alt={smartPhoneActiveCategory} className="rounded-xl w-full" />
                        )
                    }
                </div>

                <div className="tagPlusCards flex flex-col gap-8">
                    <FilterTags />

                    <div className="hidden md:flex flex-col gap-12">
                        <div className="flex flex-col gap-5">
                            {paginatedProducts.length === 0 ? (
                                <p className="text-gray-300">No smartphones match your selected filters.</p>
                            ) : (
                                <div>
                                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {paginatedProducts?.map(phone => (
                                            <ProductCard key={phone.id} product={phone} />
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className="flex justify-center items-center mt-4">
                                <img src='/product-listing/arrow-left-carousel.svg' onClick={prevPage} disabled={currentPage === 1} className="p-3 cursor-pointer" />
                                <span className="text-sm leading-[22.4px] tracking-[-0.02em] text-[#F8F6F3]">{currentPage} of {totalPages}</span>
                                <img src='/product-listing/arrow-right-carousel.svg' onClick={nextPage} disabled={currentPage === totalPages} className="p-3 cursor-pointer" />
                            </div>
                        </div>

                        {/* Explore More */}
                        <div className='content lg:px-[119px] relative w-full h-[462px] lg:min-h-[350px] lg:h-full flex flex-col justify-center items-center'>
                            <div className='flex flex-col-reverse lg:flex-row justify-between items-center z-20'>
                                <div className=' lg:scale-[80%] xl:scale-100 text-white max-w-[296px] text-center lg:text-left lg:max-w-[463px] z-20 '>
                                    <h2 className='xl:text-[36px] font-bold xl:leading-[46.8px] text-desktop/h4 '>Stay Plugged into Your<br />Go-to Socials with itel</h2>
                                    <p className='mb-8 xl:text-desktop/body/1 xl:leading-6 text-[14px] leading-4 -tracking-[0.14px] text-white/80 mt-2 lg:mt-4 '>Get all the must-have accessories for your fav itel mobile, like the itel power bank and itel earphone.</p>
                                    <BuyNowSquareBG purchaseLink="https://www.instagram.com/itel_india/" content="EXPLORE" />
                                </div>

                                {/* Selfie Image */}
                                <div className=' max-w-[302px] lg:max-w-[517px] z-20'>
                                    <img src={'/static_page/homepage/selfie.png'} />
                                </div>

                                {/* Background Image */}
                                <img src="/product-listing/exploreBannerLaptop.png" className='absolute  left-0 z-10 hidden lg:block top-1/2 -translate-y-1/2' />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductSectionLaptop;
