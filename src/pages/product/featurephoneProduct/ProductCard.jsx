/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import AnimatedBuyButton from '../../../components/core/static_pages_core/ProductListing/Product Section/AnimatedBuyButton'

export default function ProductCard({ product }) {

    const { isNew, specification, thumbnail, title, description,purchaseLink } = product
    return (
        <div className=" py-3 md:py-5 px-3 gap-3 rounded-2xl lg:h-[526px] bg-[#232323] flex flex-col flex-wrap justify-around items-center" >

            {/* New */}
            {
                isNew == true ? (
                    <h1 className="md:w-[55px] lg:w-[55px] rounded-full bg-[#3A3358] px-3 py-[2px] text-[12px] lg:text-sm leading-[22.4px] tracking-[-0.01em]">
                        New
                    </h1>
                ) :
                    (
                        <h1 className="md:w-[30px] lg:w-[55px] h-[26px] rounded-full bg-transparent px-3 py-[2px] text-[12px] lg:text-sm leading-[22.4px] tracking-[-0.01em]">

                        </h1>
                    )
            }


            {/* ProductImage */}
            <div className='product-image-card flex justify-center items-center'>
                <img src={thumbnail} className='w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3 max-h-[280px]' />
            </div>


            {/* ProductDescription */}
            <div className="flex flex-col gap-3">
                <h1 className="text-base text-white md:text-desktop/h4 leading-[19.2px] tracking-[-0.01em] md:leading-[31.2px] md:tracking-[-0.02em] text-center">
                    {title}
                </h1>
                <h3 className="max-w-[250px] text-[10px] leading-[14px] tracking-[0.02em] md:text-sm md:leading-[22.4px] md:tracking-[-0.01em] text-center text-[#949494] md:text-[#C0C0C0]">
                    {description}
                </h3>
                {/* <h3 className="text-[10px] leading-[16px] tracking-[0.02em] md:text-xs md:leading-[19.2px] md:tracking-[-0.02em] text-center text-[#C0C0C0]">
            Old Price <s>₹1,20,000</s>
          </h3> */}
            </div>


            {/* PriceButton */}
            <Link to={purchaseLink} 
               rel="noopener noreferrer"
               className="w-full flex justify-center items-center max-w-[250px]">
                <AnimatedBuyButton price={specification?.price}/>
            </Link>

        </div>
    )
}