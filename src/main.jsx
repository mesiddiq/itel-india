import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import NextTopLoader from 'nextjs-toploader'

createRoot(document.getElementById('root')).render(
	<Router>
		<NextTopLoader
			color='#ff0037'
			showSpinner={false}
		/>
		<App />
	</Router>,
)