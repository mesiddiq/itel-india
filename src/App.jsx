import './App.css'
import HomePage from './pages/HomePage'
import Video from './pages/Video'
import DareToDoIt from './pages/DareToDoIt'
import StayPlugged from './pages/StayPlugged'
import Footer from './components/common/Footer'

function App() {

	return (
		<main className="bg-[#111111] min-h-screen space-y-[60px] md:space-y-[120px] px-5 md:px-0">
			{/*<HomePage />*/}
			<Video />
			<DareToDoIt />
			<StayPlugged />
			<Footer />
		</main>
	)
}

export default App
