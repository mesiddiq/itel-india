/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import AnimatedBuyButton from '../../components/core/static_pages_core/ProductListing/Product Section/AnimatedBuyButton'

export default function ProductCard({ product }) {

    const { isNew, price, image, name, description, pageUrl } = product
    return (
        <Link to={'/product/' + pageUrl}>
            <div className=" py-3 md:py-5 px-3 gap-3 rounded-2xl bg-[#232323] flex flex-col flex-wrap justify-around items-center lg:h-[500px] h-[280px]" >
                {
                    isNew == true ? (
                        <h3 className="md:w-[55px] lg:w-[55px] rounded-full bg-[#3A3358] px-3 py-[2px] text-[12px] lg:text-sm leading-[22.4px] tracking-[-0.01em]">
                            New
                        </h3>
                    ) :
                        (
                            <h3 className="md:w-[30px] lg:w-[55px] h-[26px] rounded-full bg-transparent px-3 py-[2px] text-[12px] lg:text-sm leading-[22.4px] tracking-[-0.01em]">

                            </h3>
                        )
                }


                {/* ProductImage */}
                <div className='product-image-card flex justify-center items-center'>
                    <img src={image} className='w-2/3 lg:w-[80%] 2xl:w-2/3' />
                </div>


                {/* ProductDescription */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-base text-white md:text-desktop/h4 leading-[19.2px] tracking-[-0.01em] md:leading-[31.2px] md:tracking-[-0.02em] text-center">
                        {name}
                    </h3>
                    <h3 className="max-w-[250px] text-[10px] leading-[14px] tracking-[0.02em] md:text-sm md:leading-[22.4px] md:tracking-[-0.01em] text-center text-[#949494] md:text-[#C0C0C0]">
                        {description.split(' ').slice(0, 8).join(' ') + (description.split(' ').length > 10 ? '...' : '')}
                    </h3>
                </div>


                {/* PriceButton */}
                <Link to={'/product/' + pageUrl}
                    rel="noopener noreferrer"
                    className="w-full flex justify-center items-center max-w-[250px]">
                    <AnimatedBuyButton price={price} />
                </Link>

            </div>
        </Link>
    )
}