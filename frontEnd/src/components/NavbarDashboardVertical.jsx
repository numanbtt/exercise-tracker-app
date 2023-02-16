import React from "react";
import { BiHome } from "react-icons/bi";
import { MdOutlineFitnessCenter } from "react-icons/md";
import { HiOutlineCalculator } from "react-icons/hi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiRun } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavbarDashboardVertical = () => {
	return (
		<div>
			<div className="hidden h-[92vh] md:block">
				<div className="glassmorphism flex h-full w-full flex-col  justify-around rounded-xl pt-2 shadow-2xl lg:justify-start">
					<Link to="/dashboard/activities">
						<div className="hover:glassmorphism m-4 flex cursor-pointer flex-row items-center justify-center space-x-2 rounded-md text-gray-200 transition duration-200 hover:scale-105 hover:bg-gray-200 hover:bg-opacity-20 hover:text-white lg:justify-start lg:p-2">
							<BiHome className="  text-xl font-light lg:ml-1" />
							<h1 className="hidden text-base font-normal lg:block ">
								Overview
							</h1>
						</div>
					</Link>
					<Link to="/dashboard/activities">
						<div className="hover:glassmorphism m-4 flex cursor-pointer flex-row items-center justify-center space-x-2 rounded-md text-gray-200 transition  duration-200 hover:scale-105 hover:bg-gray-200 hover:bg-opacity-20 hover:text-white lg:justify-start lg:p-2">
							<BiRun className="text-xl font-light lg:ml-1" />
							<h1 className="hidden text-base font-normal lg:block">
								Activities
							</h1>
						</div>
					</Link>
					<Link to="/dashboard/activities">
						<div className="hover:glassmorphism m-4 flex cursor-pointer flex-row items-center justify-center space-x-2 rounded-md text-gray-200 transition  duration-200 hover:scale-105 hover:bg-gray-200 hover:bg-opacity-20 hover:text-white lg:justify-start lg:p-2">
							<MdOutlineFitnessCenter className="  text-xl font-light lg:ml-1" />
							<h1 className="hidden text-base font-normal lg:block">
								Workouts
							</h1>
						</div>
					</Link>
					<Link to="/dashboard/calculators">
						<div className="hover:glassmorphism m-4 flex cursor-pointer flex-row items-center justify-center space-x-2 rounded-md text-gray-200 transition  duration-200 hover:scale-105 hover:bg-gray-200 hover:bg-opacity-20 hover:text-white lg:justify-start lg:p-2">
							<HiOutlineCalculator className="  text-xl font-light lg:ml-1" />
							<h1 className="hidden text-base font-normal lg:block">
								Calculators
							</h1>
						</div>
					</Link>
					<Link to="/dashboard/playlist">
						<div className="hover:glassmorphism m-4 flex cursor-pointer flex-row items-center justify-center space-x-2 rounded-md text-gray-200 transition  duration-200 hover:scale-105 hover:bg-gray-200 hover:bg-opacity-20 hover:text-white lg:justify-start lg:p-2">
							<AiOutlinePlayCircle className="  text-xl font-light lg:ml-1" />
							<h1 className="hidden text-base font-normal lg:block">
								Playlist
							</h1>
						</div>
					</Link>
				</div>
			</div>
			<div className="block h-16 sm:h-20 md:hidden">
				<div className="glassmorphism flex h-full  w-screen flex-row items-center justify-around rounded-t-xl shadow-2xl">
					<Link to="/dashboard">
						<div className="hover:glassmorphism m-4 flex cursor-pointer flex-col items-center justify-center space-x-2 rounded-md text-gray-200 transition duration-200 hover:scale-105 hover:bg-opacity-20 hover:text-white lg:justify-start lg:p-2 lg:hover:bg-gray-200">
							<BiHome className="text-xl font-light lg:ml-1" />
							<h1 className="hidden text-base  font-normal sm:block lg:block ">
								Overview
							</h1>
						</div>
					</Link>
					<Link to="/dashboard/activities">
						<div className="hover:glassmorphism m-4 flex cursor-pointer flex-col items-center justify-center space-x-2 rounded-md text-gray-200 transition duration-200 hover:scale-105 hover:bg-opacity-20 hover:text-white lg:justify-start lg:p-2 lg:hover:bg-gray-200">
							<BiRun className="  text-xl font-light lg:ml-1" />
							<h1 className="hidden text-base font-normal sm:block lg:block">
								Activities
							</h1>
						</div>
					</Link>
					<Link to="/dashboard/workouts">
						<div className="hover:glassmorphism m-4 flex cursor-pointer flex-col items-center justify-center space-x-2 rounded-md text-gray-200 transition duration-200 hover:scale-105 hover:bg-opacity-20 hover:text-white lg:justify-start lg:p-2 lg:hover:bg-gray-200">
							<MdOutlineFitnessCenter className="text-xl font-light lg:ml-1" />
							<h1 className="hidden text-base font-normal sm:block lg:block">
								Workouts
							</h1>
						</div>
					</Link>
					<Link to="/dashboard/calculators">
						<div className="hover:glassmorphism m-4 flex cursor-pointer flex-col items-center justify-center space-x-2 rounded-md text-gray-200 transition duration-200 hover:scale-105 hover:bg-opacity-20 hover:text-white lg:justify-start lg:p-2 lg:hover:bg-gray-200">
							<HiOutlineCalculator className="  text-xl font-light lg:ml-1" />
							<h1 className="hidden text-base font-normal sm:block lg:block">
								Calculators
							</h1>
						</div>
					</Link>
					<Link to="/dashboard/playlist">
						<div className="hover:glassmorphism m-4 flex cursor-pointer flex-col items-center justify-center space-x-2 rounded-md text-gray-200 transition duration-200 hover:scale-105 hover:bg-opacity-20 hover:text-white lg:justify-start lg:p-2 lg:hover:bg-gray-200">
							<AiOutlinePlayCircle className="  text-xl font-light lg:ml-1" />
							<h1 className="hidden text-base font-normal sm:block lg:block">
								Playlist
							</h1>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavbarDashboardVertical;
