import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/static_pages/HomePage'
import STwentyThree from './pages/s_series/STwentyThree'
import STwentyThreePlus from './pages/s_series/STwentyThreePlus'
// import STwentyFour from './pages/s_series/STwentyFour'
import PFiftyFive from './pages/p_series/PFiftyFive'
import SuperGuru4G from './pages/feature_phone/SuperGuru4G'
import Footer from './components/common/Footer'

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
						<Link className='text-blue-500 underline' to='/homepage'>Homepage</Link>
						<Link className='text-blue-500 underline' to='/smartphones/s-series/s23'>s-23</Link>
						<Link className='text-blue-500 underline' to='/smartphones/s-series/s23p'>s-23-plus</Link>
						<Link className='text-blue-500 underline' to='/smartphones/s-series/s24'>s-24</Link>
						<Link className='text-blue-500 underline' to='/smartphones/p-series/p55'>p-55</Link>
						<Link className='text-blue-500 underline' to='/featurephones/s-guru-4g'>s guru 4g</Link>
					</div>} />
				<Route path='/homepage' element={<HomePage />} />
				<Route path='/smartphones/s-series/s23' element={<STwentyThree />} />
				<Route path='/smartphones/s-series/s23p' element={<STwentyThreePlus />} />
				<Route path='/smartphones/s-series/s24' element={<STwentyFour />} />
				<Route path='/smartphones/p-series/p55' element={<PFiftyFive />} />
				<Route path='/featurephones/s-guru-4g' element={<SuperGuru4G />} />
			</Routes>
			<Footer />
		</main>
	)
}

export default App