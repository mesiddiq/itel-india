import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import './App.css'
import HomePage from './pages/HomePage'

function App() {

	useEffect(() => {
		Aos.init({
			duration: 700
		})
	}, [])

	return (
		<>
			<HomePage />
		</>
	)
}

export default App
