import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import NextTopLoader from 'nextjs-toploader'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
	<Router>
		<Provider store={store}>
			<NextTopLoader
				color='#ff0037'
				showSpinner={false}
			/>
			<App />
		</Provider>
	</Router>,
)