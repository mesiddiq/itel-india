import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import Footer from './components/common/footer'
import BackToTopButton from './utils/BackToTop'
const FlipOne = lazy(() => import('./pages/feature_phone/FlipOne'));
const SmartPhoneProductPage = lazy(() => import('./pages/product/SmartPhoneProductPage'));
const FeaturePhoneProductPage = lazy(() => import('./pages/product/FeaturePhoneProductPage'));
const Loading = lazy(() => import('./pages/static_pages/Loading'));
const Blog = lazy(() => import('./pages/static_pages/Blog'));
const BlogListing = lazy(() => import('./pages/static_pages/BlogListing'));
const Thankyou = lazy(() => import('./pages/static_pages/Thankyou'));
const Commingsoon = lazy(() => import('./pages/static_pages/Commingsoon'));

const HomePage = lazy(() => import('./pages/static_pages/HomePage'));
const STwentyThree = lazy(() => import('./pages/s_series/STwentyThree'));
const STwentyThreePlus = lazy(() => import('./pages/s_series/STwentyThreePlus'));
const STwentyFour = lazy(() => import('./pages/s_series/STwentyFour'));
const PFiftyFive = lazy(() => import('./pages/p_series/PFiftyFive'));
const S_Series_Parent = lazy(() => import('./pages/s_series/S_Series_Parent'));
const Investor = lazy(() => import('./pages/static_pages/Investor'));
// const Footer = lazy(() => import('./components/common/Footer'));
const Support = lazy(() => import('./pages/static_pages/Support'));
const ScreenReplacement = lazy(() => import('./pages/static_pages/ScreenReplacement'));
const Promise100 = lazy(() => import('./pages/static_pages/Promise100'));
const EWaste = lazy(() => import('./pages/static_pages/E-Waste'));
const CSR = lazy(() => import('./pages/static_pages/CSR'));
const Aboutus = lazy(() => import('./pages/static_pages/Aboutus'));
const Contactus = lazy(() => import('./pages/static_pages/Contactus'));
const FAQ = lazy(() => import('./pages/static_pages/FAQ'));
const P_Series_Parent = lazy(() => import('./pages/p_series/P_Series_Parent'));
const ServiceCenters = lazy(() => import('./pages/static_pages/ServiceCenters'));
const PFiftyFive5g = lazy(() => import('./pages/p_series/PFiftyFive5g'));
const PFiftyFivePlus = lazy(() => import('./pages/p_series/PFiftyFivePlus'));
const PFiftyFiveT = lazy(() => import('./pages/p_series/PFiftyFiveT'));
const ColorPro5G = lazy(() => import('./pages/color_series/ColorPro5G'));
const NotFound = lazy(() => import('./pages/static_pages/NotFound'));

const A_Series_Parent = lazy(() => import('./pages/a_series/A_Series_Parent'));
const A05i = lazy(() => import('./pages/a_series/A05i'));

const ASeventy = lazy(() => import('./pages/a_series/ASeventy'));
const A05 = lazy(() => import('./pages/a_series/A05'));
const ATwentyThreeS = lazy(() => import('./pages/a_series/ATwentyThreeS'));
const A50C = lazy(() => import('./pages/a_series/A50C'));
const Navbar = lazy(() => import('./pages/Navbar'));
const ScrollToTop = lazy(() => import('./utils/ScrollToTop'));
const A50 = lazy(() => import('./pages/a_series/A50'));
const NavbarMobile = lazy(() => import('./pages/NavbarMobile'));
const ProductListing = lazy(() => import('./pages/static_pages/ProductListing'));
const FeaturePhoneParent = lazy(() => import('./pages/feature_phone/FeaturePhoneParent'));

const Circle1 = lazy(() => import('./pages/feature_phone/Circle1'));
const It2175p = lazy(() => import('./pages/feature_phone/It2175p'));
const It5027 = lazy(() => import('./pages/feature_phone/It5027'));
const It5262 = lazy(() => import('./pages/feature_phone/It5262'));
const It5330 = lazy(() => import('./pages/feature_phone/It5330'));
const Power120 = lazy(() => import('./pages/feature_phone/Power120'));
const Power450 = lazy(() => import('./pages/feature_phone/Power450'));
const SuperGuru400 = lazy(() => import('./pages/feature_phone/SuperGuru400'));
const SuperGuru4G = lazy(() => import('./pages/feature_phone/SuperGuru4G'));
const SuperGuru600 = lazy(() => import('./pages/feature_phone/SuperGuru600'));
const Ace2Power = lazy(() => import('./pages/feature_phone/Ace2Power'));


function App() {

	useEffect(() => {
		Aos.init({
			duration: 1000,
			once: true
		})
	}, [])

	return (
		<Suspense fallback={<Loading />}>

			<main>
				<NavbarMobile />
				<Navbar />
				<Routes>
					<Route path='/' element={<HomePage />} />

					{/********************************************************/}
					{/* 					Static Pages	   				*/}
					{/********************************************************/}

					<Route path='/aryan' element={<ProductListing />} />
					<Route path='/products' element={<SmartPhoneProductPage />} />
					<Route path='/featurephones' element={<FeaturePhoneProductPage />} />
					<Route path='/support' element={<Support />} />
					<Route path='/support/1-time-screen-replacement' element={<ScreenReplacement />} />
					<Route path='/support/e-waste-management' element={<EWaste />} />
					<Route path='/support/100-days-service-promise' element={<Promise100 />} />
					<Route path='/corporate-social-responsibility-csr' element={<CSR />} />
					<Route path='/about-us-itel-mobile-india' element={<Aboutus />} />
					<Route path='/contact-us' element={<Contactus />} />
					<Route path='/support/service-center-locator' element={<ServiceCenters />} />
					<Route path='/support/faqs' element={<FAQ />} />
					<Route path='/investor' element={<Investor />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/bloglisting' element={<BlogListing />} />
					<Route path='/submitted' element={<Thankyou />} />
					<Route path='/coming-soon' element={<Commingsoon />} />
					<Route path='/commingsoon' element={<Commingsoon />} />
					<Route path='/thankyou' element={<Thankyou />} />


					{/* ***************************************************************************************************/}
					{/* *******************************************SmartPhones*********************************************/}
					{/* ***************************************************************************************************/}

					{/********************************************************/}
					{/* 					S series						 */}
					{/********************************************************/}

					<Route path='/product' element={<S_Series_Parent />} >
						<Route path='s23' element={<STwentyThree />} />
						<Route path='s23-plus' element={<STwentyThreePlus />} />
						<Route path='s24' element={<STwentyFour />} />
					</Route>

					<Route path='/smartphones/color-series' element={<S_Series_Parent />} >
						<Route path='color-pro-5g' element={<ColorPro5G />} />
					</Route>

					{/********************************************************/}
					{/* 					P series						 */}
					{/********************************************************/}

					<Route path='/product' element={<P_Series_Parent />} >
						<Route path='p55-5g' element={<PFiftyFive5g />} />
						<Route path='p55' element={<PFiftyFive />} />
						<Route path='p55-plus' element={<PFiftyFivePlus />} />
						<Route path='p55t' element={<PFiftyFiveT />} />
					</Route>


					{/********************************************************/}
					{/* 					A series						 */}
					{/********************************************************/}

					<Route path='/product' element={<A_Series_Parent />} >
						<Route path='a05' element={<A05 />} />
						<Route path='a05-i' element={<A05i />} />
						<Route path='a50-c' element={<A50C />} />
						<Route path='a50' element={<A50 />} />
						<Route path='a70' element={<ASeventy />} />
						<Route path='a23-s' element={<ATwentyThreeS />} />
					</Route>


					{/********************************************************/}
					{/* 					Color Pro 5g					 */}
					{/********************************************************/}

					<Route path='/product' element={<S_Series_Parent />} >
						<Route path='color-pro-5g' element={<ColorPro5G />} />
					</Route>


					{/***************************************************************************************************/}
					{/*****************************************Feature Phoness*******************************************/}
					{/***************************************************************************************************/}
					<Route path='/product' element={<FeaturePhoneParent />}>
						<Route path='super-guru-4g' element={<SuperGuru4G />} />
						<Route path='super-guru-400' element={<SuperGuru400 />} />
						<Route path='super-guru-600' element={<SuperGuru600 />} />
						<Route path='circle-1' element={<Circle1 />} />
						<Route path='it2175p' element={<It2175p />} />
						<Route path='it5262' element={<It5262 />} />
						<Route path='it5027' element={<It5027 />} />
						<Route path='it5330' element={<It5330 />} />
						<Route path='power-120' element={<Power120 />} />
						<Route path='power-450' element={<Power450 />} />
						<Route path='ace-2-power' element={<Ace2Power />} />
						<Route path='flip-one' element={<FlipOne />} />
					</Route>

					{/* ***********************Not Found**************** */}
					<Route path='/*' element={<NotFound />} />

				</Routes>
				<Footer />
				<ScrollToTop />
				<BackToTopButton />
			</main>
		</Suspense>
	)
}

export default App;