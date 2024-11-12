/* eslint-disable no-unused-vars */
import Compare from "./Compare";
import SeriesTags from "./SeriesTags";
import { useEffect, useState } from "react";
import { AllFeaturePhoneData } from '../../../data/AllFeaturePhoneData'
import { useDispatch, useSelector } from "react-redux";
import { setFeaturePhones } from "../../../redux/slice/featurePhoneSlice";
import Filters from "./Filters";
import ProductList from "./ProductList";
import FilterTags from "./FilterTags";
import PhoneBanner from "./PhoneBanner";
import BuyNowSquareBG from "../../../components/common/smartphone_common/BuyNowSquareBG";

const seriesBannerData = {
    "All": '/product-listing/banners/allProductsBanner.gif',
    "S Series": '/product-listing/banners/sSeriesBanner.png',
    "P Series": '/product-listing/banners/pSeriesBanner.png',
    "A Series": '/product-listing/banners/aSeriesBanner.png',
}

const ProductSectionLaptop = () => {
    const dispatch = useDispatch();
    const featurePhonesData = useSelector(state => state.featurePhone.featurePhones);
    const selectedSeries = useSelector(state => state.filtersFeaturePhone.filtersFeaturePhone.series.length ? state.filtersFeaturePhone.filtersFeaturePhone.series : ['All']);

    const [currentPage, setCurrentPage] = useState(1);
    const phonesPerPageLaptop = 6;

    useEffect(() => {
        dispatch(setFeaturePhones(AllFeaturePhoneData));
    }, [dispatch]);

    const filteredPhones = selectedSeries[0] === 'All'
        ? featurePhonesData
        : featurePhonesData.filter(phone => phone.category === selectedSeries[0]);

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

                {/* <PhoneBanner source={seriesBannerData[selectedSeries[0]]} /> */}

                <div className="tagPlusCards flex flex-col gap-8">
                    <FilterTags />

                    <div className="hidden md:flex flex-col gap-12">
                        <div className="flex flex-col gap-5">
                            {/* Product card + Pagination */}
                            <ProductList phones={currentPhones} />
                        </div>

                        {/* Explore More Section */}
                        <div className='content lg:px-[119px] relative w-full h-[462px] lg:min-h-[350px] lg:h-full flex flex-col justify-center items-center'>
                            <div className='flex flex-col-reverse lg:flex-row justify-between items-center z-20'>
                                <button className="z-20 mt-4 lg:hidden">
                                    <img src="/static_page/homepage/staypluggedcta.png" alt="" className='' />
                                </button>
                                <div className=' text-white max-w-[296px] text-center lg:text-left lg:max-w-[463px] z-20 '>
                                    <h2 className='lg:text-[36px] font-bold lg:leading-[46.8px] text-desktop/h4 '>Stay Plugged into Your<br />Go-to Socials with itel</h2>
                                    <p className='mb-8 lg:text-desktop/body/1 lg:leading-6 text-[14px] leading-4 -tracking-[0.14px] text-white/80 mt-2 lg:mt-4 '>Get all the must-have accessories for your fav itel mobile, like the itel power bank and itel earphone.</p>
                                    <BuyNowSquareBG purchaseLink="https://www.instagram.com/itel_india/" content="EXPLORE"/>
                                </div>
                                <div className=' max-w-[302px] lg:max-w-[517px] z-20'>
                                    <img src={'/static_page/homepage/selfie.png'} />
                                </div>
                                <img src="/product-listing/exploreBannerLaptop.png" className='absolute top-0 left-0 z-10 hidden lg:block' />
                                <img src="/product-listing/exploreBannerMobile.png" className='absolute left-1/2 -translate-x-1/2 z-10 top-0 lg:hidden' />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductSectionLaptop;
