import { Helmet } from 'react-helmet'
import ProductListingBanner from './featurephoneProduct/ProductListingBanner'
import ProductListLaptop from './featurephoneProduct/ProductListLaptop'
import ProductListMobile from './featurephoneProduct/ProductListMobile'

export default function ProductPage() {
    return (
        <>
            <Helmet>
                <title>Featurephones</title>
                {/* <meta name="description" content={``} /> */}
            </Helmet>
            <main className="font-markot lg:px-8 lg:pt-12 bg-[#0A0C08]">

                {/* Adjusted for all devices */}
                <ProductListingBanner />

                {/* Seperate sections for mobile and laptop */}
                <div className='hidden lg:block'>
                    <ProductListLaptop />
                </div>
                <div className='block lg:hidden'>
                    <ProductListMobile />
                </div>

            </main>

        </>
    )
}