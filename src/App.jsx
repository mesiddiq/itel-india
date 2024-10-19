import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/static_pages/HomePage'
import STwentyThree from './pages/s_series/STwentyThree'
import STwentyThreePlus from './pages/s_series/STwentyThreePlus'
import STwentyFour from './pages/s_series/STwentyFour'
import PFiftyFive from './pages/p_series/PFiftyFive'
import S_Series_Parent from './pages/s_series/S_Series_Parent'
import Footer from './components/common/Footer'
import Support from './pages/static_pages/header/Support'
import ScreenReplacement from './pages/static_pages/header/Support/ScreenReplacement'
import Promise100 from './pages/static_pages/header/Support/Promise100'
import EWaste from './pages/static_pages/header/Support/E-Waste'
import CSR from "./pages/static_pages/CSR"
import Aboutus from './pages/static_pages/Aboutus'
import Contactus from './pages/static_pages/Contactus'
import FAQ from './pages/static_pages/FAQ'
import P_Series_Parent from './pages/p_series/P_Series_Parent'
import ServiceCenters from './pages/static_pages/ServiceCenters'
import PFiftyFive5g from './pages/p_series/PFiftyFive5g'
import PFiftyFivePlus from './pages/p_series/PFiftyFivePlus'
import PFiftyFiveT from './pages/p_series/PFiftyFiveT'

import { 
	Circle1, 
	It2175p, 
	It5027, 
	It5330, 
	Power120, 
	Power450, 
	SuperGuru400, 
	SuperGuru4G, 
	SuperGuru600 
} from './pages/feature_phone'
import HomePageButtons from './components/common/HomePageButtons'


function App() {

	useEffect(() => {
		Aos.init({
			duration: 700
		})
	}, [])

	return (
		<main>
			<Routes>

				<Route path='/' element={<HomePageButtons/>} />
				{/********************************************************/}
				{/* 					Static Pages					 */}
				{/********************************************************/}


				<Route path='/homepage' element={<HomePage />} />
				<Route path='/support' element={<Support />} />
				<Route path='/support/screenreplacement' element={<ScreenReplacement />} />
				<Route path='/support/e-waste-management' element={<EWaste />} />
				<Route path='/support/100-days-promise' element={<Promise100 />} />
				<Route path='/csr' element={<CSR />} />
				<Route path='/aboutus' element={<Aboutus />} />
				<Route path='/contactus' element={<Contactus />} />
				<Route path='/servicecenters' element={<ServiceCenters />} />
				<Route path='/FAQ' element={<FAQ/>} />
				

				{/* ***************************************************************************************************/}
				{/* *******************************************SmartPhones*********************************************/}
				{/* ***************************************************************************************************/}

				{/********************************************************/}
				{/* 					S series						 */}
				{/********************************************************/}

				<Route path='/smartphones/s-series' element={<S_Series_Parent />} >
					<Route path='s23' element={<STwentyThree />} />
					<Route path='s23p' element={<STwentyThreePlus />} />
					<Route path='s24' element={<STwentyFour />} />
				</Route>

				{/********************************************************/}
				{/* 					P series						 */}
				{/********************************************************/}

				<Route path='/smartphones/p-series' element={<P_Series_Parent />} >
					<Route path='p55-5g' element={<PFiftyFive5g />} />
					<Route path='p55' element={<PFiftyFive />} />
					<Route path='p55' element={<PFiftyFivePlus />} />
					<Route path='p55t' element={<PFiftyFiveT />} />
				</Route>

				{/********************************************************/}
				{/* 					A series						 */}
				{/********************************************************/}



				{/***************************************************************************************************/}
				{/*****************************************Feature Phoness*******************************************/}
				{/***************************************************************************************************/}
				<Route path='/featurephones'>
					<Route path='super-guru-4g' element={<SuperGuru4G />} />
					<Route path='super-guru-400' element={<SuperGuru400 />} />
					<Route path='super-guru-600' element={<SuperGuru600 />} />
					<Route path='circle1' element={<Circle1 />} />
					<Route path='it-2175p' element={<It2175p />} />
					<Route path='it-5027' element={<It5027 />} />
					<Route path='it-5330' element={<It5330 />} />
					<Route path='power-120' element={<Power120 />} />
					<Route path='power-450' element={<Power450 />} />
				</Route>
			</Routes>
			<Footer />
		</main>
	)
}

export default App;