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

function App() {

	useEffect(() => {
		Aos.init({
			duration: 700
		})
	}, [])

	return (
		<>
			<Routes>
				<Route path='/' element={<h1 className='font-bricolage text-desktop/large/h'>S23</h1>} />
				<Route path='/smartphones/s-series/s23' element={<STwentyThree />} />
				<Route path='/smartphones/s-series/s23p' element={<STwentyThreePlus />} />
				<Route path='/smartphones/s-series/s24' element={<STwentyFour />} />
				<Route path='/smartphones/p-series/55' element={<PFiftyFive />} />
			</Routes>
		</>
	)
}

export default App
