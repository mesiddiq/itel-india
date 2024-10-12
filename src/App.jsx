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
import SuperGuru4G from './pages/feature_phone/SuperGuru4G'

function App() {

	useEffect(() => {
		Aos.init({
			duration: 700
		})
	}, [])

	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/smartphones/s-series/s23' element={<STwentyThree />} />
				<Route path='/smartphones/s-series/s23p' element={<STwentyThreePlus />} />
				<Route path='/smartphones/s-series/s24' element={<STwentyFour />} />
				<Route path='/smartphones/p-series/55' element={<PFiftyFive />} />
				<Route path='/featurephone/s-guru-4g' element={<SuperGuru4G />} />
			</Routes>
		</>
	)
}

export default App
