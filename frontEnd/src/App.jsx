import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
	return (
		<>
			<Router>
				<LandingPage />
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
