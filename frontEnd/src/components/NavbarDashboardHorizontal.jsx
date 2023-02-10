import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setProfileClickState } from "../redux/slices/ProfileClick.slice";
import ProfileClick from "./dashboard/ProfileClick";

const NavbarDashboardHorizontal = () => {
	const dispatch = useDispatch();
	const profileClickState = useSelector(
		(state) => state.profileClickState.profileClickState
	);
	const openSignOut = () => {
		dispatch(setProfileClickState());
	};

	const name = useSelector((state) => state.userData.name);
	return (
		<div>
			<div className="rounded-xl h-full flex justify-between items-center glassmorphism py-2 ">
				<h1 className="text-2xl text-white px-4 font-sans font-bold">
					Good Morning, {<span className="capitalize italic">{name}</span>}!
				</h1>
				<div className="flex items-center justify-center space-x-3 mx-4 relative">
					<IoMdNotificationsOutline className=" text-2xl text-white hover:rotate-12 hover:scale-105 transition duration-300 cursor-pointer" />
					<div
						className="h-10 w-10 numanbg rounded-full cursor-pointer"
						onClick={() => {
							dispatch(setProfileClickState());
						}}
					>
						{profileClickState && (
							<div className="absolute top-12 right-0">
								<ProfileClick />
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavbarDashboardHorizontal;
