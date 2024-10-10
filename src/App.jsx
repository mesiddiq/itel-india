import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/static_pages/HomePage'

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
			</Routes>
		</>
	)
}

export default App
