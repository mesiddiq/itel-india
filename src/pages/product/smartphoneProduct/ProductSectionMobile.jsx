import SeriesTags from "./SeriesTags";
import BuyNowSquareBG from "../../../components/common/smartphone_common/BuyNowSquareBG";
import { AllPhonesData } from '../../../data/AllPhoneData';
import Compare from "../Compare";
import Filters from "./Filters";

const ProductSectionMobile = () => {
   
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

                    {/* <PhoneBanner source={seriesBannerData[selectedSeries[0]]} /> */}

                    {/* List of Products */}
                    <div className="allProducts flex flex-col gap-5">
                        {/* Product card + Pagination */}
                        {/* <ProductList phones={currentPhones} /> */}
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
