
import HomePage from './pages/HomePage'
import Video from './pages/Video'
import DareToDoIt from './pages/DareToDoIt'
import StayPlugged from './pages/StayPlugged'
import Footer from './components/common/Footer'
import CoolGadgets from './components/core/CoolGadgets'
import SmartAppliances from './components/core/SmartAppliances'
import Navbar from './components/common/Navbar'
import SliderComponent from './components/core/SliderComponent'
import TvAnimationLoop from './components/core/TvAnimation'
import ImageWithText from './components/core/ImageWithText'
import HotPicks from './components/core/HotPicks'

function App() {

	return (
		<main className="bg-[#111111] min-h-screen space-y-[60px] md:space-y-[120px] px-5 md:px-0">
			<Navbar/>
            <SliderComponent/>
			<CoolGadgets />
			<SmartAppliances />
			<ImageWithText/>
			<TvAnimationLoop/>
			<Video />
			<DareToDoIt />
			<HotPicks/>
			<StayPlugged />
			<Footer />
		</main>
	)
}

export default App
