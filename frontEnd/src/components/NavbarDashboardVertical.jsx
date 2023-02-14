import React from "react";
import { BiHome } from "react-icons/bi";
import { MdOutlineFitnessCenter } from "react-icons/md";
import { HiOutlineCalculator } from "react-icons/hi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiRun } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavbarDashboardVertical = () => {
	return (
		<div className="h-[92vh]">
			<div className=" glassmorphism h-full w-full rounded-xl pt-2 shadow-2xl">
				<Link to="/dashboard">
					<div className="hover:glassmorphism m-4 flex cursor-pointer flex-row items-center justify-start space-x-2 rounded-md p-2 text-gray-200 transition  duration-200 hover:scale-105 hover:bg-gray-200 hover:bg-opacity-20 hover:text-white">
						<BiHome className=" ml-1 text-xl font-light" />
						<h1 className=" text-base font-normal">Overview</h1>
					</div>
				</Link>
				<Link to="/dashboard/activities">
					<div className="hover:glassmorphism m-4 flex cursor-pointer flex-row items-center justify-start space-x-2 rounded-md p-2  text-gray-200 transition duration-200 hover:scale-105 hover:bg-gray-200 hover:bg-opacity-20 hover:text-white">
						<BiRun className=" ml-1 text-xl font-light" />
						<h1 className=" text-base font-normal">Activities</h1>
					</div>
				</Link>
				<Link to="/dashboard/workouts">
					<div className="hover:glassmorphism m-4 flex cursor-pointer flex-row items-center justify-start space-x-2 rounded-md p-2  text-gray-200 transition duration-200 hover:scale-105 hover:bg-gray-200 hover:bg-opacity-20 hover:text-white">
						<MdOutlineFitnessCenter className=" ml-1 text-xl font-light" />
						<h1 className=" text-base font-normal">Workouts</h1>
					</div>
				</Link>
				<Link to="/dashboard/calculators">
					<div className="hover:glassmorphism m-4 flex cursor-pointer flex-row items-center justify-start space-x-2 rounded-md p-2  text-gray-200 transition duration-200 hover:scale-105 hover:bg-gray-200 hover:bg-opacity-20 hover:text-white">
						<HiOutlineCalculator className=" ml-1 text-xl font-light" />
						<h1 className="text-base font-normal">Calculators</h1>
					</div>
				</Link>
				<Link to="/dashboard/playlist">
					<div className="hover:glassmorphism m-4 flex cursor-pointer flex-row items-center justify-start space-x-2 rounded-md p-2  text-gray-200 transition duration-200 hover:scale-105 hover:bg-gray-200 hover:bg-opacity-20 hover:text-white">
						<AiOutlinePlayCircle className=" ml-1 text-xl font-light" />
						<h1 className="text-base font-normal">Playlist</h1>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default NavbarDashboardVertical;
