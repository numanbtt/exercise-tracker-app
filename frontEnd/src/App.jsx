import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/dashboard/*" element={<Dashboard />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
