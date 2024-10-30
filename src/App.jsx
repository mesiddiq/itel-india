import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/static_pages/HomePage'
import STwentyThree from './pages/s_series/STwentyThree'
import STwentyThreePlus from './pages/s_series/STwentyThreePlus'
import STwentyFour from './pages/s_series/STwentyFour'
import PFiftyFive from './pages/p_series/PFiftyFive'
import S_Series_Parent from './pages/s_series/S_Series_Parent'
import Investor from './pages/static_pages/Investor'
import Footer from './components/common/Footer'
import Support from './pages/static_pages/Support'
import ScreenReplacement from './pages/static_pages/ScreenReplacement'
import Promise100 from './pages/static_pages/Promise100'
import EWaste from './pages/static_pages/E-Waste'
import CSR from "./pages/static_pages/CSR"
import Aboutus from './pages/static_pages/Aboutus'
import Contactus from './pages/static_pages/Contactus'
import FAQ from './pages/static_pages/FAQ'
import P_Series_Parent from './pages/p_series/P_Series_Parent'
import ServiceCenters from './pages/static_pages/ServiceCenters'
import PFiftyFive5g from './pages/p_series/PFiftyFive5g'
import PFiftyFivePlus from './pages/p_series/PFiftyFivePlus'
import PFiftyFiveT from './pages/p_series/PFiftyFiveT'
import ColorPro5G from './pages/color_series/ColorPro5G'
import NotFound from './pages/static_pages/NotFound'

import A_Series_Parent from './pages/a_series/A_Series_Parent'
import A05i from './pages/a_series/A05i'

import {
	Circle1,
	It2175p,
	It5027,
	It5262,
	It5330,
	Power120,
	Power450,
	SuperGuru400,
	SuperGuru4G,
	SuperGuru600,
	Ace2Power
} from './pages/feature_phone'

import ASeventy from './pages/a_series/ASeventy'
import A05 from './pages/a_series/A05'
import ATwentyThreeS from './pages/a_series/ATwentyThreeS'
import A50C from './pages/a_series/A50C'
import Navbar from './pages/Navbar'
import ScrollToTop from './utils/ScrollToTop'
import A50 from './pages/a_series/A50'
import NavbarMobile from './pages/NavbarMobile'
import ProductListing from './pages/static_pages/ProductListing'
import FeaturePhoneParent from './pages/feature_phone/FeaturePhoneParent'


function App() {

	useEffect(() => {
		Aos.init({
			duration: 1000,
			once: true
		})
	}, [])

	return (
		<main>
			<NavbarMobile />
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />

				{/********************************************************/}
				{/* 					Static Pages	   				*/}
				{/********************************************************/}

				<Route path='/products' element={<ProductListing />} />
				<Route path='/support' element={<Support />} />
				<Route path='/support/1-time-screen-replacement' element={<ScreenReplacement />} />
				<Route path='/support/e-waste-management' element={<EWaste />} />
				<Route path='/support/100-days-service-promise' element={<Promise100 />} />
				<Route path='/corporate-social-responsibility-csr' element={<CSR />} />
				<Route path='/about-us-itel-mobile-india' element={<Aboutus />} />
				<Route path='/contact-us' element={<Contactus />} />
				<Route path='/support/service-center-locator' element={<ServiceCenters />} />
				<Route path='/support/faqs' element={<FAQ />} />
				<Route path='/investor' element={<Investor/>}/>


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

				<Route path='/product' element={<A_Series_Parent />} >
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
				</Route>

				{/* ***********************Not Found**************** */}
				<Route path='/*' element={<NotFound />} />

			</Routes>
			<Footer />
			<ScrollToTop />
		</main>
	)
}

export default App;