import React from "react";
import AddActivity from "../components/dashboard/AddActivity";
import NavbarDashboardHorizontal from "../components/NavbarDashboardHorizontal";
import NavbarDashboardVertical from "../components/NavbarDashboardVertical";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Dashboard = () => {
	return (
		<div className="dashboardbg bg-center bg-cover h-screen">
			<div className="bg-black bg-opacity-5 h-full p-5">
				<div className="grid grid-cols-12">
					<div className="col-span-2">
						<NavbarDashboardVertical />
					</div>
					<div className="col-span-10 px-3">
						<NavbarDashboardHorizontal />
						<div className="h-[85%] flex justify-center items-center">
							<Routes>
								<Route path="/activities" element={<AddActivity />} />
							</Routes>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
