import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import STwentyThreePlus from './pages/s_series/STwentyThreePlus';


function App() {
	return (
		<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/s23-plus" element={<STwentyThreePlus />} />
      </Routes>
    </Router>
	)
}

export default App
