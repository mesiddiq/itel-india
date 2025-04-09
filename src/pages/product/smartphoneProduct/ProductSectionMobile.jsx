import SeriesTags from "./SeriesTags";
import BuyNowSquareBG from "../../../components/common/smartphone_common/BuyNowSquareBG";
import { AllPhonesData } from '../../../data/AllPhoneData';
import Compare from "../Compare";
import Filters from "./Filters";
import { useFilterStore } from "../../../zustandstore/store";
import { useMemo } from "react";
import ProductCard from "../ProductCard";

const ProductSectionMobile = () => {

    const PRODUCTS_PER_PAGE = 6;

    const {
        smartPhoneFeatures,
        setSmartPhoneCurrentPage,
        smartPhoneCurrentPage,
        smartPhonePriceRanges,
        smartPhoneActiveCategory,
        smartPhoneStorage,
        smartPhoneScreenSizes,
        smartPhoneCameras
    } = useFilterStore();

    const filteredProducts = useMemo(() => {
        return AllPhonesData.filter((product) => {
            // Filter by category
            if (smartPhoneActiveCategory !== 'ALL') {
                if (product.category !== smartPhoneActiveCategory) return false;
            }

            // Filter by screen size
            if (smartPhoneScreenSizes.length > 0) {
                const screenSizeInRange = smartPhoneScreenSizes.some(range => {
                    if (range === 'Under 6"' && product.screenSize < 6) return true;
                    if (range === '6" - 6.5"' && product.screenSize >= 6 && product.screenSize <= 6.5) {
                        return true;
                    }
                    if (range === 'Above 6.5"' && product.screenSize > 6.5) {
                        return true;
                    }
                    return false;
                });
                if (!screenSizeInRange) return false;
            }


            // Filter by price range
            if (smartPhonePriceRanges.length > 0) {
                const priceInRange = smartPhonePriceRanges.some(range => {
                    if (range === 'Under ₹5,000' && product.price < 5000) return true;
                    if (range === '₹5,000 - ₹7,000' && product.price >= 5000 && product.price <= 7000) return true;
                    if (range === '₹7,000 - ₹10,000' && product.price > 7000 && product.price <= 10000) return true;
                    if (range === 'Above ₹10,000' && product.price > 10000) return true;
                    return false;
                });

                if (!priceInRange) return false;
            }

            // Filter by features
            if (smartPhoneFeatures.length > 0) {
                const hasFeatures = smartPhoneFeatures.some(feature => product.features.includes(feature));
                if (!hasFeatures) return false;
            }

            // Filter by camera
            if (smartPhoneCameras.length > 0 && !smartPhoneCameras.includes(product.camera || '')) {
                return false;
            }

            // Filter by storage
            if (smartPhoneStorage.length > 0 && !smartPhoneStorage.includes(product.storage || '')) {
                return false;
            }

            return true;
        });

    }, [smartPhoneActiveCategory, smartPhonePriceRanges, smartPhoneStorage, smartPhoneScreenSizes, smartPhoneCameras, smartPhoneFeatures]);
    // screenSizes, batteryTypes, priceRanges, networks, features, cameras, storageOptions, 

    // Calculate pagination
    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    const startIndex = (smartPhoneCurrentPage - 1) * PRODUCTS_PER_PAGE;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

    // Handle page changes
    const nextPage = () => {
        if (smartPhoneCurrentPage < totalPages) {
            setSmartPhoneCurrentPage(smartPhoneCurrentPage + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const prevPage = () => {
        if (smartPhoneCurrentPage > 1) {
            setSmartPhoneCurrentPage(smartPhoneCurrentPage - 1);
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

            {/* Mobile */}
            <section className="px-4 overflow-hidden lg:hidden py-10 text-white flex flex-col gap-7">
                <div className="filterCompare flex flex-row justify-between items-center">
                    <Filters />
                    <Compare phoneData={AllPhonesData} />
                </div>
                <div className="flex flex-col gap-5">
                    <SeriesTags />

                    {
                        smartPhoneActiveCategory === 'ALL' ? (
                            <video src="/product-listing/banners/allProductsBanner.webm" autoPlay loop muted />
                        ) : (
                            <img src={seriesBannerData} alt={smartPhoneActiveCategory} className="rounded-xl w-full" />
                        )
                    }

                    {/* List of Products */}
                    <div className="allProducts flex flex-col gap-5">
                        {/* Product card + Pagination */}
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
                            {
                                totalPages > 1 && (
                                    <div className="flex justify-center items-center mt-4">
                                        <img src='/product-listing/arrow-left-carousel.svg' onClick={prevPage} disabled={smartPhoneCurrentPage === 1} className="p-3 cursor-pointer" />
                                        <span className="text-sm leading-[22.4px] tracking-[-0.02em] text-[#F8F6F3]">{smartPhoneCurrentPage} of {totalPages}</span>
                                        <img src='/product-listing/arrow-right-carousel.svg' onClick={nextPage} disabled={smartPhoneCurrentPage === totalPages} className="p-3 cursor-pointer" />
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    {/* Explore More */}
                    <div className=' mt-5 content lg:px-[119px] relative w-full h-[552px] lg:min-h-[350px] lg:h-full flex flex-col justify-center items-center'>
                        <div className='flex flex-col-reverse lg:flex-row justify-between items-center z-20'>

                            <div className='scale-[80%] xms:scale-80 sm:scale-100 flex flex-col lg:items-start items-center text-white max-w-[296px] text-center lg:text-left lg:max-w-[463px] z-20 '>
                                <h2 className='lg:text-[36px] font-bold lg:leading-[46.8px] text-desktop/h4 '>Stay Plugged into Your<br />Go-to Socials with itel</h2>
                                <p className='mb-8 lg:text-desktop/body/1 lg:leading-6 text-[14px] leading-4 -tracking-[0.14px] text-white/80 mt-2 lg:mt-4 '>Get all the must-have accessories for your fav itel mobile, like the itel power bank and itel earphone.</p>
                                <BuyNowSquareBG purchaseLink="https://www.instagram.com/itel_india/" content="EXPLORE" />
                            </div>

                            {/* Selfie Image */}
                            <div className='scale-[80%] sm:scale-100 max-w-[302px] lg:max-w-[517px] z-20'>
                                <img src={'/static_page/homepage/selfie.png'} />
                            </div>

                            {/* Background Image */}
                            <img src="/product-listing/exploreBannerMobile.png" className='absolute scale-100 xms:scale-[70%] sm:scale-[60%]  left-1/2 -translate-x-1/2 z-10 lg:hidden top-1/2 -translate-y-1/2' />

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default ProductSectionMobile;
