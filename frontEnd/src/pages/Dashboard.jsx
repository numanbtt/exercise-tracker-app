import React, { useEffect } from "react";
import NavbarDashboardHorizontal from "../components/NavbarDashboardHorizontal";
import NavbarDashboardVertical from "../components/NavbarDashboardVertical";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
} from "react-router-dom";
import PlusIcon from "../components/PlusIcon";
import Activities from "./Activities";
import AddActivity from "../components/dashboard/AddActivity";
import { useSelector } from "react-redux";
import SongsPlaylist from "./SongsPlaylist";
import Calculators from "./Calculators";
import Workouts from "./Workouts";

const Dashboard = () => {
	const navigate = useNavigate();
	const userID = useSelector((state) => state.userData.userID);

	useEffect(() => {
		navigate();
	}, []);
	return (
		<>
			{userID === "" ? (
				navigate("/login")
			) : (
				<div className="dashboardbg h-screen bg-cover bg-center">
					<div className="h-full bg-black bg-opacity-5 p-5">
						<div className="grid grid-cols-12">
							<div className="col-span-2">
								<NavbarDashboardVertical />
							</div>
							<div className="col-span-10 px-3">
								<NavbarDashboardHorizontal />
								<div>
									<Routes>
										<Route path="/" element={<AddActivity />} />
									</Routes>
								</div>
								<div>
									<Routes>
										<Route path="/activities" element={<Activities />} />
									</Routes>
								</div>
								<div>
									<Routes>
										<Route path="/workouts" element={<Workouts />} />
									</Routes>
								</div>
								<div>
									<Routes>
										<Route path="/calculators" element={<Calculators />} />
									</Routes>
								</div>
								<div>
									<Routes>
										<Route path="/playlist" element={<SongsPlaylist />} />
									</Routes>
								</div>
							</div>
						</div>
					</div>
					<PlusIcon />
				</div>
			)}
		</>
	);
};

export default Dashboard;
