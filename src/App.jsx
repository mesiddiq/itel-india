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
import SuperGuru4G from './pages/feature_phone/SuperGuru4G'
import S_Series_Parent from './pages/s_series/S_Series_Parent'
import SuperGuru400 from './pages/feature_phone/SuperGuru400'
import SuperGuru600 from './pages/feature_phone/SuperGuru600'
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

function App() {

	useEffect(() => {
		Aos.init({
			duration: 700
		})
	}, [])

	return (
		<main>
			<Routes>
				<Route path='/' element={
					<div className='flex flex-col gap-4'>
						<Link className='text-blue-500 underline' to='/homepage'>Home</Link>
						<Link className='text-blue-500 underline' to='/smartphones/s-series/s23'>s-23</Link>
						<Link className='text-blue-500 underline' to='/smartphones/s-series/s23p'>s-23-plus</Link>
						<Link className='text-blue-500 underline' to='/smartphones/s-series/s24'>s-24</Link>
						<Link className='text-blue-500 underline' to='/smartphones/p-series/p55-5g'>p-55 5G</Link>
						<Link className='text-blue-500 underline' to='/smartphones/p-series/p55'>p-55</Link>
						<Link className='text-blue-500 underline' to='/featurephones/super-guru-4g'>s guru 4g</Link>
						<Link className='text-blue-500 underline' to='/featurephones/super-guru-400'>s guru 400</Link>
						<Link className='text-blue-500 underline' to='/featurephones/super-guru-600'>s guru 600</Link>
						<Link className='text-blue-500 underline' to='/support'>Support</Link>
						<Link className='text-blue-500 underline' to='/csr'>CSR</Link>
						<Link className='text-blue-500 underline' to='/aboutus'>About us</Link>
						<Link className='text-blue-500 underline' to='/contactus'>Contact us</Link>
						<Link className='text-blue-500 underline' to='/servicecenters'>Service Centers</Link>
						<Link className='text-blue-500 underline' to='/support/screenreplacement'>Screen Replacement</Link>
						<Link className='text-blue-500 underline' to='/support/e-waste-management'>E-Waste Management</Link>
						<Link className='text-blue-500 underline' to='/support/100-days-promise'>100 Days Promise</Link>
                         
					</div>} />
	
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
					<Route path='p55' element={<PFiftyFiveT/>} />
				</Route>

				{/********************************************************/}
				{/* 					A series						 */}
				{/********************************************************/}



				{/***************************************************************************************************/}
				{/*****************************************Feature Phoness*******************************************/}
				{/***************************************************************************************************/}

				{/********************************************************/}
				{/* 				  Super series						 */}
				{/********************************************************/}
				<Route path='/featurephones/super-guru-4g' element={<SuperGuru4G />} />
				<Route path='/featurephones/super-guru-400' element={<SuperGuru400 />} />
				<Route path='/featurephones/super-guru-600' element={<SuperGuru600 />} />
			</Routes>
			<Footer />
		</main>
	)
}

export default App;