import React from "react";
import NavbarDashboardHorizontal from "../components/NavbarDashboardHorizontal";
import NavbarDashboardVertical from "../components/NavbarDashboardVertical";

const Dashboard = () => {
	return (
		<div className="bg-[url('./2846694.jpg')] bg-center bg-cover h-screen">
			<div className="bg-black bg-opacity-5 h-full p-5">
				<div className="grid grid-cols-12">
					<div className="col-span-2">
						<NavbarDashboardVertical />
					</div>
					<div className="col-span-10 px-3">
						<NavbarDashboardHorizontal />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
