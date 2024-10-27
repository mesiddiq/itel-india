import ProductListingBanner from '../../components/core/static_pages_core/ProductListing/Product Section/ProductListingBanner'
import ProductList from '../../components/core/static_pages_core/ProductListing/Product Section/ProductList'

const ProductListing = () => {
  return (
    <>
        <main className="font-markot lg:px-8 lg:pt-12 bg-[#1c1c1c]">

          {/* Adjusted for all devices */}
          <ProductListingBanner />

          {/* Seperate sections for mobile and laptop */}
          <ProductList />

        </main>
    </>
  )
}

export default ProductListing