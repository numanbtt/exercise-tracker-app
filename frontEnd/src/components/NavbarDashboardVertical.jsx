import React from "react";
import { BiHome } from "react-icons/bi";
import { MdOutlineFitnessCenter } from "react-icons/md";
import { HiOutlineCalculator } from "react-icons/hi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiRun } from "react-icons/bi";

const NavbarDashboardVertical = () => {
	return (
		<div className="h-[92vh]">
			<div className=" glassmorphism shadow-2xl h-full w-full rounded-xl pt-2">
				<div className="flex flex-row justify-start items-center text-gray-200 m-4 hover:scale-105 hover:text-white duration-200 transition p-2 cursor-pointer  hover:glassmorphism hover:bg-gray-200 hover:bg-opacity-20 rounded-md space-x-2">
					<BiHome className=" text-xl font-light ml-1" />
					<h1 className=" font-normal text-base">Overview</h1>
				</div>
				<div className="flex flex-row justify-start items-center text-gray-200 m-4 hover:scale-105 hover:text-white duration-200 transition  p-2 cursor-pointer hover:glassmorphism hover:bg-gray-200 hover:bg-opacity-20 rounded-md space-x-2">
					<BiRun className=" text-xl font-light ml-1" />
					<h1 className=" font-normal text-base">Activities</h1>
				</div>
				<div className="flex flex-row justify-start items-center text-gray-200 m-4 hover:scale-105 hover:text-white duration-200 transition  p-2 cursor-pointer hover:glassmorphism hover:bg-gray-200 hover:bg-opacity-20 rounded-md space-x-2">
					<MdOutlineFitnessCenter className=" text-xl font-light ml-1" />
					<h1 className=" font-normal text-base">Workouts</h1>
				</div>
				<div className="flex flex-row justify-start items-center text-gray-200 m-4 hover:scale-105 hover:text-white duration-200 transition  p-2 cursor-pointer hover:glassmorphism hover:bg-gray-200 hover:bg-opacity-20 rounded-md space-x-2">
					<HiOutlineCalculator className=" text-xl font-light ml-1" />
					<h1 className="font-normal text-base">Calculators</h1>
				</div>
				<div className="flex flex-row justify-start items-center text-gray-200 m-4 hover:scale-105 hover:text-white duration-200 transition  p-2 cursor-pointer hover:glassmorphism hover:bg-gray-200 hover:bg-opacity-20 rounded-md space-x-2">
					<AiOutlinePlayCircle className=" text-xl font-light ml-1" />
					<h1 className="font-normal text-base">Playlist</h1>
				</div>
			</div>
		</div>
	);
};

export default NavbarDashboardVertical;
