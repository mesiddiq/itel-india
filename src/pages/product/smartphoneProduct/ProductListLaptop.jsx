import SupportChannels from '../../../components/common/smartphone_common/SupportChannels';
import Filters from './Filters';
import ProductSectionLaptop from './ProductSectionLaptop';

const ProductListLaptop = () => {

    return (
        <>
            {/* Laptop */}
            <section className="hidden lg:block py-10 text-white relative">
                <div className="flex flex-row gap-8">
                    <div
                        id="filter-section"
                        className={`hidden md:block md:w-1/4 h-1/4`}
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