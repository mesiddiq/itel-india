import { Link } from 'react-router-dom'
import curlyLine from '/product-listing/curlyHeader.svg'
import readmore from '/product-listing/read-more.svg'

const ProductListingBanner = () => {
    return (

        <section className=" w-full h-[400px] md:h-[329px] bg-[#EBE8E2] lg:rounded-2xl relative overflow-hidden">

            <div className=' overflow-hidden flex md:flex-row flex-col bg-[#EBE8E2] h-full w-full rounded-2xl bg-no-repeat bg-center md:bg-right bg-cover md:bg-auto' style={{ backgroundImage: `url(${curlyLine})` }}>

                <section className='pl-5 md:pl-10 py-5 md:py-11 md:h-full md:w-1/2 w-full flex flex-col md:justify-between'>
                    <div className='flex flex-col'>
                        <h3 className='text-base md:text-2xl font-medium tracking-[-2%]'>
                            The Wait is Over!
                        </h3>
                        {/* Laptop Text */}
                        <h3 className='z-10 hidden md:block text-4xl md:text-5xl font-medium leading-[57.6px] tracking-[-0.04em] text-left text-[#FF0037]'>
                            Presenting Zeno 10
                        </h3>
                        {/* Mobile Text */}
                        <h3 className='z-10 block md:hidden text-4xl md:text-5xl font-medium leading-[57.6px] tracking-[-0.04em] text-left text-[#FF0037]'>
                            Presenting<br />Zeno 10
                        </h3>
                    </div>

                    <Link to="/product/zeno-10" className='cursor-pointer z-0'>
                        <section className='flex flex-row'>
                            <img src={readmore} className='w-1/3' />
                        </section>
                    </Link>
                </section>
                <div className="">
                    <img src={'/smartphone/zeno10/zeno10.webp'} alt='Zeno 10' className='' />
                </div>

            </div>

        </section>

    )
}

export default ProductListingBanner
//styleName: Desktop/H2;
