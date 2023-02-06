import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

const NavbarDashboardHorizontal = () => {
	return (
		<div>
			<div className="rounded-xl h-full flex justify-between items-center glassmorphism py-2 ">
				<h1 className="text-2xl text-white px-4 font-sans font-bold">
					Good Morning, Numan!
				</h1>
				<div className="flex items-center justify-center space-x-3 mx-4">
					<IoMdNotificationsOutline className=" text-2xl text-white hover:rotate-12 hover:scale-105 transition duration-300 cursor-pointer" />
					<div className="h-10 w-10 numanbg rounded-full hover:scale-105 transition duration-300 cursor-pointer"></div>
				</div>
			</div>
		</div>
	);
};

export default NavbarDashboardHorizontal;
