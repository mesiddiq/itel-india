import { useState } from 'react';
import ProductListingBanner from '../../components/core/static_pages_core/ProductListing/Product Section/ProductListingBanner'
import ProductListLaptop from '../../components/core/static_pages_core/ProductListing/Product Section/ProductListLaptop'
// import ProductList from '../../components/core/static_pages_core/ProductListing/Product Section/ProductListLaptop'
import ProductListMobile from '../../components/core/static_pages_core/ProductListing/Product Section/ProductListMobile'

const ProductListing = () => {
  const [activeSeries, setActiveSeries] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
        <main className="font-markot lg:px-8 lg:pt-12 bg-[#1c1c1c]">

          {/* Adjusted for all devices */}
          <ProductListingBanner />

          {/* Seperate sections for mobile and laptop */}
          <div className='hidden lg:block'>
            <ProductListLaptop activeSeries={activeSeries} setActiveSeries={setActiveSeries} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          </div>
          <div className='block lg:hidden'>
            <ProductListMobile activeSeries={activeSeries} setActiveSeries={setActiveSeries} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          </div>

        </main>
    </>
  )
}

export default ProductListing